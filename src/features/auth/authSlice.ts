
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Thông tin người dùng sau khi đăng nhập
export type AuthUser = {
    email: string
}

// Trạng thái của phần tài khoản
type AuthState = {
    user: AuthUser | null
    isAuthenticated: boolean
    loading: boolean
    error: string | null
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Lưu thông tin người dùng sau khi đăng nhập
        login: (state, action: PayloadAction<AuthUser>) => {
            state.user = action.payload
            state.isAuthenticated = true
            state.error = null
        },

        // Đăng xuất khỏi ứng dụng
        logout: (state) => {
            state.user = null
            state.isAuthenticated = false
            state.error = null
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
