import {ReactNodeArray} from 'react';
import Offer from '../components/offer/offer';
import {OfferType} from '../types/mocksTypes';

type OffersListType = {
  offers: OfferType[];
  setActiveOffer?: (id?: string) => void;

}

function renderOffersList({offers, setActiveOffer}: OffersListType): ReactNodeArray {
  return offers.map((item, i) => (
    <Offer
      offer={item}
      setActiveOffer={setActiveOffer}
      isFavorites={false}
      key={`offer-${item.id}`}
    />
  ),
  );
}

export default renderOffersList;
