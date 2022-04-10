import { useState, useEffect } from 'react';
import * as fetchMoviesAPI from '../servises/movies-API';

export function useFetchMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesAPI.fetchMovies().then(data => setMovies(data.results));
  }, []);

  return movies;
}
