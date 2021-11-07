import {MutableRefObject, useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {CityType} from '../types/mocksTypes';
import {MAP_ATTRIBUTION, MAP_URL_TEMPLATE} from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: CityType): Map | null  {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(
        MAP_URL_TEMPLATE,
        {
          attribution: MAP_ATTRIBUTION,
        },
      );

      instance.addLayer(layer);
      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
