import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="fixed top-0 z-50 w-full bg-black/75 backdrop-blur-3xl text-white flex justify-between items-center py-4 px-8">
      <Link 
        to="/" 
        className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
      >
        <img 
          src="/images/logo.png" 
          alt="The OG Movies Logo" 
          className="h-12 w-12 rounded-full object-cover border-2 border-emerald-600 p-1" 
        />
        <h1 className="text-2xl font-bold hover:text-emerald-600">The OG Movies</h1>
      </Link>
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <Link 
              to="/watchlist" 
              className="font-semibold hover:text-emerald-500 transition-colors"
            >
              Watchlist
            </Link>
            <button 
              onClick={logout} 
              className="px-5 py-2 rounded-full font-semibold border-2 border-red-500 text-red-500 
                         transition-all duration-300 
                         hover:bg-red-500 hover:text-white hover:scale-105"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-5 py-2 rounded-full font-semibold border-2 border-emerald-600 text-emerald-600
                         transition-all duration-300 
                         hover:bg-emerald-600 hover:text-white hover:scale-105"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 rounded-full bg-emerald-600 text-white font-semibold 
                         transition-all duration-300 
                         hover:bg-emerald-700 hover:shadow-lg hover:scale-105"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Header