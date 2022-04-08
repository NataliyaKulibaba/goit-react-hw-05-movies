import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.keyAPI = 'ddda8272dece2632275115613738c84b';



  const KEY_API = 'ddda8272dece2632275115613738c84b';


export async function fetchMoviesById(movieId) {
    const response = await axios.get(`/movie/${movieId}?api_key=${KEY_API}&page=1`)
    console.log(movieId);
    return response.data;
}


export async function fetchMoviesSearch(title) {
    const response = await axios.get(`/search/movie?api_key=${KEY_API}&page=1&query=${title}&page=1`)
    return response.data;
   
}


export async function fetchMovies(page=1) {
    const response = await axios.get(`/trending/all/day?api_key=${KEY_API}&page=${page}`)
    return response.data;
}


export async function fetchMoviesCast(movieId) {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY_API}`)
    return response.data;
}

export async function fetchMoviesReview(movieId) {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY_API}`)
    return response.data;
   
}




