import React from 'react';
import Offer from '../../offer/offer';
import {DefaultPropsType} from '../../../types/propsTypes';
import {useState} from 'react';

function OffersList({offers}: DefaultPropsType): JSX.Element {
  const [activeId, setActiveId] = useState('');

  return (
    <>
      {
        offers.map((item, i) => <Offer offer={item} isActive={activeId === item.id} setActiveOffer={setActiveId} isFavorites={false} key={`offer-${item.id}`} />)
      }
    </>
  );
}

export default OffersList;
