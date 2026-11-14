const WS_URL= 'ws://chat.longapp.io.vn/chat/chat';

let socket: WebSocket | null = null;

let pendingRequest: {
    [level:String]: {
        resolve: (value: any) => void;
        reject: (reason: Error) => void;
        timer: ReturnType<typeof setTimeout>;
    };
} = {};

// Tạo kết nối với webSocket
function connectSocket(): Promise<WebSocket> {
    return new Promise((resolve, reject) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            resolve(socket);
            return;
        }

        if (socket && socket.readyState === WebSocket.CONNECTING) {
            socket.addEventListener('open', () => {
            if(socket){
                resolve(socket);
                }
            },{
                once: true});
                socket.addEventListener('error', (event) => {
                    reject(new Error('Không kết nối được với WebSocket'));
                }, { once: true });
                return;
            }

            socket = new WebSocket(WS_URL);
            socket.onopen=() => {
                console.log('Đã kết nối WebSocket');
                resolve(socket);
            };
            socket.onmessage = (message) => {
                try{
                    const response = JSON.parse(message.data);
                    const event = response.event;
                    const request = pendingRequest[event];

                    if (request) {
                        clearTimeout(request.timer);
                        request.resolve(response);
                        delete pendingRequest[event];
                    }
                }
                catch {
                    console.log('Không thể đọc dữ liệu từ Server');
                }
            };
            socket.onerror () => {
                reject(new Error('Lỗi kết nối WebSocket'));
            };

            socket.onclose=()=>{
                console.log('WebSocket đã đóng kết nối');
                socket = null;
                Object.keys(pendingRequest).forEach((event) => {
                    clearTimeout(pendingRequest[event].timer);
                    pendingRequest[event].reject(new Error('Kết nối WebSicjet đã bị đóng'));
                    delete pendingRequest[event];
            });
        };
    });
}

export async function sendWebSocketEvent(
    event: String,
    data: object ={}
){
    const ws = await connectSocket();
    return new Promise((resolve, reject) => {
        if (pendingRequest[event]){
            reject(new Error('Yêu cầu đang được xử lý'));
            return;
        }

        const timer= setTimeout(() => {
            delete pendingRequest[event];
            reject(new Error('Server phản hồi lâu'));
        }, 15000);

        pendingRequest[event] = {
            resolve,
            reject, timer
        };
        const request = {
            action: 'onchat',
            data:{
                event: event,
                data: data
            }
        };
        ws.send(JSON.stringify(request));
    });
}