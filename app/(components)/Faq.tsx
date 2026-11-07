import { Plus } from "lucide-react";
import { faq } from "@/app/lib/faq";

/* Native <details>: works without JS and the answers stay in the HTML,
   so crawlers read them even while collapsed. */
export default function Faq() {
  return (
    <section id="faq" className="shell page scroll-mt-24 pt-0!">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-5 lg:col-span-4">
          <p className="eyebrow">
            <span className="base_bg block size-1.5" />
            Savol-javob
          </p>
          <h2 className="text-headline">
            Ko‘p beriladigan savollar<span className="dot">.</span>
          </h2>
        </div>

        <ul className="border-t border-line lg:col-span-8">
          {faq.map((f) => (
            <li key={f.q} className="border-b border-line">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 transition-colors duration-150 ease-mech hover:text-brand [&::-webkit-details-marker]:hidden">
                  <h3 className="text-title">{f.q}</h3>
                  <Plus className="mt-1 size-5 shrink-0 transition-transform duration-200 ease-mech group-open:rotate-45" />
                </summary>
                <p className="max-w-2xl pb-7 text-base leading-relaxed text-ink-2">
                  {f.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
