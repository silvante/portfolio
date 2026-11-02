"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
  /** Row height. The type size never changes — only the hit area — so the
   *  red underline can sit flush with the bottom of whatever bar holds it. */
  heightClass?: string;
};

export default function NavLink({ href, children, heightClass = "h-14" }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "group relative flex shrink-0 items-center px-6 text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ease-mech",
        heightClass,
        isActive ? "text-ink" : "text-ink-3 hover:text-ink"
      )}
    >
      {children}

      {/* mechanical underline: snaps in from the left */}
      <span
        aria-hidden
        className={clsx(
          "base_bg absolute inset-x-0 bottom-0 h-0.5 origin-left transition-transform duration-300 ease-mech",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        )}
      />
    </Link>
  );
}
