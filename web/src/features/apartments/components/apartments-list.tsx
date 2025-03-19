import { Apartment } from "../types";
import { ApartmentCard } from "./apartment-card";

export function ApartmentsList({
  apartments,
}: {
  apartments: Apartment[] | undefined;
}) {
  if (!apartments)
    return (
      <div className="py-4 px-2 flex justify-center items-center">
        something went wrong
      </div>
    );
  if (apartments.length === 0)
    return (
      <div className="py-4 px-2 flex justify-center items-center">
        No apartments found
      </div>
    );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
}
