import Link from "next/link";
import { MoveRight } from "lucide-react";

type Props = {
  title?: string;
  text?: string;
};

export default function CallToAction({
  title = "Loyihangizni boshlaymizmi",
  text = "G'oyangizni aytib bering — qolganini biz hal qilamiz.",
}: Props) {
  return (
    <section className="relative overflow-hidden border-2 border-ink bg-ink px-6 py-12 text-paper sm:px-8 sm:py-14 lg:px-14 lg:py-20">
      <span
        aria-hidden
        className="base_bg absolute top-0 right-0 h-2 w-24 md:w-40"
      />

      <div className="relative space-y-7">
        <p className="eyebrow text-paper/60!">
          <span className="base_bg block size-1.5" />
          Keling, kelishamiz
        </p>

        <h2 className="max-w-2xl text-headline">
          {title}
          <span className="dot">?</span>
        </h2>

        <p className="max-w-md text-base leading-relaxed text-paper/70">
          {text}
        </p>

        <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center">
          <Link
            href="/contacts"
            className="inline-flex items-center justify-center gap-2 border-2 border-paper bg-paper px-6 py-3.5 text-[0.8125rem] font-semibold tracking-[0.08em] text-ink uppercase transition-all duration-200 ease-mech hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-brand hover:bg-brand hover:text-paper hover:shadow-[6px_6px_0_0_var(--color-paper)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Bog&apos;lanish
            <MoveRight className="size-4" />
          </Link>

          <a
            href="tel:+998948209482"
            className="inline-flex items-center justify-center gap-2 border-2 border-paper/30 px-6 py-3.5 font-mono text-[0.8125rem] tracking-[0.08em] text-paper/80 uppercase transition-colors duration-200 ease-mech hover:border-paper hover:text-paper"
          >
            +998 94 820-94-82
          </a>
        </div>
      </div>
    </section>
  );
}
