import React from 'react'
import MovieCard from './MovieCard'
import SkeletonCard from './SkeletonCard'
import PropTypes from 'prop-types'

const MovieGrid = ({ title, movies, isLoading }) => {
  return (
    <div className="px-8 py-12">
      <h2 className="text-3xl font-bold mb-6 text-white">{title}</h2>
      
      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8"> 
          {Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)}
        </div>
      ) : movies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8"> 
          {movies.map(movie => ( 
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-gray-400">No results found for your search.</p>
        </div>
      )}
    </div>
  )
}

MovieGrid.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
}

export default MovieGrid