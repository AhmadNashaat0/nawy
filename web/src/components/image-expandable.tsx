"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Expandable({ list }: { list: string[] }) {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className={cn("flex h-[60vh] w-full gap-2")}>
      {list.map((item: any, index: any) => (
        <div
          key={index}
          onMouseEnter={() => {
            setActiveItem(index);
          }}
          className={cn(
            "relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
            index === activeItem && "flex-grow"
          )}
        >
          <img
            src={item}
            alt={item}
            className={cn("h-full w-full brightness-90 object-cover", {
              "blur-[2px]": index !== activeItem,
            })}
          />
        </div>
      ))}
    </div>
  );
}
