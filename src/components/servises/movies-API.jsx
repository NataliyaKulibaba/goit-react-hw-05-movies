import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.keyAPI = 'ddda8272dece2632275115613738c84b';

const BASE_URL =
  'https://api.themoviedb.org/3';

  const KEY_API = 'ddda8272dece2632275115613738c84b';

async function fetchMoviesWithError(url='', config={}){
    const response = await fetch(url,config);
    return response.ok
    ? await response.json()
    :Promise.reject(new Error('Not found'));
}


// export async function fetchMoviesById(movieId) {
    
//     console.log(movieId);
//     return fetchMoviesWithError(`${BASE_URL}/movie/${movieId}?api_key=${KEY_API}&page=1`)
// }

export async function fetchMoviesById(movieId) {
    const response = await axios.get(`/movie/${movieId}?api_key=${KEY_API}&page=1`)
    console.log(movieId);
    return response.data;
}

// export function fetchMoviesSearch(title) {
//     console.log(title);
//     return fetchMoviesWithError(`${BASE_URL}/search/movie?api_key=${KEY_API}&page=1&query=${title}`)
// }

export async function fetchMoviesSearch(title) {
    const response = await axios.get(`/search/movie?api_key=${KEY_API}&page=1&query=${title}&page=1`)
    console.log(title);
    return response.data;
   
}

// export function fetchMovies(page=1) {
//     return fetchMoviesWithError(`${BASE_URL}/trending/all/day?api_key=${KEY_API}&page=${page}`)
// }

export async function fetchMovies(page=1) {
    const response = await axios.get(`/trending/all/day?api_key=${KEY_API}&page=${page}`)
    return response.data;
}

// export function fetchMoviesCast(movieId) {
//     return fetchMoviesWithError(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY_API}`)
// }

export async function fetchMoviesCast(movieId) {
    return fetchMoviesWithError(`/movie/${movieId}/credits?api_key=${KEY_API}`)
}




