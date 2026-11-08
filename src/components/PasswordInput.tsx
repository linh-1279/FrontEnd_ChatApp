import { useState,} from "react";
import { Eye, EyeOff } from "react-feather";

function PasswordInput({ value, onChange, placeholder, name }) {
    const [showPassword, setShowPassword] = useState(false);
    return(
        <div className="passwỏd-wrapper">
            <input type={showPassword ? "text" : "password"} value={value} onChange={onChange} placeholder={placeholder} name={name} />
            <button type="button" className ="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
        </div>
    );
}
export default PasswordInput;

