import { createSlice } from '@reduxjs/toolkit'

// Dữ liệu ban đầu của phần cuộc trò chuyện
type ConversationState = {
    conversations: unknown[]
    selectedConversation: unknown | null
    loading: boolean
    error: string | null
}

const initialState: ConversationState = {
    conversations: [],
    selectedConversation: null,
    loading: false,
    error: null
}

const conversationSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {}
})

export default conversationSlice.reducer