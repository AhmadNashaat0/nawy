"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageIcon, Upload, X } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useRef } from "react";

export default function ImageUploadForm({ field }: { field: any }) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
      field.onChange([...field.value, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    URL.revokeObjectURL(field.value[index]);
    field.onChange(field.value.filter((_: string, i: number) => i !== index));
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between sm:items-center">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <div>
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="flex gap-2"
            >
              <Upload size={16} />
              Select Images
            </Button>
            <Input
              id="images"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {field.value.length} {field.value.length === 1 ? "image" : "images"}
            {" selected"}
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            field.value.forEach((preview: string) =>
              URL.revokeObjectURL(preview)
            );
            field.onChange([]);
          }}
          disabled={field.value.length === 0}
        >
          Clear All
        </Button>
      </div>
      {field.value.length > 0 && (
        <div className="space-y-2">
          <Label>Selected Images</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {field.value.map((preview: string, index: number) => (
              <div key={index} className="relative group">
                <div className="overflow-hidden rounded-md border border-border aspect-square bg-muted">
                  <Image
                    src={preview || "/placeholder.svg"}
                    alt={`Preview ${index + 1}`}
                    width={100}
                    height={1}
                    className="h-full w-full object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                  onClick={() => removeImage(index)}
                >
                  <X size={12} />
                  <span className="sr-only">Remove image</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      {field.value.length === 0 && (
        <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed rounded-lg border-muted-foreground/25">
          <ImageIcon
            className="h-10 w-10 text-muted-foreground mb-2"
            strokeWidth={1}
          />
          <p className="text-sm text-muted-foreground">
            No images selected yet
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Click "Select Images" to choose files
          </p>
        </div>
      )}
    </div>
  );
}
