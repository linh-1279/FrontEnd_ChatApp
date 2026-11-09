
import { useState,} from "react";
import { Eye, EyeOff } from "react-feather";
import type { ChangeEvent } from 'react'

// Các thông tin component nhận từ LoginPage
type PasswordInputProps = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    name?: string

}

function PasswordInput({ value, onChange, placeholder, name }: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    return(
        <div className="password-wrapper">
            <input type={showPassword ? "text" : "password"} value={value} onChange={onChange} placeholder={placeholder} name={name} />
            <button type="button" className ="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
        </div>
    );
}

export default PasswordInput;
