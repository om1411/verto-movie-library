import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <form onSubmit={handleSubmit} className="relative">
        <label htmlFor="movie-search" className="sr-only">Search for a movie</label>
        <input
          id="movie-search" 
          name="movie-search" 
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a movie..."
          className="w-full py-3 pl-12 pr-4 bg-gray-800 border-2 border-transparent rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
}

export default SearchBar