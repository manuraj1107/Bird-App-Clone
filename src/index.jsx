import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    )



// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept()
}
