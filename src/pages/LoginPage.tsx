import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../auth/authSlice";
import AuthLayout from "../components/AuthLayout";
import PasswordInput from "../components/PasswordInput";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogin(e){
        e.preventDefault();

        if(email.trim() === "" || password.trim() === ""){
            setError("Vui lòng nhập thông tin");
            return;
        }

        dispatch(login(user));
        navigate("/profile");   
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
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Mật Khẩu</label>
                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nhập mật khẩu"
                        />
                    </div>

                    {/* <div className="form-group">
                        <label>Xác nhận mật khẩu</label>
                        <PasswordInput
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Nhập lại mật khẩu"
                        />
                    </div> */}

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="btn btn-primary">
                        Đăng nhập
                    </button>
                </form>

                <p className="auth-switch">Chưa có tài khoản
                    <Link to="/register">Đăng ký</Link>
                </p>
            </div>
        </AuthLayout>
    );
}
export default LoginPage;
