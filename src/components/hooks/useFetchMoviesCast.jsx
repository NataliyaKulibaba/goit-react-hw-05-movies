import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as fetchMoviesByIdAPI from '../servises/movies-API';

export function useFetchMoviesCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    try {
      fetchMoviesByIdAPI.fetchMoviesCast(Number(movieId)).then(data => {
        setCast(data.cast);
      });
    } catch (error) {}
    return;
  }, [movieId]);

  return cast;
}
