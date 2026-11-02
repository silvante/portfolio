import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/marketting/logo.svg";
import icon from "@/app/assets/marketting/icon.svg";
import Nav from "@/app/(components)/Nav";
import MobileSidebar from "@/app/(components)/MobileSidebar";

export default function Header() {
  return (
    <header className="w-full border-b border-line bg-paper/80 backdrop-blur-md">
      {/* Masthead — brand left + menu right on handhelds, centred lockup on desktop */}
      <div className="shell">
        <div className="flex h-20 items-center justify-between gap-4 sm:h-24 lg:h-32 lg:justify-center">
          <Link
            href="/"
            aria-label="Xamidov & Associates — bosh sahifa"
            className="flex shrink-0 items-center"
          >
            {/* phone: compact mark. 220x400 artwork, so height drives the size */}
            <Image
              src={icon}
              alt="Xamidov & Associates"
              width={220}
              height={400}
              priority
              className="h-10 w-auto sm:hidden"
            />

            {/* tablet and up: full wordmark */}
            <Image
              src={logo}
              alt="Xamidov & Associates"
              width={240}
              priority
              className="hidden h-auto w-44 sm:block md:w-48 lg:w-60"
            />
          </Link>

          <div className="lg:hidden">
            <MobileSidebar />
          </div>
        </div>
      </div>

      {/* Navigation rail — separated by tone, not by a rule */}
      <nav
        aria-label="Asosiy menyu"
        className="hidden border-t border-line bg-paper-2/70 lg:block"
      >
        <div className="shell">
          <Nav />
        </div>
      </nav>
    </header>
  );
}
