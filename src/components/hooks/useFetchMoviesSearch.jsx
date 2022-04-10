import { useState, useEffect } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSearchParams } from 'react-router-dom';
import * as fetchMoviesAPI from '../servises/movies-API';

export function useFetchMoviesSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMoviesAPI.fetchMoviesSearch(query).then(data => {
      if (!data.total_results) {
        Notify.warning('Please write correct query');
      }
      setMovies(data.results);
    });
  }, [query]);

  return movies;
}
