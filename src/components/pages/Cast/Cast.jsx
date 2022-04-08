import { useFetchMoviesCast } from '../../hooks/useFetchMoviesCast';
import s from './Cast.module.css';

export default function Cast() {
  const cast = useFetchMoviesCast();

  return (
    <div>
      {cast && (
        <ul className={s.cast}>
          {cast.map(({ profile_path, character, name, id }) => (
            <li key={id} className={s.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                className={s.castImg}
              ></img>
              <ul className={s.castItemDesc}>
                <li>Character: {character}</li>
                <li>Name: {name}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
