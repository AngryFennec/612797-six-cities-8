import {ReactNodeArray} from 'react';
import Offer from '../components/offer/offer';
import {OfferType} from '../types/mocksTypes';

type OffersListType = {
  offers: OfferType[];
  setActiveOffer?: (id?: string) => void;

}

function renderOffersList({offers, setActiveOffer}: OffersListType): ReactNodeArray {
  return (
    offers.map((item) => (
      Offer(
        {offer: item, setActiveOffer: setActiveOffer, isFavorites: false},
      )
    ),
    )
  );
}

export default renderOffersList;
