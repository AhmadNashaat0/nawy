import BreadcrumbBar from "@/components/breadcrumb-bar";
import { getApartment } from "@/features/apartments/api/get-apartment";
import { ApartmentForm } from "@/features/apartments/components/forms/apartment-form";

export default async function UpdateApartmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const apartment = await getApartment({ id });

  return (
    <section className="space-y-6 pt-6">
      <BreadcrumbBar
        page="Update Apartment"
        parent="Apartment"
        parentPath={`/apartments/${id}`}
      />
      <div>
        <h2 className="text-2xl font-bold">Update Apartment</h2>
        <p className="text-muted-foreground">
          Update a detailed apartment listing to showcase on our website.
        </p>
      </div>
      <ApartmentForm defaultValues={apartment} />
    </section>
  );
}
