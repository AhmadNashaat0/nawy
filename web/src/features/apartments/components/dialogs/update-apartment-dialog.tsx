"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ApartmentForm } from "@/features/apartments/components/forms/apartment-form";
import { useRouter } from "next/navigation";
import { Apartment } from "../../types";
import { useState } from "react";

export default function UpdateApartmentDialog({
  apartment,
}: {
  apartment: Apartment;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Drawer
        open={open}
        onOpenChange={(open) => !open && router.back()}
        direction="right"
        activeSnapPoint={0.6}
      >
        <DrawerContent className="data-[vaul-drawer-direction=right]:md:max-w-3xl data-[vaul-drawer-direction=right]:sm:max-w-2xl">
          <div className="py-1 overflow-y-auto">
            <DrawerHeader>
              <DrawerTitle>Update Apartment</DrawerTitle>
              <DrawerDescription>
                Update a detailed apartment listing to showcase on our website.
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4 pt-2">
              <ApartmentForm defaultValues={apartment} setOpen={setOpen} />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
