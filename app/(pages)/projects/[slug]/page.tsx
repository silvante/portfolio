import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MoveLeft, MoveRight, MoveUpRight } from "lucide-react";
import PageHeading from "@/app/(reusable)/PageHeading";
import CallToAction from "@/app/(components)/CallToAction";
import ProjectGallery from "@/app/(components)/ProjectGallery";
import { getProject, getProjects } from "@/app/lib/projects";

type Props = { params: Promise<{ slug: string }> };

// every project page is built ahead of time; unknown slugs → 404
export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

const OG_FALLBACK =
  "https://github.com/silvante/portfolio/blob/main/app/assets/og_image.png?raw=true";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};

  const title = `${p.title} | Loyihalar | Mardonbek Xamidov`;
  const url = `https://xamidov.uz/projects/${p.slug}`;
  const image = p.images[0]
    ? `https://xamidov.uz${p.images[0].src}`
    : OG_FALLBACK;

  return {
    title,
    description: p.summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: p.summary,
      url,
      siteName: "Mardonbek Xamidov Portfolio",
      images: [{ url: image, alt: p.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: p.summary,
      images: [image],
    },
  };
}

export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params;
  const all = getProjects();
  const index = all.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const p = all[index];
  const prev = all[index - 1];
  const next = all[index + 1];

  const facts = [
    { label: "Mijoz", value: p.client },
    { label: "Yo'nalish", value: p.category },
    { label: "Muddat", value: p.duration },
  ].filter((f): f is { label: string; value: string } => Boolean(f.value));

  return (
    <div className="shell page space-y-[clamp(3rem,6vw,5rem)]">
      <div className="space-y-8">
        <Link href="/projects" className="underline-link text-sm">
          <MoveLeft className="size-4" />
          Barcha loyihalar
        </Link>

        <PageHeading eyebrow={p.category} text={p.title} />

        <p className="lead max-w-3xl">{p.summary}</p>
      </div>

      <ProjectGallery images={p.images} />

      {/* Facts */}
      <dl
        className="grid-rule"
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, 11rem), 1fr))`,
        }}
      >
        {facts.map((f) => (
          <div key={f.label} className="space-y-2 bg-paper p-5 sm:p-6">
            <dt className="eyebrow">{f.label}</dt>
            <dd className="font-display text-lg font-semibold">{f.value}</dd>
          </div>
        ))}
      </dl>

      {/* About + features */}
      <section className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-5 lg:col-span-7">
          <p className="eyebrow">
            <span className="base_bg block size-1.5" />
            Loyiha haqida
          </p>
          <h2 className="text-headline">
            Vazifa va yechim<span className="dot">.</span>
          </h2>
          <p className="lead">{p.description}</p>

          {p.liveUrl || p.sourceUrl ? (
            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              {p.liveUrl ? (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base_btn"
                >
                  Saytni ko&apos;rish
                  <MoveUpRight className="size-4" />
                </a>
              ) : null}
              {p.sourceUrl ? (
                <a
                  href={p.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost_btn"
                >
                  Kod (GitHub)
                  <MoveUpRight className="size-4" />
                </a>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="space-y-8 lg:col-span-5">
          {p.features.length > 0 ? (
            <div className="panel space-y-5 p-6 sm:p-8">
              <h3 className="text-title">Imkoniyatlar</h3>
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm leading-snug text-ink-2"
                  >
                    <span
                      aria-hidden
                      className="base_bg mt-[0.4rem] block size-1.5 shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <a
            href={p.author.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-line bg-paper p-4 text-ink-2 transition-all duration-150 ease-mech hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-ink hover:text-ink hover:shadow-brand-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.author.image}
              alt={p.author.name}
              width={56}
              height={56}
              className="size-14 border border-line object-cover"
            />
            <span className="flex-1 space-y-1.5">
              <span className="eyebrow block">Muallif</span>
              <span className="block font-display text-lg font-semibold">
                {p.author.name}
              </span>
            </span>
            <MoveUpRight className="size-3.5 shrink-0 opacity-40" />
          </a>

          {p.stack.length > 0 ? (
            <div className="space-y-4">
              <h3 className="eyebrow">Texnologiyalar</h3>
              <ul className="flex flex-wrap gap-2.5">
                {p.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      {/* Prev / next */}
      {prev || next ? (
        <nav className="grid-rule sm:grid-cols-2" aria-label="Boshqa loyihalar">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group space-y-2 bg-paper p-6 transition-colors duration-150 ease-mech hover:bg-paper-2 sm:p-8"
            >
              <span className="eyebrow">
                <MoveLeft className="size-3.5" /> Oldingi
              </span>
              <p className="text-title">{prev.title}</p>
            </Link>
          ) : (
            <span className="hidden bg-paper sm:block" />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group space-y-2 bg-paper p-6 text-right transition-colors duration-150 ease-mech hover:bg-paper-2 sm:p-8"
            >
              <span className="eyebrow">
                Keyingi <MoveRight className="size-3.5" />
              </span>
              <p className="text-title">{next.title}</p>
            </Link>
          ) : null}
        </nav>
      ) : null}

      <CallToAction
        title="Shunga o'xshash loyiha kerakmi"
        text="G'oyangizni aytib bering — qolganini biz hal qilamiz."
      />
    </div>
  );
}
