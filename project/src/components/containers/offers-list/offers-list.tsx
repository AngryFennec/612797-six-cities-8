import React from 'react';
import Offer from '../../offer/offer';
import {DefaultPropsType} from '../../../types/propsTypes';
import {useState} from 'react';
function OffersList({offers}: DefaultPropsType): JSX.Element {

  const [activeOfferId, setActiveOfferId] = useState('');

  function setActiveOffer(id: string): void {
    setActiveOfferId(id);
  }

  return (
    <>
      {
        offers.map((item, i) => <Offer offer={item} isActive={activeOfferId === item.id} setActiveOffer={setActiveOffer} isFavorites={false} key={`offer-${item.id}`} />)
      }
    </>
  );
}

export default OffersList;
