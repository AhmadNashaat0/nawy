export class Apartment {
  id: string;
  number: string;
  description: string;
  name: string;
  project: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  images: string[];
  amenities: string[] | null;
  createdAt: Date;
  updatedAt: Date;
}
