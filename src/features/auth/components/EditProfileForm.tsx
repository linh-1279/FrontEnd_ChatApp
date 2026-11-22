import { useState } from 'react'
import type { FormEvent } from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { updateProfile } from '../authSlice'

type EditProfileFormProps = {
    onClose: () => void
}

function EditProfileForm({ onClose }: EditProfileFormProps) {
    const user = useAppSelector((state) => state.auth.user)
    const dispatch = useAppDispatch()

    const [username, setUsername] = useState(user?.username ?? '')
    const [email, setEmail] = useState(user?.email ?? '')
    const [error, setError] = useState('')

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!username.trim()) {
            setError('Tên người dùng không được để trống')
            return
        }

        dispatch(updateProfile({
            username: username.trim(),
            email: email.trim()
        }))

        onClose()
    }

    return (
        <div className="edit-profile-form">
            <h2>Chỉnh sửa hồ sơ</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Tên người dùng</label>

                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>

                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                {error && (
                    <p className="error-message">{error}</p>
                )}

                <button type="submit">
                    Lưu thay đổi
                </button>

                <button type="button" onClick={onClose}>
                    Hủy
                </button>
            </form>
        </div>
    )
}

export default EditProfileForm