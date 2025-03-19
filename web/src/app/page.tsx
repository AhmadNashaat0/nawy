import PaginationBar from "@/components/pagination";
import { SearchAndFilterBar } from "@/components/search-and-filter-bar";
import { buttonVariants } from "@/components/ui/button";
import { getApartments } from "@/features/apartments/api/get-apartments";
import { ApartmentsList } from "@/features/apartments/components/apartments-list";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function Home(props: {
  searchParams?: Promise<{
    search?: string;
    page?: number;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const page = searchParams?.page || 1;

  const apartments = await getApartments({ search, page });
  return (
    <main className="pt-4 space-y-4">
      <section className="flex justify-between items-center">
        <h2 className="text-2xl/6 font-bold">Apartments</h2>
        <Link
          href="/apartments/create"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          <span className="hidden sm:flex items-center gap-1">
            <PlusIcon /> Add Apartment
          </span>
          <span className="flex items-center gap-1 sm:hidden ">
            <PlusIcon /> Add
          </span>
        </Link>
      </section>
      <SearchAndFilterBar />
      <ApartmentsList apartments={apartments?.data} />
      {apartments && apartments.count > 0 && (
        <PaginationBar totalPages={Math.ceil(Number(apartments.count) / 12)} />
      )}
    </main>
  );
}
