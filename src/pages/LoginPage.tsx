
import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useAppDispatch } from '../app/hooks'
import { login } from '../features/auth/authSlice'

import AuthLayout from '../components/AuthLayout'
import PasswordInput from '../components/PasswordInput'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    // Xử lý khi người dùng nhấn nút đăng nhập
    function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (email.trim() === '' || password.trim() === '') {
            setError('Vui lòng nhập đầy đủ thông tin')
            return
        }

        // Tạm thời đăng nhập bằng dữ liệu mẫu, chưa gọi API
        dispatch(login({ email: email.trim() }))

        navigate('/profile')
    }

    return (
        <AuthLayout>
            <div className="auth-form">
                <h2>Welcome!</h2>

                <p className="auth-subtitle">
                    Đăng nhập để tiếp tục
                </p>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>

                        <PasswordInput
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nhập mật khẩu"
                        />
                    </div>

                    {error && (
                        <p className="error-message">{error}</p>
                    )}

                    <button type="submit" className="btn btn-primary">
                        Đăng nhập
                    </button>
                </form>

                <p className="auth-switch">
                    Chưa có tài khoản?{' '}
                    <Link to="/register">Đăng ký</Link>
                </p>
            </div>
        </AuthLayout>
    )
}

export default LoginPage
