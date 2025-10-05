import React, { useState, useEffect, useRef } from 'react'
import { fetchMovies, searchMovies, discoverMovies } from '../services/api'
import MovieCarousel from '../components/MovieCarousel'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'
import Reviews from '../components/Reviews'
import MovieGrid from '../components/MovieGrid'

const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState([])
  const [popular, setPopular] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [bollywoodMovies, setBollywoodMovies] = useState([])
  const [tollywoodMovies, setTollywoodMovies] = useState([])
  const [kollywoodMovies, setKollywoodMovies] = useState([])
  const [hollywoodMovies, setHollywoodMovies] = useState([])
  
  const popularMoviesRef = useRef(null)

  useEffect(() => {
    const loadAllMovies = async () => {
      const [
        nowPlayingData, popularData, bollywoodData, tollywoodData, kollywoodData, hollywoodData,
      ] = await Promise.all([
        fetchMovies('/movie/now_playing'),
        fetchMovies('/movie/popular'),
        discoverMovies({ with_origin_country: 'IN', with_original_language: 'hi' }),
        discoverMovies({ with_origin_country: 'IN', with_original_language: 'te' }),
        discoverMovies({ with_origin_country: 'IN', with_original_language: 'ta' }),
        discoverMovies({ with_origin_country: 'US', with_original_language: 'en' }),
      ])

      setNowPlaying(nowPlayingData)
      setPopular(popularData)
      setBollywoodMovies(bollywoodData)
      setTollywoodMovies(tollywoodData)
      setKollywoodMovies(kollywoodData)
      setHollywoodMovies(hollywoodData)
    }
    loadAllMovies()
  }, [])

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([])
      return
    }
    setIsSearching(true)
    const debounceTimer = setTimeout(async () => {
      const results = await searchMovies(searchTerm)
      setSearchResults(results)
      setIsSearching(false)
    }, 500)

    return () => clearTimeout(debounceTimer)
  }, [searchTerm])

  const handleScrollDown = () => {
    popularMoviesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <MovieCarousel movies={nowPlaying} onScrollDown={handleScrollDown} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {searchTerm ? (
        <MovieGrid title={`Results for "${searchTerm}"`} movies={searchResults} isLoading={isSearching} />
      ) : (
        <>
          <div ref={popularMoviesRef}>
            <MovieList title="Popular Movies" movies={popular} />
          </div>
          <MovieGrid title="Trending Bollywood Movies" movies={bollywoodMovies} />
          <MovieGrid title="Trending Tollywood Movies" movies={tollywoodMovies} />
          <MovieGrid title="Trending Hollywood Movies" movies={hollywoodMovies} />
          <MovieGrid title="Trending Kollywood Movies" movies={kollywoodMovies} />
          <Reviews />
        </>
      )}
    </div>
  )
}

export default HomePage