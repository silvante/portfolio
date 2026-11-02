import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="blueprint relative overflow-hidden border-b border-line">
      {/* red registration marks — the logo motif, scaled up */}
      <span
        aria-hidden
        className="base_bg absolute top-0 left-0 h-2 w-16 md:w-24"
      />
      <span
        aria-hidden
        className="base_bg absolute right-0 bottom-0 h-2 w-16 md:w-24"
      />

      <div className="shell">
        <div className="stagger flex min-h-[68vh] flex-col items-center justify-center gap-6 py-16 text-center sm:gap-7 lg:min-h-[76vh] lg:py-20">
          <p className="eyebrow">
            <span className="base_bg animate-blink block size-1.5" />
            Mardonbek Xamidov
          </p>

          <h1 className="max-w-4xl text-display">
            Biznesingizni keyingi darajaga olib chiqamiz
            <span className="dot">.</span>
          </h1>

          <p className="lead max-w-lg">
            Biznes uchun zamonaviy veb-saytlar, ilovalar va foydali raqamli
            yechimlar.
          </p>

          <div className="flex w-full flex-col items-stretch justify-center gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center">
            <Link href="/contacts" className="base_btn">
              Bog&apos;lanish
              <MoveRight className="size-4" />
            </Link>

            <Link href="/info" className="ghost_btn">
              Batafsil
            </Link>
          </div>

          <div className="flex items-center gap-3 pt-6 font-mono text-[0.6875rem] tracking-[0.18em] text-ink-3 uppercase">
            <span className="block h-px w-10 bg-ink-3" />
            Veb · Ilova · Dizayn
            <span className="block h-px w-10 bg-ink-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
