import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import { useSelector } from 'react-redux';


function App() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return( <Routes>
        <Route path="/login" element={isLoggedIn ? <LoginPage /> : <Navigate to="/profile" />} />
        <Route path="/register" element={isLoggedIn ? <RegisterPage /> : <Navigate to="/profile" />} />
        <Route path="/profile" element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={isLoggedIn ? "/profile" : "/login"} />} />
    </Routes> );
}

export default App