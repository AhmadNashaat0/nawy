"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  type ApartmentForm,
  apartmentFormSchema,
} from "@/features/apartments/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AmenitiesForm from "./amenities-form";
import ImageUploadForm from "./images-form";
import { uploadImagesFromUrl } from "../../utils/upload-images-from-url";
import { createApartment } from "../../api/create-apartment";
import { toast } from "sonner";
import { updateApartment } from "../../api/update-apartment";
import { Apartment } from "../../types";
import { useRouter } from "next/navigation";

export function ApartmentForm({
  defaultValues,
  setOpen,
}: {
  defaultValues?: Apartment;
  setOpen?: (open: boolean) => void;
}) {
  const router = useRouter();
  const form = useForm<ApartmentForm>({
    resolver: zodResolver(apartmentFormSchema),
    defaultValues: defaultValues ?? {
      name: "",
      number: "",
      project: "",
      description: "",
      price: "" as unknown as number,
      area: "" as unknown as number,
      bedrooms: "" as unknown as number,
      bathrooms: "" as unknown as number,
      images: [],
      amenities: [],
    },
  });

  async function onSubmit(values: ApartmentForm) {
    values.images = await uploadImagesFromUrl(values.images);
    let response;
    if (defaultValues) {
      response = await updateApartment(defaultValues.id, values);
    } else {
      response = await createApartment(values);
    }
    if (response) {
      toast.success("Apartment saved successfully!");
      setOpen && setOpen(false);
    } else {
      toast.error("Something went wrong!");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter unit name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter unit number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="project"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project</FormLabel>
              <FormControl>
                <Input placeholder="Enter project name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter description for the unit "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="pe-10"
                      placeholder="Enter unit price"
                      type="number"
                      min={1}
                      {...field}
                    />
                    <span className="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50">
                      EGP
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter unit area"
                      className="pe-10"
                      type="number"
                      min={1}
                      {...field}
                    />
                    <span className="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50">
                      m²
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter number of the bedrooms"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bathrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bathrooms</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter number of the bathrooms"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="amenities"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amenities</FormLabel>
              <FormControl>
                <AmenitiesForm field={field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <ImageUploadForm field={field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
