import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { logout } from './../../../features/auth/authSlice'
import { useAppSelector, useAppDispatch } from './../../../app/hooks'

import EditProfileForm from './../components/EditProfileForm'
import '../../auth/auth.css'

function ProfilePage(){
    const user = useAppSelector((state) => state.auth.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [showEditForm, setShowEditForm] = useState(false)
    function handleLogout(){
        dispatch(logout())
        navigate('/login')
    }

    if(!user){
        return(
            <div>
                <h2>Bạn chưa đăng nhập</h2>
                <button onClick={() => navigate('login')}>
                    Đăng nhập
                </button>
            </div>
        )
    }

    return(
        <div className = 'profile-page'>
            <h1>Hồ sơ cá nhân</h1>
            <div className='profile-info'>

                <div className='profile-avatar'>
                    {user.username.charAt(0).toUpperCase()}
                </div>

                <h2>{user.username}</h2>
                    {user.email && (<p>Email: {user.email}</p>)}
                <button onClick = {() => setShowEditForm(true)}>
                    Chỉnh sửa hồ sơ
                </button>

                <button onClick = {handleLogout}>
                    Đăng xuất
                </button>
            </div>

            {showEditForm && (<EditProfileForm onClose={()=> setShowEditForm(false)}/>)}
        </div>
    )
}
export default ProfilePage