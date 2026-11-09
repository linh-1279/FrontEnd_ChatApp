import { createSlice } from '@reduxjs/toolkit'

// Dữ liệu ban đầu của phần tin nhắn
type MessageState = {
    messages: unknown[]
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
    reducers: {}
})

export default messageSlice.reducer