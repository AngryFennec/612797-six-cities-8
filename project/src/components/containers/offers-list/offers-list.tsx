import {ReactNodeArray} from 'react';
import Offer from '../../offer/offer';
import {OfferType} from '../../../types/mocksTypes';

type OffersListType = {
  offers: OfferType[];
  setActiveOffer?: (id?: string) => void;

}

function OffersList({offers, setActiveOffer}: OffersListType): ReactNodeArray {
  return (
    offers.map((item) => (
      Offer(
        {offer: item, setActiveOffer: setActiveOffer, isFavorites: false},
      )
    ),
    )
  );
}

export default OffersList;
