import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAppDispatch } from '../app/hooks';
import { login } from '../features/auth/authSlice';

import AuthLayout from '../components/AuthLayout';
import PasswordInput from '../components/PasswordInput';

function RegisterPage() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function handleRegister(e) {
        e.preventDefault();

        if (!name.trim() || !username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            setError('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        if(password.length < 8) {
            setError('Mật khẩu phải có ít nhất 8 ký tự');
            return
        }

        if(!/[A-Z]/.test(password)){
            setError('Mật khẩu phải có ít nhất 1 chữ in hoa'); 
            return
        }

        if( !/[0-9]/.test(password)) {
            setError('Mật khẩu phải có ít nhất 1 chữ số');
            return
        }
        if(!/[^a-zA-Z0-9]/.test(password)) {
            setError('Mật khẩu phải có ít nhất 1 ký tự đặc biệt');
            return
        }

        if(password !== confirmPassword) {
            setError('Mật khẩu xác nhận không khớp');
            return;
        }

        const user = {
            id: Date.now(),
            name: name,
            username: username,
            email: email,
            avatar: ""
        };
        dispatch(login(user));
        navigate('/profile');
    }

    return (
        <AuthLayout>
            <div className="auth-form">
                <h2>Đăng ký</h2>

                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>Họ và tên</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nhập họ và tên"
                        />
                    </div>

                    <div className="form-group">
                        <label>Tên người dùng</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Nhập tên người dùng"
                        />
                    </div>

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
                        <label>Mật khẩu</label>
                        <PasswordInput
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nhập mật khẩu"
                        />
                    </div>

                    <div className="form-group">
                        <label>Xác nhận mật khẩu</label>
                        <PasswordInput
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Nhập lại mật khẩu"
                        />
                    </div> 

                {error && (
                    <p className="form-error">{error}</p>
                )}

                <button type="submit" className="btn btn-primary">
                    Tạo tài khoản</button>
                </form>

                 <p className="auth-switch">
                    Đã có tài khoản?{' '}
                    <Link to="/login">Đăng nhập</Link>
                </p>
            </div>
        </AuthLayout>
    );
}

export default RegisterPage;
