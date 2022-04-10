import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as fetchMoviesByIdAPI from '../servises/movies-API';

export function useFetchMoviesById() {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesByIdAPI.fetchMoviesById(Number(movieId)).then(setMovie);
  }, [movieId]);

  return movie;
}
