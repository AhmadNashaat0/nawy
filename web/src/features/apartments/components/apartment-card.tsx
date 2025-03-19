import Image from "next/image";
import { Apartment } from "../types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import {
  AreaChartIcon,
  BathIcon,
  BedSingle,
  Grid2X2,
  Scan,
} from "lucide-react";

export function ApartmentCard({ apartment }: { apartment: Apartment }) {
  return (
    <div key={apartment.id} className="group">
      <Carousel className="relative rounded-lg overflow-hidden">
        <CarouselContent className="-ml-4">
          {apartment.images.map((img) => (
            <CarouselItem className="pl-4" key={img}>
              <Image
                src={img}
                alt={apartment.name}
                width={300}
                height={200}
                className="w-full aspect-3/2 object-cover transition-all group-hover:scale-105"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="absolute left-1/2 -translate-x-1/2 bottom-1" />
        <CarouselPrevious className="left-1.5 transition-all hidden group-hover:flex" />
        <CarouselNext className="right-1.5 transition-all hidden group-hover:flex" />
      </Carousel>
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
