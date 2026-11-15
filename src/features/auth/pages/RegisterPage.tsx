import { useState } from 'react'
import {  Link } from 'react-router-dom'
import type { SubmitEvent } from 'react'

import { registerAccount } from './../../../services/authService'

import AuthLayout from './../../../components/AuthLayout'
import PasswordInput from './../../../components/PasswordInput'

function RegisterPage(){
        const [name, setName] = useState('')
        const [username, setUsername] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')
        const [error, setError] = useState('')
        const [success, setsuccess] = useState('')
        const [loading, setLoading] = useState(false);
    
        async function handleRegister(e: SubmitEvent) {
            e.preventDefault();
            setError('');
            setsuccess('');
            if(!name.trim() ||
            !username.trim() ||
            !email.trim() ||
            !password ||
            !confirmPassword
        ){
            setError('Nhập đầy đủ thông tin');
            return;
        }

        if(!/^[a-zA-z0-9]+$/.test(password)){
            setError('Tên người dùng không được chứa ký tự đặc biệt, chỉ chứa chữ cái, số');
            return;
        }

        if(password.length < 8){
            setError('Mật khẩu phải có ít nhất 8 ký tự');
            return;
        }
        if(!/[0-9]/.test(password)){
            setError('Mật khẩu phải có ít nhất 1 số');
            return;
        }
        if(!/[A-z]/.test(password)){
            setError('Mật khẩu phải có ít nhất 1 chữ in hoa');
            return;
        }
        if(!/[^a-zA-z0-9]/.test(password)){
            setError('Mật khẩu phải có ít nhất 1 ký tự đặc biệt');
            return;
        }
        try{
            setLoading(true);
            await registerAccount(username.trim(), password);
            setsuccess('Đăng ký thành công');
            setName('');
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
        catch(err){
            if(err instanceof Error){
                setError(err.message);
            }
            else {
                setError('Đăng ký không thành công');
            }
        } 
        finally{
            setLoading(false);
        }   
    }
    return(<AuthLayout>
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
                        <label>Email</label>

                        <input
                            type="text"
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
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Nhập lại mật khẩu"
                        />
                    </div>

                    {error && (
                        <p className="error-message">{error}</p>
                    )}

                    {success && (
                        <p className="success-message">{success}</p>
                    )}

                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Đang đăng ký...' : 'Tạo tài khoản'}
                    </button>
                </form>

                <p className="auth-switch">Đã có tài khoản?{' '}
                    <Link to="/login">Đăng nhập</Link>
                </p>
            </div>
    </AuthLayout>
    );
}
export default RegisterPage;