import { api } from "@/lib/api-client";
import { ApartmentsResponse } from "../types";

export async function getApartments() {
  const response = await api.get<ApartmentsResponse>("/apartments");
  return response;
}
