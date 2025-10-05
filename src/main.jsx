import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { WatchlistProvider } from './context/WatchlistContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <WatchlistProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </WatchlistProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)