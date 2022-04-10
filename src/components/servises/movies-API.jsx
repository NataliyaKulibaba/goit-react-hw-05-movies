import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.keyAPI = 'ddda8272dece2632275115613738c84b';

const KEY_API = 'ddda8272dece2632275115613738c84b';

export async function fetchMoviesById(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${KEY_API}&page=1`
    );
    return response.data;
  } catch (error) {}
  return;
}

export async function fetchMoviesSearch(title) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${KEY_API}&page=1&query=${title}&page=1`
    );
    return response.data;
  } catch (error) {}
  return null;
}

export async function fetchMovies(page = 1) {
  try {
    const response = await axios.get(
      `/trending/all/day?api_key=${KEY_API}&page=${page}`
    );
    return response.data;
  } catch (error) {}
  return null;
}

export async function fetchMoviesCast(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${KEY_API}`
    );
    return response.data;
  } catch (error) {}
  return null;
}

export async function fetchMoviesReview(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${KEY_API}`
    );
    return response.data;
  } catch (error) {}
  return null;
}
