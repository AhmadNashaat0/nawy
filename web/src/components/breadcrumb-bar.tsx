import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";

export default function BreadcrumbBar({ page }: { page: string }) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <HomeIcon size={18} aria-hidden="true" />
            <span className="sr-only">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-sm">{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
