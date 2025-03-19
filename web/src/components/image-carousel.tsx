import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function ImagesCarousel({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) {
  return (
    <Carousel className={cn("relative rounded-lg overflow-hidden", className)}>
      <CarouselContent className="-ml-4">
        {images.map((img) => (
          <CarouselItem className="pl-4" key={img}>
            <Image
              src={img}
              alt={img}
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
  );
}
