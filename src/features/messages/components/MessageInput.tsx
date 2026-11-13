function MessageInput() {
    return (
        <div className="chat-window__composer">
            <div className="chat-window__toolbar">
                <button type="button" aria-label="Biểu tượng cảm xúc">☺</button>
                <button type="button" aria-label="Hình ảnh">▧</button>
                <button type="button" aria-label="Đính kèm">📎</button>
                <button type="button" aria-label="Định dạng">A</button>
                <button type="button" aria-label="Thêm">•••</button>
            </div>

            <textarea
                placeholder="Nhập tin nhắn..."
                rows={1}
            />
        </div>
    )
}

export default MessageInput