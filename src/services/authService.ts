import { sendWebSocketEvent } from './socket';

interface AuthResponse{
    status:string
    mess?: string
    data?: {RE_LOGIN_CODE?: string}
}

export async function loginAccount(user: string, pass: String) {
    const response = await sendWebSocketEvent('LOGIN', {
        user: user,
        pass: pass
    }) as AuthResponse;

    if(response.status !== 'success'){
        throw new Error(response.mess || 'Tên đăng nhập hoặc mật khẩu không đúng');
    }
    
    return response.data;
}

export async function registerAccount(user: string, pass: String) {
    const response = await sendWebSocketEvent('REGISTER', {
        user: user,
        pass: pass
    }) as AuthResponse;

    if(response.status !== 'success'){
        throw new Error(response.mess || 'Đăng ký tài khoản thất bại');
    }
    
    return response.data;
}

export async function logoutAccount(user: string, pass: String) {
    const response = await sendWebSocketEvent('LOGOUT') as AuthResponse;

    if(response.status !== 'success'){
        throw new Error(response.mess || 'Đăng xuất thất bại');
    }
    
    return response.data;
}

