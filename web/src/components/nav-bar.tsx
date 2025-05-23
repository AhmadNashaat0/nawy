import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function NavBar() {
  return (
    <nav className="w-full bg-background sticky top-0 shadow-xs z-10">
      <div className="w-full max-w-6xl mx-auto py-2 px-3 md:px-5 flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/nawy.svg"
            alt="nawy"
            width={90}
            height={1}
            className="hidden md:block"
          />
          <Image
            src="/nawy-logo.svg"
            alt="nawy"
            width={25}
            height={1}
            className="block md:hidden"
          />
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
