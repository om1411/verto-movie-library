import React, { createContext, useState, useEffect, useContext } from 'react'

const WatchlistContext = createContext()

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(
    () => JSON.parse(localStorage.getItem('watchlist')) || []
  )

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist])

  const addMovieToWatchlist = (movie) => {
    if (!watchlist.some(item => item.id === movie.id)) {
      setWatchlist([...watchlist, movie])
    }
  }

  const removeMovieFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter(movie => movie.id !== movieId))
  }

  const isMovieInWatchlist = (movieId) => {
    return watchlist.some(item => item.id === movieId);
  }

  return (
    <WatchlistContext.Provider value={{ watchlist, addMovieToWatchlist, removeMovieFromWatchlist, isMovieInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  )
}

export const useWatchlist = () => {
  return useContext(WatchlistContext)
}