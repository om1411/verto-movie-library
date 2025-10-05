import React from 'react'
import { Link } from 'react-router-dom'
import { useWatchlist } from '../context/WatchlistContext'
import { getImageUrl } from '../services/api'

const WatchlistPage = () => {
  const { watchlist, removeMovieFromWatchlist } = useWatchlist();

  return (
    <div className="pt-24 px-8 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8">My Watchlist</h1>
      
      {watchlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {watchlist.map(movie => (
            <div key={movie.id} className="bg-gray-900 rounded-lg overflow-hidden flex flex-col">
              <img 
                src={getImageUrl(movie.poster_path, 'w500')} 
                alt={movie.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <h3 className="font-bold truncate mb-4">{movie.title}</h3>
                <button 
                  onClick={() => removeMovieFromWatchlist(movie.id)}
                  className="w-full mt-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-400">Your watchlist is empty.</p>
          <Link 
            to="/" 
            className="mt-4 inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded"
          >
            Find Movies to Add
          </Link>
        </div>
      )}
    </div>
  )
}

export default WatchlistPage