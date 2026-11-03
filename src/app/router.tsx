import { createBrowserRouter, Navigate } from 'react-router-dom'

// Cấu hình các đường dẫn của ứng dụng
const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" replace />
    },
    {
        path: '/login',
        element: <div>Trang đăng nhập</div>
    },
    {
        path: '/register',
        element: <div>Trang đăng ký</div>
    },
    {
        path: '/chat',
        element: <div>Giao diện Chat</div>
    },
    {
        path: '/profile',
        element: <div>Hồ sơ cá nhân</div>
    },
    {
        path: '*',
        element: <div>Không tìm thấy trang</div>
    }
])

export default router