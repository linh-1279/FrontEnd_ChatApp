import { useEffect } from 'react'

import ChatWindow from '../features/messages/components/ChatWindow'
import { mockPeopleMessages } from '../features/messages/mockMessages'
import type { ChatMessage } from '../features/messages/messageTypes'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
    addMessage,
    setMessages
} from '../features/messages/messageSlice'

import '../features/messages/messages.css'

function ChatPage() {
    const dispatch = useAppDispatch()

    const messages = useAppSelector(
        (state) => state.messages.messages
    )

    // Nạp dữ liệu tin nhắn mẫu ban đầu
    useEffect(() => {
        dispatch(setMessages(mockPeopleMessages))
    }, [dispatch])

    // Xử lý khi gửi tin nhắn
    const handleSendMessage = (content: string) => {
        const now = new Date()

        const pad = (value: number) =>
            String(value).padStart(2, '0')

        const newMessage: ChatMessage = {
            id: Date.now(),
            name: 'long',
            to: 'ti',
            mes: content,
            createAt:
                `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ` +
                `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`,
            type: 0
        }

        dispatch(addMessage(newMessage))
    }

    return (
        <main className="chat-layout">
            <aside className="chat-layout__reserved"></aside>

            <ChatWindow
                messages={messages}
                currentUserName="long"
                conversationName="Ti"
                onSendMessage={handleSendMessage}
            />
        </main>
    )
}

export default ChatPage