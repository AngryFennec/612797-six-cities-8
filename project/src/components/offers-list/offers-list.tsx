import React from 'react';
import Offer from '../offer/offer';

type OffersListProps = {
  offersCount: number;
}

function OffersList({offersCount}: OffersListProps): JSX.Element {
  const offers = new Array(offersCount).fill(null);
  return (
    <React.Fragment>
      {
        // eslint-disable-next-line react/no-array-index-key
        offers.map((item, i) => <Offer key={`offer-${i}`} />)
      }
    </React.Fragment>
  );
}

export default OffersList;
