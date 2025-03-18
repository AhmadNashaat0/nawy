import Image from "next/image";

export function NavBar() {
  return (
    <nav className="w-full sticky top-0 shadow-xs">
      <div className="w-full max-w-6xl mx-auto py-2 md:py-3 px-3 md:px-5 flex justify-between items-center">
        <>
          <Image
            src="/nawy.svg"
            alt="nawy"
            width={100}
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
        </>
        <div>test</div>
      </div>
    </nav>
  );
}
