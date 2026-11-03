import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../features/auth/authSlice'
import messageReducer from '../features/messages/messageSlice'
import conversationReducer from '../features/conversations/conversationSlice'

// Kết hợp các phần quản lý dữ liệu vào Store chung
const store = configureStore({
    reducer: {
        auth: authReducer,
        messages: messageReducer,
        conversations: conversationReducer
    }
})

// Lấy kiểu dữ liệu State và Dispatch từ Store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store