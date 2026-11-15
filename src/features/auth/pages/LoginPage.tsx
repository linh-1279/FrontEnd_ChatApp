
import { useState } from 'react'
import type { SubmitEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useAppDispatch } from './.././../../app/hooks'
import { login } from '../authSlice'
import { loginAccount } from './../../../services/authService'

import AuthLayout from './../../../components/AuthLayout'
import PasswordInput from './../../../components/PasswordInput'

function LoginPage() {
    const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    // Xử lý khi người dùng nhấn nút đăng nhập
    async function handleLogin(e: SubmitEvent) {
        e.preventDefault() 

        if (!username.trim() || !password.trim()) {
            setError('Vui lòng nhập đầy đủ thông tin')
            return
        }

        try{
            setLoading(true);
            const data = await loginAccount(username.trim(), password);
            dispatch(login({ user: { username: username.trim() },
            reLoginCode: data.RE_LOGIN_CODE}));
            navigate('/profile');
        }
    catch(err){
        if(err instanceof Error){
            setError(err.message);
        }
        else {
            setError('Đăng nhập không thành công');
        }
    } 
    finally{
        setLoading(false);
    }
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
                        <label htmlFor="username">Tên người dùng</label>

                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Nhập tên người dùng"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>

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

                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
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
