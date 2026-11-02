"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Puts every route change back at the top of the page.
 *
 * The App Router does this on its own, but a global `scroll-behavior: smooth`
 * turns the reset into an animation that can be interrupted mid-flight, so the
 * new page often lands part-way down. Smooth scrolling is gone from the base
 * styles (nothing on the site links to an anchor) and the reset is explicit
 * and instant here.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
