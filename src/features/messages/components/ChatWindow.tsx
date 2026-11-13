import MessageInput from './MessageInput'
import type { ChatMessage } from '../messageTypes'
import MessageList from './MessageList'

type ChatWindowProps = {
    messages: ChatMessage[]
    currentUserName: string
    conversationName: string
}

function ChatWindow({
    messages,
    currentUserName,
    conversationName
}: ChatWindowProps) {
    return (
        <section className="chat-window">
            {/* Header cuộc trò chuyện */}
            <header className="chat-window__header">
                <div className="chat-window__user">
                    <div className="chat-window__avatar">
                        {conversationName.charAt(0)}
                    </div>

                    <h2>{conversationName}</h2>
                </div>
            </header>

            {/* Khu vực hiển thị tin nhắn */}
            <div className="chat-window__history">
                <MessageList
                    messages={messages}
                    currentUserName={currentUserName}
                />
            </div>

            {/* Khu vực nhập tin nhắn */}
            <div className="chat-window__composer">
                {/* <div className="chat-window__toolbar">
                    <button type="button" aria-label="Biểu tượng cảm xúc">☺</button>
                    <button type="button" aria-label="Hình ảnh">▧</button>
                    <button type="button" aria-label="Đính kèm">📎</button>
                    <button type="button" aria-label="Định dạng">A</button>
                    <button type="button" aria-label="Thêm">•••</button>
                </div>

                <textarea
                    placeholder={`Nhập tin nhắn tới ${conversationName}`}
                    rows={1}
                /> */}
                <MessageInput />
            </div>
        </section>
    )
}

export default ChatWindow