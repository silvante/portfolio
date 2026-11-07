import { COMPANY, SITE_URL, breadcrumbs, ids, pageMetadata } from "@/app/lib/site";
import JsonLd from "@/app/(components)/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import PageHeading from "@/app/(reusable)/PageHeading";
import CallToAction from "@/app/(components)/CallToAction";
import { getProjects } from "@/app/lib/projects";

export const metadata = pageMetadata({
  title: "Loyihalar — bajarilgan veb-saytlar va ilovalar",
  description:
    "Xamidov & Associates tomonidan yaratilgan veb-saytlar va ilovalar: vazifa, yechim, texnologiyalar va skrinshotlar. Keyingi loyiha sizniki bo‘lsinmi?",
  path: "/projects",
});

export default function Projects() {
  const projects = getProjects();

  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/projects`,
      url: `${SITE_URL}/projects`,
      name: `Loyihalar — ${COMPANY.name}`,
      inLanguage: "uz",
      isPartOf: { "@id": ids.website },
      about: { "@id": ids.org },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/projects/${p.slug}`,
          name: p.title,
        })),
      },
    },
    breadcrumbs([{ name: "Loyihalar", path: "/projects" }]),
  ];

  return (
    <div className="shell page space-y-[clamp(3rem,6vw,5rem)]">
      <JsonLd data={graph} />
      <PageHeading eyebrow="Loyihalar" text="Bajarilgan ishlar" />

      {projects.length === 0 ? (
        <section className="panel p-6 sm:p-8 lg:p-14">
          <div className="max-w-xl space-y-6">
            <p className="eyebrow">
              <span className="base_bg animate-blink block size-1.5" />
              Ishlanmoqda
            </p>
            <h2 className="text-headline">
              Loyihalar tez kunda<span className="dot">.</span>
            </h2>
          </div>
        </section>
      ) : (
        <ul className="space-y-[clamp(3rem,6vw,5rem)]">
          {projects.map((p, i) => {
            const cover = p.images[0];
            const num = String(i + 1).padStart(2, "0");
            return (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-12"
                >
                  {/* text */}
                  <div className="flex flex-col gap-5 lg:col-span-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-5xl leading-none font-bold tracking-tighter text-ink-3/40">
                        {num}
                      </span>
                      <p className="eyebrow">
                        <span className="base_bg block size-1.5" />
                        {p.category}
                      </p>
                    </div>

                    <h2 className="text-headline">
                      {p.title}
                      <span className="dot">.</span>
                    </h2>

                    <p className="lead">{p.summary}</p>

                    <span className="inline-flex items-center gap-2 self-start border-b-2 border-brand pb-1 text-[0.8125rem] font-semibold tracking-[0.08em] uppercase transition-colors duration-150 group-hover:text-brand">
                      Batafsil
                      <MoveRight className="size-4" />
                    </span>
                  </div>

                  {/* cover */}
                  <div className="relative aspect-[16/9] overflow-hidden border border-line bg-paper-2 lg:order-first lg:col-span-7">
                    {cover ? (
                      <Image
                        src={cover.src}
                        alt={cover.alt}
                        fill
                        priority={i === 0}
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="blueprint absolute inset-0" />
                    )}
                    {p.images.length > 1 ? (
                      <span className="absolute top-0 left-0 bg-ink px-3 py-1.5 font-mono text-xs tracking-[0.12em] text-paper">
                        {p.images.length} rasm
                      </span>
                    ) : null}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      <CallToAction
        title="Keyingi loyiha sizniki bo'lsinmi"
        text="G'oyangizni aytib bering — qolganini biz hal qilamiz."
      />
    </div>
  );
}
