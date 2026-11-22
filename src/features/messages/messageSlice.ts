import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { ChatMessage } from './messageTypes'

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
        // Thay thế danh sách tin nhắn
        setMessages: (state, action: PayloadAction<ChatMessage[]>) => {
            state.messages = action.payload
            state.loading = false
            state.error = null
        },

        // Thêm tin nhắn mới, tránh thêm trùng ID
        addMessage: (state, action: PayloadAction<ChatMessage>) => {
            const exists = state.messages.some(
                (message) => message.id === action.payload.id
            )

            if (!exists) {
                state.messages.push(action.payload)
            }
        },

        // Cập nhật trạng thái tải tin nhắn
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload

            if (action.payload) {
                state.error = null
            }
        },

        // Cập nhật thông báo lỗi
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
            state.loading = false
        },

        // Xóa danh sách khi chuyển sang hội thoại khác
        clearMessages: (state) => {
            state.messages = []
            state.loading = false
            state.error = null
        }
    }
})

export const {
    setMessages,
    addMessage,
    setLoading,
    setError,
    clearMessages
} = messageSlice.actions

export default messageSlice.reducer