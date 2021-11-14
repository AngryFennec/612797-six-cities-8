import {OfferType} from '../../types/mocksTypes';
import {Link} from 'react-router-dom';
import {getPremiumMark} from '../../helpers/getPremiumMark';
import {getRatingSpan} from '../../helpers/getSpanStyle';


type OfferPropsType = {
  offer: OfferType;
  setActiveOffer?: (id?: string) => void;
  classPrefix?: string;
}

function Offer({offer, setActiveOffer, classPrefix}: OfferPropsType): JSX.Element {
  function offerMouseEnterHandler() {
    if (setActiveOffer) {
      setActiveOffer(offer.id);
    }
  }

  function offerMouseLeaveHandler() {
    if (setActiveOffer) {
      setActiveOffer();
    }
  }

  function getCardClasses(): string {
    if (classPrefix === 'near-places') {
      return `place-card ${classPrefix}__card`;
    }
    return `place-card ${classPrefix}__place-card`;
  }

  function getImageWrapperClasses(): string {
    return `place-card__image-wrapper ${classPrefix}__image-wrapper`;
  }

  return (
    <article
      onMouseEnter={offerMouseEnterHandler}
      onMouseLeave={offerMouseLeaveHandler}
      className={getCardClasses()}
    >
      {getPremiumMark(offer.isPremium)}
      <div className={getImageWrapperClasses()}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            {getRatingSpan(offer.rating)}
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Offer;
