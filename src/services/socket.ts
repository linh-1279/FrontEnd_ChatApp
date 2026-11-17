const WS_URL= 'ws://chat.longapp.io.vn/chat/chat';

export type WebSocketResponse={
    event?: string
    [key: string]: unknown
}
let socket: WebSocket | null = null;

type PendingRequest= {
        resolve: (value: WebSocketResponse) => void;
        reject: (reason: Error) => void;
        timer: ReturnType<typeof setTimeout>;
    }

let pendingRequest: {
    [event:string]: PendingRequest} = {}


// Tạo kết nối với webSocket
function connectSocket(): Promise<WebSocket> {
    return new Promise((resolve, reject) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            resolve(socket);
            return;
        }

        if (socket && socket.readyState === WebSocket.CONNECTING) {
            const connectingSocket=  socket
            connectingSocket.addEventListener('open', () => {
            resolve( connectingSocket)}, {once: true})

            connectingSocket.addEventListener('error', () => {
                    reject(new Error('Không kết nối được với WebSocket'));
                }, { once: true });
                return;
            }

            const ws = new WebSocket(WS_URL);
            socket = ws
            ws.onopen=() => {
                console.log('Đã kết nối WebSocket');
                resolve(ws);
            }
            ws.onmessage = (message) => {
                try{
                    const response = JSON.parse(message.data) as WebSocketResponse
                    const event = response.event

                    if (event) {
                        const request = pendingRequest[event]
                        if(request){
                            clearTimeout(request.timer);
                            request.resolve(response);
                            delete pendingRequest[event]
                        }
                    }
                }
                catch {
                    console.log('Không thể đọc dữ liệu từ Server');
                }
            };
            ws.onerror = () => {
                reject(new Error('Lỗi kết nối WebSocket'));
            };

            ws.onclose=()=>{
                console.log('WebSocket đã đóng kết nối');
                socket = null;
                Object.keys(pendingRequest).forEach((event) => {
                    const request = pendingRequest[event]
                        clearTimeout(pendingRequest[event].timer);
                        request.reject(new Error('Kết nối WebSicjet đã bị đóng'));
                        delete pendingRequest[event];
            });
        };
    });
}

export async function sendWebSocketEvent(
    event: string,
    data: object ={}
): Promise<WebSocketResponse>{
    const ws = await connectSocket();
    return new Promise<WebSocketResponse>((resolve, reject) => {
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