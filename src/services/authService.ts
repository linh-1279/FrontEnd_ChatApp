import { sendWebSocketEvent, type WebSocketResponse } from './socket'

// Lấy thông báo lỗi từ Server
function getErrorMessage(
    response: WebSocketResponse,
    defaultMessage: string
): string {
    if (typeof response.mes === 'string') {
        return response.mes
    }

    return defaultMessage
}

// Đăng nhập
export async function loginAccount(
    user: string,
    pass: string
): Promise<{ RE_LOGIN_CODE: string }> {

    const response = await sendWebSocketEvent('LOGIN', {
        user,
        pass
    })

    if (response.status !== 'success') {
        throw new Error(
            getErrorMessage(response, 'Tên đăng nhập hoặc mật khẩu không đúng')
        )
    }

    const data = response.data

    if (
        !data ||
        typeof data !== 'object' ||
        !('RE_LOGIN_CODE' in data) ||
        typeof data.RE_LOGIN_CODE !== 'string'
    ) {
        throw new Error('Server không trả về mã đăng nhập hợp lệ')
    }

    return {
        RE_LOGIN_CODE: data.RE_LOGIN_CODE
    }
}

// Đăng ký
export async function registerAccount(
    user: string,
    pass: string
): Promise<void> {

    const response = await sendWebSocketEvent('REGISTER', {
        user,
        pass
    })

    if (response.status !== 'success') {
        throw new Error(
            getErrorMessage(response, 'Đăng ký tài khoản thất bại')
        )
    }
}

// Đăng xuất
export async function logoutAccount(): Promise<void> {

    const response = await sendWebSocketEvent('LOGOUT')

    if (response.status !== 'success') {
        throw new Error(
            getErrorMessage(response, 'Đăng xuất thất bại')
        )
    }
}