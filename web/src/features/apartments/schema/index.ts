import { z } from "zod";

export const apartmentFormSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  number: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  project: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  price: z.coerce.number().min(1, {
    message: "price must be at least 1 Egyptian Pound.",
  }),
  area: z.coerce.number().min(1, {
    message: "area must be at least 1 square meter.",
  }),
  bedrooms: z.coerce.number().min(0, {
    message: "bedrooms must be at least 0 bedroom.",
  }),
  bathrooms: z.coerce.number().min(0, {
    message: "bathrooms must be at least 0 bathrooms.",
  }),
  images: z.array(z.string()).min(1, {
    message: "images must be at least 1 image.",
  }),
  amenities: z.array(z.string()).min(0, {
    message: "amenities must be at least 1 amenity.",
  }),
});

export type ApartmentForm = z.infer<typeof apartmentFormSchema>;
