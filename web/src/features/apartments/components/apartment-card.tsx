"use client";
import { BathIcon, BedSingle, Grid2X2 } from "lucide-react";
import { Apartment } from "../types";
import { ImagesCarousel } from "@/components/image-carousel";
import { useRouter } from "next/navigation";

export function ApartmentCard({ apartment }: { apartment: Apartment }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/apartments/${apartment.id}`)}
      key={apartment.id}
      className="group"
    >
      <ImagesCarousel images={apartment.images} />
      <div className="py-2">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-base/4 font-medium text-foreground">
              {`${apartment.name} - ${apartment.number}`}
            </h4>
            <p className="text-sm text-muted-foreground">{apartment.project}</p>
          </div>
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
        </div>
        <h2 className="pt-1.5 font-bold text-lg">
          {new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "EGP",
          }).format(Number(apartment.price))}
        </h2>
      </div>
    </div>
  );
}
