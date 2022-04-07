import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as fetchMoviesByIdAPI from '../servises/movies-API';

export function useFetchMoviesById() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  console.log(movieId);

  useEffect(() => {
    console.log('зайшов в юз-ефект');
    fetchMoviesByIdAPI.fetchMoviesById(Number(movieId)).then(setMovie);
  }, [movieId]);

  return movie;
}