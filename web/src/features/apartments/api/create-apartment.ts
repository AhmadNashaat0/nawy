import { api } from "@/lib/api-client";
import { ApartmentForm } from "../schema";

export async function createApartment(apartment: ApartmentForm) {
  const response = await api.post<ApartmentForm>("/apartments", apartment);
  return response;
}
