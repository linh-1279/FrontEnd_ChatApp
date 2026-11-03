import { createSlice } from '@reduxjs/toolkit'

// Dữ liệu ban đầu của phần tài khoản
type AuthState = {
    user: unknown
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
    reducers: {}
})

export default authSlice.reducer