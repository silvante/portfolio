"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Seamless, truly infinite marquee.
 *
 * A pure-CSS `translateX(-50%)` loop only looks seamless when the duplicated
 * content is wider than the viewport — otherwise the reset is visible as a
 * gap/jump. This measures one copy of the list, renders enough copies to cover
 * any screen, and drives the track with requestAnimationFrame, wrapping the
 * offset by exactly one copy's width. There is no keyframe restart, so there is
 * nothing to see at the seam.
 *
 * Speed is expressed as the number of seconds one copy takes to pass, so the
 * perceived pace stays the same no matter how much content is inside.
 */
type MarqueeProps = {
  children: ReactNode;
  /** Seconds for one copy of the content to scroll past (lower = faster). */
  speed?: number;
  /** Seconds per copy while hovered; `0` stops the strip. */
  hoverSpeed?: number;
  direction?: "left" | "right";
  /** How many copies of the content to render. 3 covers very wide screens. */
  copies?: number;
  /** Width of the soft edges, as a CSS length. `null` disables the fade. */
  fadeSize?: string | null;
  /** Classes for the outer, clipping element. */
  className?: string;
  /** Classes for one copy of the list — put the item `gap` here. */
  listClassName?: string;
};

/** How fast the strip eases toward its target speed (per second). */
const SPEED_SMOOTHING = 9;

export default function Marquee({
  children,
  speed = 20,
  hoverSpeed = 0,
  direction = "left",
  copies = 3,
  fadeSize = "2rem",
  className,
  listClassName,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const list = listRef.current;
    if (!track || !list) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let contentSize = 0; // width of one copy + the seam gap, in px
    let progress = 0; // position inside the current cycle, in px
    let currentSpeed = 0; // px/second, smoothed toward the target
    let lastFrame: number | null = null;
    let frame = 0;

    /** Keeps the gap between copies identical to the gap inside a copy. */
    const measure = () => {
      const gap = Number.parseFloat(getComputedStyle(list).columnGap);
      const seam = Number.isFinite(gap) ? gap : 0;
      track.style.gap = `${seam}px`;
      return list.offsetWidth + seam;
    };

    const targetSpeed = () => {
      if (contentSize === 0) return 0;
      if (!hoveringRef.current) return contentSize / Math.max(0.001, speed);
      if (hoverSpeed === 0) return 0;
      return contentSize / Math.max(0.001, hoverSpeed);
    };

    const draw = () => {
      // left: 0 → -size. right: -size → 0. Both land back where they started.
      const offset =
        direction === "left" ? -progress : -contentSize + progress;
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
    };

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);

      if (contentSize === 0) return;
      if (lastFrame === null) {
        lastFrame = now;
        return;
      }

      // Clamped so a backgrounded tab or a dropped frame cannot jump the strip.
      const dt = Math.min(0.05, (now - lastFrame) / 1000);
      lastFrame = now;

      const target = targetSpeed();
      currentSpeed += (target - currentSpeed) * (1 - Math.exp(-SPEED_SMOOTHING * dt));
      if (Math.abs(target - currentSpeed) < 0.05) currentSpeed = target;

      progress = (progress + currentSpeed * dt) % contentSize;
      if (progress < 0) progress += contentSize;

      draw();
    };

    // Measure once layout has settled, then run.
    frame = requestAnimationFrame(() => {
      contentSize = measure();
      currentSpeed = targetSpeed();
      draw();
      frame = requestAnimationFrame(tick);
    });

    // Safari and mobile browsers fire a lot of resizes; only react to real ones.
    const observer = new ResizeObserver(() => {
      const next = measure();
      if (next === 0 || next === contentSize) return;
      contentSize = next;
      progress = 0;
      lastFrame = null;
      draw();
    });
    observer.observe(list);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      track.style.transform = "";
    };
  }, [speed, hoverSpeed, direction, copies]);

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={
        fadeSize
          ? {
              maskImage: `linear-gradient(to right, transparent, black ${fadeSize}, black calc(100% - ${fadeSize}), transparent)`,
              WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeSize}, black calc(100% - ${fadeSize}), transparent)`,
            }
          : undefined
      }
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
      }}
    >
      <div ref={trackRef} className="flex w-max flex-nowrap will-change-transform">
        {Array.from({ length: Math.max(1, copies) }, (_, copy) => (
          <div
            key={copy}
            ref={copy === 0 ? listRef : undefined}
            aria-hidden={copy > 0}
            className={`flex shrink-0 flex-nowrap items-center ${listClassName ?? ""}`}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
