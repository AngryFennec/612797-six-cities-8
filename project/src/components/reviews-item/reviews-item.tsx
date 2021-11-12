import {TOTAL_STARS} from '../../const';
import {ReviewType} from '../../types/mocksTypes';

type ReviewPropsType = {
  review: ReviewType;
}
function ReviewItem({review}: ReviewPropsType): JSX.Element {
  const date = new Date(review.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${100 / TOTAL_STARS * review.rating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}>{date.toLocaleString('en', { month: 'long' })} {date.getFullYear()}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
