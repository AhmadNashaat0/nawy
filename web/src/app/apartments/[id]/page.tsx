import { ImagesCarousel } from "@/components/image-carousel";
import { getApartment } from "@/features/apartments/api/get-apartment";
import { BathIcon, BedSingle, Grid2X2 } from "lucide-react";
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
    <section className="py-8">
      <div className="grid grid-cols-12 gap-6 p-2 border rounded-lg group">
        <ImagesCarousel images={apartment.images} className="col-span-4" />
        <div className="col-span-8 flex flex-col gap-3">
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
      </div>
      <div className="pt-6">
        <h4 className="text-xl font-medium">Amenities</h4>
        <div>
          {apartment.amenities.map((amenity) => (
            <p key={amenity}>{amenity}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
