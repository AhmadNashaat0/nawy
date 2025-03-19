import { api } from "@/lib/api-client";
import { ApartmentForm } from "../schema";

export async function updateApartment(id: string, apartment: ApartmentForm) {
  const response = await api.patch<ApartmentForm>(
    `/apartments/${id}`,
    apartment
  );
  return response;
}
