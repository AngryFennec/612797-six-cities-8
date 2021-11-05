import React from 'react';
import Offer from '../../offer/offer';
import {OfferType} from '../../../types/mocksTypes';

type OffersListType = {
  offers: OfferType[];
  setActiveOffer?: (id: string | undefined) => void;
}
function OffersList({offers, setActiveOffer}: OffersListType): JSX.Element {
  return (
    <>
      {
        offers.map((item, i) => (
          <Offer
            offer={item}
            setActiveOffer={setActiveOffer}
            isFavorites={false}
            key={`offer-${item.id}`}
          />
        ),
        )
      }
    </>
  );
}

export default OffersList;
