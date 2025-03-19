"use server";

import { api } from "@/lib/api-client";
import { ApartmentForm } from "../schema";
import { revalidatePath } from "next/cache";

export async function updateApartment(id: string, apartment: ApartmentForm) {
  const response = await api.patch<ApartmentForm>(
    `/apartments/${id}`,
    apartment
  );
  revalidatePath("/apartments");
  revalidatePath(`/apartments/${id}`);
  return response;
}
