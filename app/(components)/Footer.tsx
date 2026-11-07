import Link from "next/link";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import icon from "@/app/assets/marketting/icon.svg";
import { contacts, navLinks } from "@/app/data";
import Marquee from "./Marquee";

const marqueeItems = [
  "Xamidov & Associates",
  "Raqamli yechimlar",
  "Veb & ilova",
  "Butun O‘zbekiston bo‘ylab",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      {/* kinetic strip */}
      <div className="bg-ink py-4 md:py-5">
        <Marquee
          speed={26}
          hoverSpeed={70}
          listClassName="gap-8 md:gap-12"
        >
          {marqueeItems.map((item) => (
            <span
              key={item}
              className="flex shrink-0 items-center gap-8 font-display text-xl leading-none font-bold tracking-[-0.02em] text-paper uppercase md:gap-12 md:text-3xl"
            >
              {item}
              <span className="base_bg block size-2.5 md:size-3" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="shell">
        <div className="grid gap-12 py-14 md:grid-cols-12 md:gap-8">
          {/* identity */}
          <div className="space-y-5 md:col-span-5">
            <Link
              href="/"
              aria-label="Xamidov & Associates — bosh sahifa"
              className="inline-flex transition-transform duration-200 ease-mech hover:-translate-y-0.5"
            >
              <Image
                src={icon}
                alt="Xamidov & Associates"
                width={28}
                className="h-11 w-auto"
              />
            </Link>

            <p className="max-w-xs text-base leading-relaxed text-ink-2">
              Biznes uchun zamonaviy veb-saytlar, ilovalar va foydali raqamli
              yechimlar.
            </p>
          </div>

          {/* sitemap */}
          <nav className="md:col-span-4">
            <p className="eyebrow mb-5">Sahifalar</p>

            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="underline-link text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Aloqa</p>

            <ul className="space-y-4">
              {contacts.map((c) => (
                <li key={c.id}>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-link text-base"
                  >
                    {c.name}
                    <MoveUpRight className="size-4" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:khamidov.ko@gmail.com"
                  className="underline-link text-base"
                >
                  E-mail
                  <MoveUpRight className="size-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* baseline */}
        <div className="flex flex-col gap-2 border-t border-line py-6 font-mono text-xs tracking-[0.12em] text-ink-3 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Xamidov.uz</p>
          <p>Barcha huquqlar himoyalangan</p>
        </div>
      </div>
    </footer>
  );
}
