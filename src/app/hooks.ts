import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import type { RootState, AppDispatch } from './store'

// Hook dùng để đọc dữ liệu từ Redux Store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Hook dùng để gửi Action đến Redux Store
export const useAppDispatch = () => useDispatch<AppDispatch>()