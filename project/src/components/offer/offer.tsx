import {OfferType} from '../../types/mocksTypes';
import {TOTAL_STARS} from '../../const';
import {Link} from 'react-router-dom';


type OfferPropsType = {
  offer: OfferType;
  setActiveOffer: (id: string) => void;
  isActive: boolean;
  isFavorites: boolean;
}

function Offer({offer, setActiveOffer, isActive, isFavorites}: OfferPropsType): JSX.Element {
  return (
    <article onMouseEnter={() => {
      setActiveOffer(offer.id);
    }}
    onMouseLeave={() => {
      setActiveOffer('');
    }} className={`${isFavorites ? 'favorites__card' : 'cities__place-card'} place-card`}
    >
      <div className="place-card__mark">
        {offer.isPremium ? <span >Premium</span> : ''}
      </div>
      <div className={`${isFavorites ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200"
            alt="Place image"
          />
        </a>
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
            <span style={{width: `${100 / TOTAL_STARS * offer.rating}%`}}/>
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
