"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { MoveRight } from "lucide-react";
import icon from "@/app/assets/marketting/icon.svg";
import Nav from "@/app/(components)/Nav";

export default function StickyHeader() {
  const sentinel = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShown(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* sits flush under the masthead; once it leaves the viewport the
          condensed bar drops in. -mb-px keeps it layout-neutral. */}
      <div ref={sentinel} aria-hidden className="-mb-px h-px w-full" />

      <div
        className={clsx(
          "fixed inset-x-0 top-0 z-40 hidden border-b border-line bg-paper/80 backdrop-blur-md transition-[transform,opacity,visibility] duration-300 ease-mech lg:block",
          shown
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0"
        )}
      >
        <div className="shell">
          <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-10">
            <div className="flex justify-start">
              <Link
                href="/"
                aria-label="Xamidov & Associates — bosh sahifa"
                className="flex items-center"
              >
                <Image
                  src={icon}
                  alt="Xamidov & Associates"
                  width={220}
                  height={400}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <nav aria-label="Qisqa menyu">
              <Nav heightClass="h-20" />
            </nav>

            <div className="flex justify-end">
              <Link href="/contacts" className="base_btn">
                Bog&apos;lanish
                <MoveRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
