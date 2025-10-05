const API_KEY = '30adf1609e987cd90dd6374947753f07'
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchMovies = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US&page=1`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Failed to fetch movies:", error)
    return []
  }
}

export const searchMovies = async (query) => {
  if (!query) return [];
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to search movies:", error);
    return [];
  }
}

export const getImageUrl = (path, size = 'original') => {
  return `https://image.tmdb.org/t/p/${size}${path}`
}

export const discoverMovies = async (params) => {
  const query = new URLSearchParams(params).toString()
  try {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&${query}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Failed to discover movies:", error)
    return []
  }
}

export const fetchMovieVideos = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json();
    if (!data.results || data.results.length === 0) return null
    let trailer = data.results.find(
      video => video.site === 'YouTube' && video.type === 'Trailer' && video.official
    )

    if (!trailer) {
      trailer = data.results.find(
        video => video.site === 'YouTube' && video.type === 'Trailer'
      )
    }

    if (!trailer) {
      trailer = data.results.find(
        video => video.site === 'YouTube' && (video.type === 'Teaser' || video.type === 'Clip')
      )
    }

    return trailer || null
  } catch (error) {
    console.error("Failed to fetch movie videos:", error)
    return null
  }
}