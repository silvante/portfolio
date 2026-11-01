"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={clsx(
        "flex items-center transition-alltransition-all border-y-2 border-transparent hover:border-b-gray-900 shrink-0 gap-1 opacity-50",
        isActive && "opacity-100"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
