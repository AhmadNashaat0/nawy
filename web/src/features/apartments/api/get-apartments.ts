import { api } from "@/lib/api-client";
import { ApartmentsResponse } from "../types";

export async function getApartments({
  search,
  page,
}: {
  search: string;
  page: number;
}) {
  const response = await api.get<ApartmentsResponse>("/apartments", {
    params: { search, page },
  });
  return response;
}
