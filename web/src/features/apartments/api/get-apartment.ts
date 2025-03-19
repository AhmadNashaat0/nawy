import { api } from "@/lib/api-client";
import { Apartment } from "../types";

export async function getApartment({ id }: { id: string }) {
  const response = await api.get<Apartment>(`/apartments/${id}`);
  return response;
}
