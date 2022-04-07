import { useState, useEffect  } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from './MoviesPage.module.css';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import * as fetchMoviesAPI from '../servises/movies-API';


// import { Outlet } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// import { useFetchMovies } from '../hooks/useFetchMovies';
// import * as fetchMoviesAPI from './servises/movies-API';

export default function MoviesPage() {
 
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');

  console.log(query )

  useEffect(() => {

      console.log(query )
      if (!query) {
      return;
      }

      if(query.trim()===''){
        Notify.warning('введите данные в поисковую строку');
        return
      }
  
      fetchMoviesAPI
        .fetchMoviesSearch(query )
        .then(data => setMovies(data.results));
    }, [query]);


    function handleSubmit(e){
      e.preventDefault();
     
      setSearchParams({query: e.currentTarget.elements.query.value})
// setMovies('')
    }

// 
// 


// export default function MoviesPage({ onSubmit, movies }) {
  
//   const [title, setTitle] = useState('');

//   const handleTitleChange = e => {
//     e.preventDefault();
//     console.log(e.currentTarget.value);
//     setTitle(e.currentTarget.value.toLowerCase());
//   };


//   const handleSubmit = e => {
//     e.preventDefault();

//     if (title.trim() === '') {
//       Notify.warning('введите данные в поисковую строку');
//       return;
//     }

//     onSubmit(title);

//     setTitle('');
//   };
  
  return (
    <>
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            name='query'
            placeholder="Search movie"
            // value={title}
            // onChange={handleTitleChange}
          />

          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>
        </form>
      </header>

      {movies && (
        <ul>
          {movies.map(({ title, id, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{from:location}}>{title ? title : name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
