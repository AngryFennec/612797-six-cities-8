import React from 'react';
import Offer from '../../offer/offer';
import {getRandomString} from '../../../utils/common';

type OffersListProps = {
  offersCount: number;
}

function OffersList({offersCount}: OffersListProps): JSX.Element {
  const offers = new Array(offersCount).fill(getRandomString());

  return (
    <>
      {
        offers.map((item, i) => <Offer key={`offer-${item}`} />)
      }
    </>
  );
}

export default OffersList;
