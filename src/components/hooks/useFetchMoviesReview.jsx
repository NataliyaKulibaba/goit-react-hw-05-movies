import * as fetchMoviesByIdAPI from '../servises/movies-API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function useFetchMoviesReview() {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchMoviesByIdAPI.fetchMoviesReview(Number(movieId)).then(data => {
      setReview(data.results);
    });
  }, [movieId]);

  return review;
}
