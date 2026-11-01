// Đây là những dữ liệu ban đầu của phần cuộc trò chuyện.
const initialState = {
    conversations: [],
    selectedConversation: null,
    loading: false,
    error: null
};

// Hàm này dùng để quản lý những thay đổi liên quan đến cuộc trò chuyện.
function conversationReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default conversationReducer;