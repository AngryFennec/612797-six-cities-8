import {ReviewType} from '../../types/mocksTypes';
import {getRatingSpan} from '../../helpers/getSpanStyle';

const AVATAR_SIZE = 54;

type ReviewPropsType = {
  review: ReviewType;
}

function ReviewItem({review}: ReviewPropsType): JSX.Element {
  const date = new Date(review.date);
  const dateValue = `${date.getFullYear()} - ${date.getMonth() + 1}-${date.getDate()}`;
  const dateString = `${date.toLocaleString('en', { month: 'long' })} ${date.getFullYear()}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width={AVATAR_SIZE}
            height={AVATAR_SIZE}
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
            {getRatingSpan(review.rating)}
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time
          className="reviews__time"
          dateTime={dateValue}
        >
          {dateString}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
