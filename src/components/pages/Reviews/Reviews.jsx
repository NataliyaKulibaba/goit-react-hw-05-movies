import { useFetchMoviesReview } from '../../hooks/useFetchMoviesReview';
import s from './Reviews.module.css';

export default function Reviews() {
  const review = useFetchMoviesReview();

  console.log(review.length);

  return (
    <div>
      {review.length ? (
        <ul className={s.reviewList}>
          {review.map(({ content, author, id }) => (
            <li key={id} className={s.reviewItem}>
              <p className={s.reviewDesc}>AUTHOR: {author}</p>
              <p className={s.reviewDesc}>CONTENT: {content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.reviewDesc}>Rewievs not found</p>
      )}
    </div>
  );
}
