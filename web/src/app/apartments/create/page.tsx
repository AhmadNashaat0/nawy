import BreadcrumbBar from "@/components/breadcrumb-bar";
import { ApartmentForm } from "@/features/apartments/components/forms/apartment-form";

export default function CreateApartmentPage() {
  return (
    <div className="space-y-4">
      <BreadcrumbBar page="Create Apartment" />
      <div>
        <h2 className="text-2xl font-bold">Create Apartment</h2>
        <p className="text-muted-foreground">
          Create a detailed apartment listing to showcase on our website.
        </p>
      </div>
      <ApartmentForm />
    </div>
  );
}
