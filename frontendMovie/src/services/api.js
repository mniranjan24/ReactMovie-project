const API_KEY = "c0f411b64a0787b0b434fc5941223eee"
const BASE_URL = "https://api.themoviedb.org/3"

export const getpopularMovies = async () =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) =>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`);
    const data = await response.json()
    return data.results
}