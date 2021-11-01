import React, {ChangeEvent, FormEvent, useState} from 'react';
import {TOTAL_STARS} from '../../const';

function ReviewsForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  function ratingChangeHandler(evt: ChangeEvent): void {
    setRating(Number((evt?.target as unknown as HTMLInputElement).value));
  }

  const dummyHandler = (param: string | number) => param;

  const formSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    dummyHandler(rating);
    dummyHandler(review);
  };

  return (
    <form className="reviews__form form" action="#" method="post"  onSubmit={formSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {new Array(TOTAL_STARS).fill(undefined).map((_, i) => (
          <React.Fragment key={`${TOTAL_STARS - i - 1}-stars`}>
            <input className="form__rating-input visually-hidden" name="rating" value={TOTAL_STARS - i - 1} id={`${TOTAL_STARS - i - 1}-stars`} type="radio" onChange={ratingChangeHandler} />
            <label htmlFor={`${TOTAL_STARS - i - 1}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved" onChange={(evt) => setReview(evt.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
        with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>);
}

export default ReviewsForm;
