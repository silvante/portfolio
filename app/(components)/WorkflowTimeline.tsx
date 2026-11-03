"use client";

import { useEffect, useRef, useState } from "react";

type Step = { title: string; text: string };

export default function WorkflowTimeline({ steps }: { steps: Step[] }) {
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  // index of the furthest step the reader has scrolled to (-1 = none yet)
  const [reached, setReached] = useState(-1);

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLLIElement[];

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.i);
            setReached((r) => Math.max(r, i));
          }
        }
      },
      // a step counts as "reached" once it passes the lower 35% of the screen
      { rootMargin: "0px 0px -35% 0px", threshold: 0.1 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="space-y-10">
      {/* 10-second overview: the whole path in one row */}
      <ol
        aria-hidden
        className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-2"
      >
        {steps.map((s, i) => (
          <li key={s.title} className="flex shrink-0 items-center gap-2">
            <span
              className={`flex items-center gap-2 border px-3 py-2 font-mono text-[0.6875rem] tracking-[0.12em] uppercase transition-colors duration-500 ease-mech ${
                i <= reached
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink-3"
              }`}
            >
              <span className={i <= reached ? "base_text" : ""}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.title}
            </span>
            {i < steps.length - 1 && (
              <span
                className={`h-0.5 w-4 transition-colors duration-500 ease-mech ${
                  i < reached ? "base_bg" : "bg-line"
                }`}
              />
            )}
          </li>
        ))}
      </ol>

      {/* Timeline */}
      <ol className="relative">
        {steps.map((s, i) => {
          const done = i <= reached;
          const last = i === steps.length - 1;

          return (
            <li
              key={s.title}
              data-i={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="group relative grid grid-cols-[3rem_1fr] gap-x-5 sm:grid-cols-[4rem_1fr] sm:gap-x-8"
            >
              {/* rail */}
              <div className="relative flex justify-center">
                {/* base line */}
                {!last && (
                  <span
                    aria-hidden
                    className="absolute top-12 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-line"
                  />
                )}
                {/* progress line — draws downward when the next step is reached */}
                {!last && (
                  <span
                    aria-hidden
                    className="base_bg absolute top-12 bottom-0 left-1/2 w-0.5 origin-top -translate-x-1/2 transition-transform duration-700 ease-mech"
                    style={{ transform: `translateX(-50%) scaleY(${i < reached ? 1 : 0})` }}
                  />
                )}

                {/* node */}
                <span
                  className={`relative z-10 flex size-12 items-center justify-center border-2 font-mono text-sm font-semibold transition-all duration-500 ease-mech sm:size-14 ${
                    done
                      ? "border-ink bg-ink text-paper shadow-brand-sm -translate-x-0.5 -translate-y-0.5"
                      : "border-line bg-paper text-ink-3"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* card */}
              <div
                className={`pb-10 transition-all duration-700 ease-mech sm:pb-14 ${
                  done ? "translate-y-0 opacity-100" : "translate-y-4 opacity-30"
                }`}
              >
                <div className="panel space-y-2.5 p-6 transition-transform duration-200 ease-mech group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-hard-sm sm:p-7">
                  <h3 className="text-title">{s.title}</h3>
                  <p className="leading-relaxed text-ink-2">{s.text}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
