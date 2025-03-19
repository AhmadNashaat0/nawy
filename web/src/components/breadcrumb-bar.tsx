import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function BreadcrumbBar({
  page,
  parent,
  parentPath,
}: {
  page: string;
  parent?: string;
  parentPath?: string;
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <HomeIcon size={18} aria-hidden="true" />
            <span className="sr-only">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {parent && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm">
                {!!parentPath && <Link href={parentPath}>{parent}</Link>}
                {!parentPath && parent}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-sm">{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
