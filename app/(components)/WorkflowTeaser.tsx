"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const steps = [
  { title: "Tanishuv", hook: "Maqsadingizni tinglaymiz" },
  { title: "Reja va narx", hook: "Aniq narx, aniq muddat" },
  { title: "Shartnoma", hook: "Rasmiy kelishuv" },
  { title: "Ishlab chiqish", hook: "Jarayondan xabardor bo‘lasiz" },
  { title: "Test", hook: "Sizning fikringiz bilan" },
  { title: "Topshirish", hook: "Ishga tushirish va yordam" },
];

const STEP_MS = 260;

export default function WorkflowTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPlay(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="shell page">
      <div className="space-y-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-5">
            <p className="eyebrow">
              <span className="base_bg block size-1.5" />
              Ish jarayoni
            </p>
            <h2 className="text-headline max-w-3xl">
              Tanishuvdan natijagacha — atigi 6 qadam
              <span className="dot">.</span>
            </h2>
            <p className="lead max-w-xl">
              Sodda, shaffof va oldindan belgilangan jarayon. Har bosqichda
              nima bo‘layotganini bilasiz.
            </p>
          </div>

          <Link href="/info#workflow" className="base_btn self-start lg:self-auto">
            Batafsil ko‘rish
            <MoveRight className="size-4" />
          </Link>
        </div>

        <div ref={ref} className="relative">
          {/* connector — draws left to right on desktop */}
          <span
            aria-hidden
            className="absolute top-7 right-[8.333%] left-[8.333%] hidden h-0.5 bg-line lg:block"
          />
          <span
            aria-hidden
            className="base_bg absolute top-7 right-[8.333%] left-[8.333%] hidden h-0.5 origin-left transition-transform ease-linear lg:block"
            style={{
              transform: `scaleX(${play ? 1 : 0})`,
              transitionDuration: `${STEP_MS * (steps.length - 1)}ms`,
            }}
          />

          <ol className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
            {steps.map((s, i) => {
              const last = i === steps.length - 1;
              return (
                <li
                  key={s.title}
                  className={`flex flex-col gap-4 transition-all duration-700 ease-mech lg:items-center lg:text-center ${
                    play ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: play ? `${i * STEP_MS}ms` : "0ms" }}
                >
                  <span
                    className={`relative z-10 flex size-14 items-center justify-center border-2 font-mono text-sm font-semibold transition-colors duration-500 ${
                      last
                        ? "border-brand bg-brand text-paper shadow-hard-sm"
                        : "border-ink bg-ink text-paper shadow-brand-sm"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="space-y-1.5">
                    <h3 className="text-[1.0625rem] leading-tight font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-snug text-ink-3">{s.hook}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
