import { buttonVariants } from "@/components/ui/button";
import { ApartmentsList } from "@/features/apartments/components/apartments-list";
import { ApartmentsResponse } from "@/features/apartments/types";
import { api } from "@/lib/api-client";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const apartments = await api.get<ApartmentsResponse>("/apartments");
  return (
    <main className="space-y-4">
      <section className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Apartments</h2>
        <Link
          href="/apartments/create"
          className={buttonVariants({ variant: "outline" })}
        >
          <PlusIcon /> Add Apartment
        </Link>
      </section>
      <ApartmentsList apartments={apartments?.data} />
    </main>
  );
}
