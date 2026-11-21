
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Thông tin người dùng sau khi đăng nhập
export type AuthUser = {
    username: string
    email?: string
}

// Trạng thái của phần tài khoản
type AuthState = {
    user: AuthUser | null
    reLoginCode: string | null
    isAuthenticated: boolean
    loading: boolean
    error: string | null
}
type LoginPayload = {
    user: AuthUser
    reLoginCode: string
}

const initialState: AuthState = {
    user: null,
    reLoginCode: null,
    isAuthenticated: false,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Lưu thông tin người dùng sau khi đăng nhập
        login: (state, action: PayloadAction<LoginPayload>) => {
            state.user = action.payload.user
            state.reLoginCode = action.payload.reLoginCode
            state.isAuthenticated = true
            state.error = null
        },

        // Cập nhật thông tin hồ sơ
        updateProfile: (state, action: PayloadAction<Partial<AuthUser>>) => {
             if (state.user) {
            state.user = {
            ...state.user,
            ...action.payload
        }
    }
},

        // Đăng xuất khỏi ứng dụng
        logout: (state) => {
            state.user = null
            state.reLoginCode = null
            state.isAuthenticated = false
            state.error = null
        }
    }
})

export const { login, logout, updateProfile } = authSlice.actions

export default authSlice.reducer
