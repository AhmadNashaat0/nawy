"use server";

import { api } from "@/lib/api-client";
import { ApartmentForm } from "../schema";
import { revalidatePath } from "next/cache";

export async function createApartment(apartment: ApartmentForm) {
  const response = await api.post<ApartmentForm>("/apartments", apartment);
  revalidatePath("/apartments");
  revalidatePath(`/apartments/${(response as any).id}`);
  return response;
}
