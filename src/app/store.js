// Lấy những hàm cần thiết từ Redux
import { createStore, combineReducers } from 'redux'

// Lấy các reducer của từng phần trong ứng dụng
import authReducer from '../features/auth/authReducer'
import messageReducer from '../features/messages/messageReducer'
import conversationReducer from '../features/conversations/conversationReducer'

// Gom các reducer lại để quản lý chung trong một store
const rootReducer = combineReducers({
    auth: authReducer,
    messages: messageReducer,
    conversations: conversationReducer
})

// Tạo store để lưu trữ trạng thái của toàn bộ ứng dụng
const store = createStore(rootReducer)

// Xuất store để các phần khác có thể sử dụng
export default store