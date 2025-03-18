import { ApartmentsResponse } from "../types";

export function ApartmentsList({
  apartments,
}: {
  apartments: ApartmentsResponse | undefined;
}) {
  if (!apartments) return <div>something went wrong</div>;
  return apartments.data.map((apartment) => (
    <div key={apartment.id}>{apartment.name}</div>
  ));
}
