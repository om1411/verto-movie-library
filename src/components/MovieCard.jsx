import React from 'react'
import PropTypes from 'prop-types'
import { getImageUrl, fetchMovieVideos } from '../services/api'
import { useAuth } from '../context/AuthContext'
import { useWatchlist } from '../context/WatchlistContext'
import { useModal } from '../context/ModalContext'

const MovieCard = ({ movie }) => {
  const { isAuthenticated } = useAuth();
  const { addMovieToWatchlist, isMovieInWatchlist } = useWatchlist();
  const { openModal } = useModal()

  const movieInWatchlist = isAuthenticated ? isMovieInWatchlist(movie.id) : false

  const handleWatchlistClick = (e) => {
    e.stopPropagation(); 
    if (isAuthenticated) {
      addMovieToWatchlist(movie)
    } else {
      openModal()
    }
  }

  const handleWatchNowClick = async (e) => {
    e.stopPropagation(); 
    if (isAuthenticated) {
      const trailer = await fetchMovieVideos(movie.id);
      if (trailer && trailer.key) {
        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank');
      } else {
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' official trailer')}`, '_blank');
      }
    } else {
      openModal()
    }
  }

  return (
    <div className="group cursor-pointer bg-gray-900 rounded-lg overflow-hidden border-2 border-transparent hover:border-emerald-600 transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="relative">
        <img
          src={getImageUrl(movie.poster_path, 'w500')}
          alt={movie.title}
          className="w-full h-80 object-cover"
        />
        <div
          className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }}
        >
          <button
            onClick={handleWatchNowClick}
            className="bg-emerald-600 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded transition-all"
          >
            Watch Now
          </button>
          <button
            onClick={handleWatchlistClick}
            disabled={movieInWatchlist}
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-all disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {movieInWatchlist ? 'Added' : 'Add To Watchlist'}
          </button>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg truncate">{movie.title}</h3>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default MovieCard