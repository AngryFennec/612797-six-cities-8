import {AppRoute, TOTAL_STARS} from '../../../const';
import {Link} from 'react-router-dom';
import ReviewsForm from '../../reviews-form/reviews-form';
import renderReviewsList from '../../../helpers/renderReviewsList';
import Map from '../../map/map';
import {OfferType, ReviewType} from '../../../types/mocksTypes';
import {getPremiumMark} from '../../../helpers/getPremiumMark';
import renderOffersList from '../../../helpers/renderOffersList';
import {PageType} from '../../../types/propsTypes';

const NEARBY_OFFERS_QUANTITY = 3;

type RoomPropsType = {
  offer: OfferType,
  offers: OfferType[],
  reviews: ReviewType[]
};


function getProStatus(offer: OfferType): false | JSX.Element {
  return offer.host.isProStatus &&
    <span className="property__user-status">Pro</span>;
}

function Room({offer, offers, reviews}: RoomPropsType): JSX.Element {
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
              {offer.images.map((image, index) =>
                (
                  <div className="property__image-wrapper" key={`image-${image}-${offer.id}`}>
                    <img className="property__image" src={image} alt="Studio"/>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {getPremiumMark(offer)}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
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
                  <span style={{width: `${100 / TOTAL_STARS * offer.rating}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((good) => (
                    <li className="property__inside-item" key={`good-${good}-${offer.id}`}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  {getProStatus(offer)}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
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
              city={offers[0].city}
              offers={offers.slice(0, NEARBY_OFFERS_QUANTITY)}
              pageType={PageType.room}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {renderOffersList({offers: offers.slice(0, NEARBY_OFFERS_QUANTITY), pageType: PageType.room})}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
