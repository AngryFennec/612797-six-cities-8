import {ReactNodeArray} from 'react';
import Offer from '../components/offer/offer';
import {OfferType} from '../types/mocksTypes';

type OffersListType = {
  offers: OfferType[];
  setActiveOffer?: (id?: string) => void;
  classPrefix?: string,
}

function renderOffersList({offers, setActiveOffer, classPrefix}: OffersListType): ReactNodeArray {
  return offers.map((offer) => (
    <Offer
      offer={offer}
      setActiveOffer={setActiveOffer}
      classPrefix={classPrefix}
      key={offer.id}
    />
  ),
  );
}

export default renderOffersList;
