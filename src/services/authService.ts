import { sendWebSocketEvent } from './socket';

export async function loginAccount(user: String, pass: String) {
    const response = await sendWebSocketEvent('LOGIN', {
        user: user,
        pass: pass
    });

    if(response.status !== 'success'){
        throw new Error(response.mess || 'Tên đăng nhập hoặc mật khẩu không đúng');
    }
    
    return response.data;
}

export async function registerAccount(user: String, pass: String) {
    const response = await sendWebSocketEvent('REGISTER', {
        user: user,
        pass: pass
    });

    if(response.status !== 'success'){
        throw new Error(response.mess || 'Đăng ký tài khoản thất bại');
    }
    
    return response.data;
}

export async function logoutAccount(user: String, pass: String) {
    const response = await sendWebSocketEvent('LOGOUT');

    if(response.status !== 'success'){
        throw new Error(response.mess || 'Đăng xuất thất bại');
    }
    
    return response.data;
}

