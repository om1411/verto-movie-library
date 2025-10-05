import React, { useState, useEffect } from 'react'
import { getImageUrl, fetchMovieVideos } from '../services/api'
import { useAuth } from '../context/AuthContext'
import { useWatchlist } from '../context/WatchlistContext'
import { useModal } from '../context/ModalContext'

const MovieCarousel = ({ movies, onScrollDown }) => {
  const { isAuthenticated } = useAuth();
  const { addMovieToWatchlist, isMovieInWatchlist } = useWatchlist();
  const { openModal } = useModal()
  
  const limitedMovies = movies.slice(0, 5)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (limitedMovies.length === 0) return;
    const intervalId = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [limitedMovies.length])

  const handleWatchNowClick = async () => {
    if (isAuthenticated) {
      const trailer = await fetchMovieVideos(currentMovie.id);
      if (trailer && trailer.key) {
        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank');
      } else {
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(currentMovie.title + ' trailer')}`, '_blank');
      }
    } else {
      openModal()
    }
  }

  if (limitedMovies.length === 0) {
    return (
      <div className="relative h-screen w-full flex items-center justify-center bg-black">
        <div className="w-4/5 h-4/5 rounded-2xl bg-gray-800 animate-pulse"></div>
      </div>
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % limitedMovies.length);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + limitedMovies.length) % limitedMovies.length);
  }

  const goToSlide = (index) => {
    setCurrentIndex(index);
  }

  const currentMovie = limitedMovies[currentIndex];
  const movieInWatchlist = currentMovie ? isMovieInWatchlist(currentMovie.id) : false;
  
  const handleWatchlistClick = () => {
    if (isAuthenticated) {
      addMovieToWatchlist(currentMovie)
    } else {
      openModal()
    }
  }

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="relative w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl">
        {limitedMovies.map((movie, index) => (
          <div
            key={movie.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${getImageUrl(movie.backdrop_path)})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div
          key={currentIndex}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 text-center text-white p-8 w-full max-w-3xl animate-fadeIn"
        >
          <h2 className="text-4xl font-bold mb-4">{currentMovie.title}</h2>
          <p className="max-w-2xl mx-auto mb-6 line-clamp-3">{currentMovie.overview}</p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={handleWatchNowClick}
              className="bg-emerald-600 hover:bg-emerald-800 cursor-pointer text-white font-bold py-2 px-6 rounded transition-transform transform hover:scale-105"
            >
              Watch Now
            </button>
            
            <button
              onClick={handleWatchlistClick}
              disabled={isAuthenticated && movieInWatchlist}
              className="bg-gray-700 hover:bg-gray-800 cursor-pointer text-white font-bold py-2 px-6 rounded transition-transform transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {isAuthenticated && movieInWatchlist ? 'Added' : 'Add To Watchlist'}
            </button>
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white text-3xl bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
        >
          <i className="fa-solid fa-circle-arrow-left"></i>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white text-3xl bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
        >
          <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {limitedMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default MovieCarousel