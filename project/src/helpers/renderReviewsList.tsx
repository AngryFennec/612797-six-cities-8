import {ReactNodeArray} from 'react';
import ReviewItem from '../components/reviews-item/reviews-item';
import {ReviewType} from '../types/mocksTypes';

type ReviewsListType = {
  reviews: ReviewType[],
};

function renderReviewsList({reviews}: ReviewsListType): ReactNodeArray {
  return reviews.map((review) => (
    <ReviewItem
      review={review}
      key={review.id}
    />
  ),
  );
}

export default renderReviewsList;
