import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUp'
import WatchlistPage from './pages/Watchlist'

function App() {
  return (
    <div className="animate-page-load">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App