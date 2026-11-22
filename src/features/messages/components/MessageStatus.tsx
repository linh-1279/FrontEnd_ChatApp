type MessageStatusProps = {
    loading: boolean
    error: string | null
}

function MessageStatus({ loading, error }: MessageStatusProps) {
    if (loading) {
        return (
            <p className="message-status" role="status">
                Đang tải tin nhắn...
            </p>
        )
    }

    if (error) {
        return (
            <p className="message-status message-status--error" role="alert">
                {error}
            </p>
        )
    }

    return null
}

export default MessageStatus