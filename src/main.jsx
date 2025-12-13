import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/App.css'

// Find the root element in the HTML
const rootElement = document.getElementById('root');

// createRoot is the API for React 18+ concurrent rendering features
ReactDOM.createRoot(rootElement).render(
    // StrictMode enables extra development checks and warnings
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
