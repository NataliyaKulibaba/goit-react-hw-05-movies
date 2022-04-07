import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.production.min';
import * as fetchMoviesByIdAPI from '../servises/movies-API';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  console.log(movieId);

  useEffect(() => {

    console.log('зайшов в cast');
    fetchMoviesByIdAPI.fetchMoviesCast(movieId).then(data => {
      console.log(data);
      setCast(data);
    });
  }, [movieId]);

  console.log(cast);

  return <div>{cast}</div>;
}
