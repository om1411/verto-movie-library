import React, { useState, useRef, useEffect } from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'

const MovieList = ({ title, movies }) => {
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef(null)
  const animationFrameIdRef = useRef(null)

  const displayMovies = movies.filter(movie => movie.poster_path).slice(0, 15);
  const duplicatedMovies = [...displayMovies, ...displayMovies];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scroll = () => {
      if (!isPaused) {
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += 0.5;
        }
      }
      animationFrameIdRef.current = requestAnimationFrame(scroll);
    };

    animationFrameIdRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [isPaused, displayMovies.length])

  if (displayMovies.length === 0) {
    return null;
  }

  return (
    <div className="px-8 py-12 relative">
      <h2 className="text-3xl font-bold mb-6 text-white">{title}</h2>
      
      <div 
        ref={carouselRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex overflow-x-hidden py-6 gap-6"
      >
        {duplicatedMovies.map((movie, index) => (
          <div key={`${movie.id}-${index}`} className="flex-none w-64">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
}

export default MovieList