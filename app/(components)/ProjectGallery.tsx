"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Img = { src: string; alt: string };

export default function ProjectGallery({ images }: { images: Img[] }) {
  const [active, setActive] = useState(0);
  const count = images.length;

  if (count === 0) {
    return (
      <div className="panel blueprint flex aspect-[16/10] items-center justify-center">
        <p className="eyebrow">Rasmlar tez kunda</p>
      </div>
    );
  }

  const go = (step: number) => setActive((i) => (i + step + count) % count);
  const current = images[active];

  return (
    <div className="space-y-3">
      <div
        className="relative aspect-[16/10] overflow-hidden border border-line bg-paper-2"
        tabIndex={count > 1 ? 0 : undefined}
        role="region"
        aria-roledescription="galereya"
        aria-label={current.alt}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority={active === 0}
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="animate-rise object-contain"
        />

        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Oldingi rasm"
              className="absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center border-2 border-ink bg-paper transition-colors duration-150 ease-mech hover:bg-ink hover:text-paper"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Keyingi rasm"
              className="absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center border-2 border-ink bg-paper transition-colors duration-150 ease-mech hover:bg-ink hover:text-paper"
            >
              <ChevronRight className="size-5" />
            </button>

            <span className="absolute bottom-3 left-3 bg-ink px-2.5 py-1 font-mono text-xs tracking-[0.12em] text-paper">
              {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
          </>
        ) : null}
      </div>

      {count > 1 ? (
        <ul className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <li key={img.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${i + 1}-rasmni ko'rsatish`}
                aria-current={i === active}
                className={`relative block aspect-[16/10] w-28 overflow-hidden border-2 bg-paper-2 transition-all duration-150 ease-mech sm:w-36 ${
                  i === active
                    ? "border-brand"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
