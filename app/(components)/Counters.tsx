import { counts } from "@/app/data";

export default function Counters() {
  return (
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {counts.map((c, i) => (
        <div key={c.id} className="group relative space-y-5 pt-7">
          {/* hairline rule with a red tick that runs the full width on hover */}
          <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-line" />
          <span
            aria-hidden
            className="base_bg absolute top-0 left-0 h-0.5 w-10 transition-all duration-500 ease-mech group-hover:w-full"
          />

          <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>

          <p className="font-display text-[clamp(3.5rem,9vw,5.5rem)] leading-none font-bold tracking-tighter text-ink-3 transition-colors duration-300 ease-mech group-hover:text-ink">
            {c.amount}
          </p>

          <div className="space-y-1.5">
            <p className="text-title">{c.name}</p>
            <p className="text-sm text-ink-3">{c.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
