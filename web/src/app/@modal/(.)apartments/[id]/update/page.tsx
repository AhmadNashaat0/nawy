import { getApartment } from "@/features/apartments/api/get-apartment";
import UpdateApartmentDialog from "@/features/apartments/components/dialogs/update-apartment-dialog";

export default async function CreateApartmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const apartment = await getApartment({ id });
  if (!apartment) return null;
  return <UpdateApartmentDialog apartment={apartment} />;
}
