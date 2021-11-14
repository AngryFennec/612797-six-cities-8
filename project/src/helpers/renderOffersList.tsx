import {ReactNodeArray} from 'react';
import Offer from '../components/offer/offer';
import {OfferType} from '../types/mocksTypes';
import {PageType} from '../types/propsTypes';

type OffersListType = {
  offers: OfferType[];
  setActiveOffer?: (id?: string) => void;
  pageType: PageType,
}

function renderOffersList({offers, setActiveOffer, pageType}: OffersListType): ReactNodeArray {
  return offers.map((offer) => (
    <Offer
      offer={offer}
      setActiveOffer={setActiveOffer}
      pageType={pageType}
      key={offer.id}
    />
  ),
  );
}

export default renderOffersList;
