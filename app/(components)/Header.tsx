import Link from "next/link";
import { Phone, Send } from "lucide-react";
import Image from "next/image";
import logo from "@/app/assets/marketting/logo.svg";
import icon from "@/app/assets/marketting/icon.svg";
import Nav from "@/app/(components)/Nav";
import MobileSidebar from "@/app/(components)/MobileSidebar";

const PHONE_DISPLAY = "+998 94 820-94-82";
const PHONE_HREF = "tel:+998948209482";
const TELEGRAM = "https://t.me/mardonbekxamidov";

function ContactButtons() {
  return (
    <div className="flex items-center gap-2.5">
      <a
        href={PHONE_HREF}
        aria-label={`Qo'ng'iroq qilish ${PHONE_DISPLAY}`}
        className="chip max-lg:size-11 max-lg:justify-center max-lg:p-0"
      >
        <Phone className="size-4 shrink-0" aria-hidden />
        <span className="hidden lg:inline">{PHONE_DISPLAY}</span>
      </a>
      <a
        href={TELEGRAM}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="chip size-11 justify-center p-0 lg:size-auto lg:p-[0.8125rem]"
      >
        <Send className="size-4 shrink-0" aria-hidden />
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <header className="w-full border-b border-line bg-paper/80 backdrop-blur-md">
      {/* Masthead — brand left + menu right on handhelds, centred lockup on desktop */}
      <div className="shell relative">
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

          {/* desktop: pinned top-right of the masthead */}
          <div className="absolute right-[clamp(1.25rem,4vw,2.5rem)] top-4 hidden lg:block">
            <ContactButtons />
          </div>

          {/* mobile: contact buttons sit before the menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ContactButtons />
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
