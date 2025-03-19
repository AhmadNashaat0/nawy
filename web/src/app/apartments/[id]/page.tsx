import BreadcrumbBar from "@/components/breadcrumb-bar";
import { ImagesCarousel } from "@/components/image-carousel";
import { buttonVariants } from "@/components/ui/button";
import { getApartment } from "@/features/apartments/api/get-apartment";
import { amenitiesIconList } from "@/features/apartments/utils/amenities-list";
import { cn } from "@/lib/utils";
import { BathIcon, BedSingle, Grid2X2, PenIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ApartmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const apartment = await getApartment({ id });
  if (!apartment) return notFound();
  return (
    <section className="py-4 space-y-4">
      <BreadcrumbBar page="Apartment" />
      <div className="relative grid grid-cols-12 gap-6 p-2 border rounded-lg group">
        <ImagesCarousel
          images={apartment.images}
          className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4"
        />
        <div className="col-span-12 sm:col-span-6 md:col-span-7 lg:col-span-8 flex flex-col gap-3">
          <div>
            <h4 className="text-2xl font-bold text-foreground">
              {`${apartment.name} - ${apartment.number}`}
            </h4>
            <p className="text-muted-foreground">{apartment.project}</p>
          </div>
          <h2 className="font-bold text-2xl">
            {new Intl.NumberFormat(undefined, {
              style: "currency",
              currency: "EGP",
            }).format(Number(apartment.price))}
          </h2>
          <div className="text-sm text-muted-foreground flex gap-2">
            <p className="text-sm flex items-center gap-1">
              <BedSingle className="w-4 h-4" /> {apartment.bedrooms}
            </p>
            .
            <p className="text-sm flex items-center gap-1">
              <BathIcon className="w-4 h-4" /> {apartment.bathrooms}
            </p>
            .
            <p className="text-sm flex items-center gap-1">
              <Grid2X2 className="w-4 h-4" /> {`${Number(apartment.area)} m²`}
            </p>
          </div>
          <div>
            <p className="font-medium">Description</p>
            <p className="text-muted-foreground">{apartment.description}</p>
          </div>
        </div>
        <Link
          href={`/apartments/${apartment.id}/update`}
          className={cn(
            "absolute top-1 right-1",
            buttonVariants({ variant: "outline" })
          )}
        >
          <PenIcon />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-xl font-medium">Amenities</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {apartment.amenities.map((amenity, index) => {
            const Icon =
              amenitiesIconList[amenity as keyof typeof amenitiesIconList].Icon;
            return (
              <div className="p-4 rounded-xl border" key={index}>
                <Icon />
                {amenity}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
