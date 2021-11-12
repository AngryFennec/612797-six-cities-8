import {ReactNodeArray} from 'react';
import ReviewItem from '../components/reviews-item/reviews-item';
import {ReviewType} from '../types/mocksTypes';

type ReviewsListType = {
  reviews: ReviewType[],
};

function renderReviewsList({reviews}: ReviewsListType): ReactNodeArray {
  return reviews.map((item, i) => (
    <ReviewItem
      review={item}
      key={`review-${item.id}`}
    />
  ),
  );
}

export default renderReviewsList;
