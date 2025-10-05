import React from "react"
import { Link } from "react-router-dom"

const AuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-lg shadow-xl p-8 w-full max-w-md mx-4 text-center border border-emerald-500"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-white mb-4">Login Required</h2>
        <p className="text-gray-300 mb-6">
          You need to be logged in to use this feature.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            onClick={onClose}
            className="px-6 py-2 rounded-full font-semibold border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all"
          >
            Sign Up
          </Link>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  )
}

export default AuthModal