export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  type: 'bike' | 'scooter' | 'ev';
  price: number;
  image: string;
  fuelType: 'petrol' | 'electric' | 'hybrid';
  mileage: string;
  engine: string;
  power: string;
  features: string[];
  colors: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Showroom {
  id: string;
  name: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
  brands: string[];
}

export interface UpcomingLaunch {
  id: string;
  name: string;
  brand: string;
  expectedPrice: string;
  launchDate: string;
  image: string;
  keyFeatures: string[];
}