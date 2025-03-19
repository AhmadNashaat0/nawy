"use client";

import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { useQueryState, parseAsInteger } from "nuqs";

type PaginationProps = {
  totalPages: number;
};

export default function PaginationBar({ totalPages }: PaginationProps) {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ shallow: false })
  );
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="text-muted-foreground grow text-sm" aria-live="polite">
        Page <span className="text-foreground">{page}</span> of{" "}
        <span className="text-foreground">{totalPages}</span>
      </p>
      <Pagination className="w-auto">
        <PaginationContent className="gap-3">
          <PaginationItem>
            <Button
              variant="outline"
              className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
              aria-disabled={page === 1 ? true : undefined}
              onClick={(e) => setPage(page - 1 < 1 ? 1 : page - 1)}
            >
              Previous
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button
              variant="outline"
              className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
              aria-disabled={page === totalPages ? true : undefined}
              onClick={(e) =>
                setPage(page + 1 > totalPages ? totalPages : page + 1)
              }
            >
              Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
