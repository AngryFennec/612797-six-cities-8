import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {ICON_ANCHOR_HEIGHT, ICON_ANCHOR_WIDTH, ICON_SIZE, URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import {CityType, OfferType} from '../../types/mocksTypes';
import {useParams} from 'react-router-dom';
import {UseParamsHookInterface} from '../../types/propsTypes';

type MapType = {
  city: CityType,
  offers: OfferType[],
  activeId?: string,
};

const getMapHeight = (id?: string): string =>
  id ? '579px' : '100%';

function Map({city, offers, activeId}: MapType): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const {id} = useParams<UseParamsHookInterface>();

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [ICON_SIZE, ICON_SIZE],
    iconAnchor: [ICON_ANCHOR_WIDTH, ICON_ANCHOR_HEIGHT],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [ICON_SIZE, ICON_SIZE],
    iconAnchor: [ICON_ANCHOR_WIDTH, ICON_ANCHOR_HEIGHT],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (activeId && offer.id === activeId)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, activeId, defaultCustomIcon, currentCustomIcon]);

  return (
    <div
      style={{height: getMapHeight(id), maxWidth: '100%'}}
      ref={mapRef}
    />
  );
}

export default Map;
