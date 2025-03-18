export interface Apartment {
  id: string;
  name: string;
  number: string;
  description: string;
  project: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  amenities: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ApartmentsResponse {
  data: Apartment[];
  count: number;
}
