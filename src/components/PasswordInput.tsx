
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// Các thông tin component nhận từ LoginPage
type PasswordInputProps = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    name?: string
}

function PasswordInput({
    value,
    onChange,
    placeholder,
    name
}: PasswordInputProps) {
    // Theo dõi trạng thái hiện hoặc ẩn mật khẩu
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="password-input-wrapper">
            <input
                type={showPassword ? 'text' : 'password'}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />

            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? 'Ẩn' : 'Hiện'}
            </button>
        </div>
    )
}

export default PasswordInput
