import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { ChatMessage } from './messageTypes'

// Dữ liệu ban đầu của phần tin nhắn
type MessageState = {
    messages: ChatMessage[]
    loading: boolean
    error: string | null
}

const initialState: MessageState = {
    messages: [],
    loading: false,
    error: null
}

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        // Cập nhật danh sách tin nhắn
        setMessages: (state, action: PayloadAction<ChatMessage[]>) => {
            state.messages = action.payload
        },

        // Thêm một tin nhắn mới
        addMessage: (state, action: PayloadAction<ChatMessage>) => {
            state.messages.push(action.payload)
        }
    }
})

export const { setMessages, addMessage } = messageSlice.actions

export default messageSlice.reducer