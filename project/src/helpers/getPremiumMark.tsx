import {OfferType} from '../types/mocksTypes';

export function getPremiumMark(offer: OfferType): false | JSX.Element {
  return offer.isPremium && (
    <div className="place-card__mark">
      <span >Premium</span>
    </div>
  );
}
