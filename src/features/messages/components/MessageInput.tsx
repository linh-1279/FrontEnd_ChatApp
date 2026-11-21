import { useState } from 'react'

type MessageInputProps = {
    onSend: (content: string) => void
}

function MessageInput({ onSend }: MessageInputProps) {

    const [message, setMessage] = useState('')

const handleSend = () => {
    const content = message.trim()

    if (!content) return

    onSend(content)
    setMessage('')
}

    return (
        <div className="chat-window__composer">
            <div className="chat-window__toolbar">
                <button type="button" aria-label="Biểu tượng cảm xúc"></button>
                <button type="button" aria-label="Hình ảnh">▧</button>
                <button type="button" aria-label="Đính kèm"></button>
                <button type="button" aria-label="Định dạng">A</button>
                <button type="button" aria-label="Thêm">•••</button>
            </div>

            <div className="chat-window__input-row">
    <textarea
        placeholder="Nhập tin nhắn..."
        rows={1}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault()
                handleSend()
            }
        }}
    />

    <button
        type="button"
        className="chat-window__send-button"
        onClick={handleSend}
    >
        Gửi
    </button>
</div>
        </div>
    )
}

export default MessageInput