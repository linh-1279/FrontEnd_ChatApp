import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './app/store'
import App from './App'
import './index.css'

// Tìm phần tử root trong index.html
const rootElement = document.getElementById('root')

// Kiểm tra phần tử root có tồn tại không
if (!rootElement) {
    throw new Error('Không tìm thấy phần tử root')
}

// Khởi chạy ứng dụng React
createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)