import { useState, useEffect } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from './MoviesPage.module.css';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import * as fetchMoviesAPI from '../../servises/movies-API';

export default function MoviesPage() {
  const location = useLocation();
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

  function handleSubmit(e) {
    e.preventDefault();

    setSearchParams({ query: e.currentTarget.elements.query.value });
  }

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search movie"
        />

        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>
      </form>

      {movies && (
        <ul className={s.moviesList}>
          {movies.map(({ title, id, name, poster_path }) => (
            <li key={id} className={s.movieItem}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={s.movieLink}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title ? title : name}
                  className={s.movie}
                ></img>
                <p className={s.movieTitle}>{title ? title : name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
