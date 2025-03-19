"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { amenitiesList } from "../../utils/amenities-list";

export default function AmenitiesField({ field }: { field: any }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {amenitiesList.map((item) => (
        <div
          key={item.value}
          className="border-input has-data-[state=checked]:border-ring relative flex cursor-pointer flex-col gap-4 rounded-md border p-4 shadow-xs outline-none"
        >
          <div className="flex justify-between gap-2">
            <Checkbox
              id={item.value}
              value={item.value}
              onCheckedChange={(e) => {
                if (e) {
                  field.onChange([...field.value, item.label]);
                } else {
                  const newValue = field.value.filter(
                    (value: string) => value != item.label
                  );
                  field.onChange(newValue);
                }
              }}
              checked={field.value.includes(item.label)}
              className="order-1 after:absolute after:inset-0"
            />
            <item.Icon className="opacity-60" size={16} aria-hidden="true" />
          </div>
          <Label htmlFor={item.value}>{item.label}</Label>
        </div>
      ))}
    </div>
  );
}
