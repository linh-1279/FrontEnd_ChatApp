// Đây là những dữ liệu ban đầu của phần tài khoản.
const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
};

// Hàm này dùng để quản lý những thay đổi liên quan đến tài khoản.
function authReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default authReducer;