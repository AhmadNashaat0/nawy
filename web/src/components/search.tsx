"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useQueryState } from "nuqs";

export default function Search(props: { className?: string }) {
  const [search, setSearch] = useQueryState("search", {
    defaultValue: "",
    shallow: false,
    throttleMs: 500,
  });
  return (
    <div className={cn("*:not-first:mt-2", props.className)}>
      <div className="relative">
        <Input
          className="peer ps-9"
          placeholder="Search..."
          type="search"
          value={search ?? ""}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>
      </div>
    </div>
  );
}
