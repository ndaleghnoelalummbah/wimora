export interface BraiderService {
  // id: string; //will be removed
  name: string;
  price: number;
  minutes: number;
}
export interface Braider {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  priceFrom: number;
  location: string;
  services: BraiderService[];
  slots: string[];
}
export type BraiderCardItem = {
  id: string;
  studioName: string;
  speciality: string;
  startingPrice: string;
  rating: number;
  coverImageUrl: string;
};
