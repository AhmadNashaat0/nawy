import { ApartmentsList } from "@/features/apartments/components/apartments-list";
import { ApartmentsResponse } from "@/features/apartments/types";
import { api } from "@/lib/api-client";
import Link from "next/link";

export default async function Home() {
  const apartments = await api.get<ApartmentsResponse>("/apartments");
  return (
    <main>
      <section className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Apartments</h2>
        <Link href="/apartments/create">Add</Link>
      </section>
      <ApartmentsList apartments={apartments} />
    </main>
  );
}
