import {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as fetchMoviesAPI from './servises/movies-API';

import Navigation from './Navigation/Navigation';
// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import NotFoundPage from './pages/NotFoundPage';
// import MovieDetailsPage from './pages/MovieDetailsPage';

// import Cast from './pages/Cast';
// import Reviews from './pages/Reviews';


const HomePage = lazy(()=>import('./pages/HomePage'));
const MoviesPage = lazy(()=>import('./pages/MoviesPage'));
const NotFoundPage = lazy(()=>import('./pages/NotFoundPage'));
const MovieDetailsPage = lazy(()=>import('./pages/MovieDetailsPage'));
const Cast = lazy(()=>import('./pages/Cast'));
const Reviews = lazy(()=>import('./pages/Reviews'));

export default function App() {
  // const [title, setTitle] = useState('');
  // const [movies, setMovies] = useState([]);

  // function handleformSubmit(title) {
  //   setTitle(title);
  // }

  // useEffect(() => {

  //   console.log(title)
  //   if (title === '') {
  //     return;
  //   }

  //   fetchMoviesAPI
  //     .fetchMoviesSearch(title)
  //     .then(data => setMovies(data.results));
  // }, [title]);

  return (
    <>
    
      <Navigation></Navigation>
<Suspense fallback='Loading...'>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route index path="home" element={<HomePage />}/>
        
        <Route
          path="movies"
          // element={<MoviesPage onSubmit={handleformSubmit} movies={movies} />}
          element={<MoviesPage />}
        />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
      </Suspense>
    </>
  );
}
