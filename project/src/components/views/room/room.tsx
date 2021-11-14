import {AppRoute} from '../../../const';
import {Link, useParams} from 'react-router-dom';
import ReviewsForm from '../../reviews-form/reviews-form';
import renderReviewsList from '../../../helpers/renderReviewsList';
import Map from '../../map/map';
import {OfferType, ReviewType} from '../../../types/mocksTypes';
import {getPremiumMark} from '../../../helpers/getPremiumMark';
import renderOffersList from '../../../helpers/renderOffersList';
import {getRatingSpan} from '../../../helpers/getSpanStyle';
import {ReactNode} from 'react';

const NEARBY_OFFERS_QUANTITY = 3;

const HOST_AVATAR_SIZE = 74;

type RoomPropsType = {
  offers: OfferType[],
  reviews: ReviewType[],
  activeCity : string
};


const getProStatus = (isProStatus: boolean): ReactNode =>
  isProStatus && <span className="property__user-status">Pro</span>;

function Room({offers, reviews, activeCity}: RoomPropsType): JSX.Element {

  const nearbyOffers = offers.filter((offerItem) => offerItem.city.name === activeCity).slice(0, NEARBY_OFFERS_QUANTITY);
  const {id}: any = useParams();
  const offer: OfferType | undefined = offers.find((offerItem) => offerItem.id === id);

  if (!offer) {
    return <div className="page" />;
  }

  const {images,isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host, description} = offer;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="Studio"/>
                </div>
              ),
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {getPremiumMark(isPremium)}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  {getRatingSpan(rating)}
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width={HOST_AVATAR_SIZE}
                      height={HOST_AVATAR_SIZE}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {getProStatus(host.isProStatus)}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                {renderReviewsList({reviews: reviews})}
                <ReviewsForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={nearbyOffers[0].city}
              offers={nearbyOffers}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {renderOffersList({offers: nearbyOffers, classPrefix: 'near-places'})}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
