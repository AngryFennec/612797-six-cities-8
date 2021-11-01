export type UserType = {
  avatarUrl: string;
  id: string;
  isProStatus: boolean;
  name: string;
}

export type ReviewType = {
  comment: string;
  date: string;
  id: string;
  rating: number;
  user: UserType;
}

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  location: LocationType;
  name: string;
}

export enum HouseType {
  APARTAMENT,
  ROOM,
  HOUSE,
  HOTEL
}

export type OfferType = {
  bedrooms: number;
  city: CityType;
  description: string;
  goods: string[];
  host: UserType;
  id: string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: LocationType;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: HouseType,
}
