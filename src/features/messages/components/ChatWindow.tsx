import { useEffect, useRef } from 'react'
import MessageInput from './MessageInput'
import type { ChatMessage } from '../messageTypes'
import MessageList from './MessageList'

type ChatWindowProps = {
    messages: ChatMessage[]
    currentUserName: string
    conversationName: string
    onSendMessage: (content: string) => void
}

function ChatWindow({
    messages,
    currentUserName,
    conversationName,
    onSendMessage
}: ChatWindowProps) {
        const historyRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (historyRef.current) {
            historyRef.current.scrollTop =
                historyRef.current.scrollHeight
        }
    }, [messages])
    return (
        <section className="chat-window">
            {/* Header cuộc trò chuyện */}
            <header className="chat-window__header">
    {/* Thông tin người trò chuyện */}
    <div className="chat-window__user">
        <div className="chat-window__avatar">
            {conversationName.charAt(0).toUpperCase()}
        </div>

        <div className="chat-window__user-info">
            <h2>{conversationName}</h2>
            <span>Cuộc trò chuyện cá nhân</span>
        </div>
    </div>

    {/* Các nút chức năng */}
    <div className="chat-window__actions">
        <button type="button" aria-label="Gọi thoại" title="Gọi thoại">
            
        </button>

        <button type="button" aria-label="Gọi video" title="Gọi video">
            
        </button>

        <button type="button" aria-label="Tìm kiếm" title="Tìm kiếm">
            
        </button>

        <button type="button" aria-label="Thông tin cuộc trò chuyện" title="Thông tin">
            
        </button>
    </div>
</header>

            {/* Khu vực hiển thị tin nhắn */}
            <div className="chat-window__history" ref={historyRef}>
                <MessageList
                    messages={messages}
                    currentUserName={currentUserName}
                />
            </div>

            {/* Khu vực nhập tin nhắn */}
            <MessageInput onSend={onSendMessage} />
        </section>
    )
}

export default ChatWindow