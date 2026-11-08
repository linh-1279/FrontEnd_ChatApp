// phân biệt loại cuộc trò chuyện theo dữ liệu từ API
export type ChatMessageType = 0 | 1

// cấu trúc một tin nhắn do API trả về
export interface ChatMessage{
    id: number
    name: string
    to:string
    mes:string
    createAt:string
    type: ChatMessageType
}