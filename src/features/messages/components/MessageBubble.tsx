import type { ChatMessage } from '../messageTypes'

type MessageBubbleProps = {
    message: ChatMessage
    currentUserName: string
}
function MessageBubble({
    message,
    currentUserName
}: MessageBubbleProps) {

    const isMine = message.name === currentUserName

    return (
        <div className={`message-row ${isMine ? 'message-row--mine' : 'message-row--other'}`}>
            {!isMine && (
                <div className="message-sender">
                    {message.name}
                </div>
            )}

            <div className="message-bubble">
                <p className="message-content">
                    {message.mes}
                </p>

                <time className="message-time">
                    {message.createAt}
                </time>
            </div>
        </div>
    )
}

export default MessageBubble