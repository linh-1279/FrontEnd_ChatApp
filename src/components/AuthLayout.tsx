import type { ReactNode } from "react";
import "../style/auth.css";

function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="auth-container">
            <div className="auth-left">
                <div className="auth-brand">
                    <span className="brand-logo">C</span>
                    <span>ChatApp</span>
                </div>

                <div className="auth-intro">
                    <h1>Xin chào tới ChatApp</h1>
                    <p>Đăng nhập để kết nối với bạn bè của bạn</p>
                </div>

                <p className="auth-footer">© 2026 ChatApp. All rights reserved.</p>
            </div>
            <div className="auth-right">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;
