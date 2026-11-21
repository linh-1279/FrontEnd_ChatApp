import { createBrowserRouter, Navigate } from 'react-router-dom'

import ChatPage from '../pages/ChatPage'
import LoginPage from '../features/auth/pages/LoginPage'
import RegisterPage from '../features/auth/pages/RegisterPage'
import ProfilePage from '../features/auth/pages/ProfilePage'
// Cấu hình các đường dẫn của ứng dụng
const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" replace />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/chat',
        element: <ChatPage />
    },
    {
        path: '/profile',
        element: <ProfilePage />
    },
    {
        path: '*',
        element: <div>Không tìm thấy trang</div>
    }
])

export default router