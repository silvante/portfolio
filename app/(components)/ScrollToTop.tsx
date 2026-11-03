"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Puts every route change back at the top of the page.
 *
 * The App Router does this on its own, but a global `scroll-behavior: smooth`
 * turns the reset into an animation that can be interrupted mid-flight, so the
 * new page often lands part-way down. Smooth scrolling is gone from the base
 * styles and the reset is explicit and instant here. If the URL carries a
 * #hash, the matching element is scrolled into view instead.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Links like /info#workflow should land on their anchor, not the top.
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;

    if (target) {
      target.scrollIntoView({ behavior: "instant", block: "start" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}
