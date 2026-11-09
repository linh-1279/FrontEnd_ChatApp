import { state } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { UserRound, Mail, AtSign, Edit, LogOut} from 'lucide-react';
import { logout } from '../features/auth/authSlice';

import '../style/profile.css';

function ProfilePage() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout() {
        dispatch(logout());
        navigate('/login');
    }

    if(!user){
        return (
            <div className="profile-empty">
                <h2>Bạn chưa đăng nhập</h2>
                <button onClick={() => navigate('/login')}>Đăng nhập</button>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2>Tài khoản của tôi</h2>
                <button onClick={handleLogout} className="logout-btn">
                    <LogOut size={17} />
                    Đăng xuất
                </button>
            </div>

            <div className="profile-card">
                <div className="profile-cover"></div>
                <div className="profile-content">
                    <div className="profile-avatar">
                    {user.avatar ? (
                        <img src={user.avatar} alt="Avatar" />
                    ) : (
                        <UserRound size={55} />
                    )}

                <h2>{user.name}</h2>
                <p className="profile-username">@{user.username}</p>
                </div>
                <button className="edit-btn" onClick={() => navigate('/edit-profile')}>
                    <Edit size={17} />
                    Chỉnh sửa hồ sơ
                </button>
            <div className="profile-details">
                <div className="profile-item">
                    <Mail/>
                    <div>
                        <span>Email</span>
                        <p>{user.email}</p>
                    </div>
                </div>

                <div className="profile-item">
                    <AtSign/>
                    <div>
                        <span>Tên người dùng</span>
                        <p>@{user.username}</p>
                    </div>
                </div>

            </div>
        </div>
        </div>
    </div>
    );
}

export default ProfilePage;