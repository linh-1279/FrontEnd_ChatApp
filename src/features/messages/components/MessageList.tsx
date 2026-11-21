import type { ChatMessage } from '../messageTypes'
import MessageBubble from './MessageBubble'

// Các dữ liệu cần nhận để hiển thị danh sách tin nhắn
type MessageListProps = {
    messages: ChatMessage[]
    currentUserName: string
}

function MessageList({
    messages,
    currentUserName
}: MessageListProps) {
    return (
        <div className="message-list">
            {messages.map((message) => (
                <MessageBubble
                    key={message.id}
                    message={message}
                    currentUserName={currentUserName}
                />
            ))}
        </div>
    )
}

export default MessageList