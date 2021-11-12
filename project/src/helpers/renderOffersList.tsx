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
  return offers.map((item, i) => (
    <Offer
      offer={item}
      setActiveOffer={setActiveOffer}
      pageType={pageType}
      key={`offer-${item.id}`}
    />
  ),
  );
}

export default renderOffersList;
