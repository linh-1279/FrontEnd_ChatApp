// Đây là những dữ liệu ban đầu của phần tin nhắn.
const initialState = {
    messages: [],
    loading: false,
    error: null
};

// Hàm này dùng để quản lý những thay đổi liên quan đến tin nhắn.
function messageReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default messageReducer;