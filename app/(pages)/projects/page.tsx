import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import PageHeading from "@/app/(reusable)/PageHeading";
import CallToAction from "@/app/(components)/CallToAction";
import { getProjects } from "@/app/lib/projects";

export const metadata: Metadata = {
  title: "Mardonbek Xamidov | Portfolio | Projects",
  description:
    "A curated showcase of real-world applications I’ve built, ranging from startup MVPs to scalable platforms. Each project demonstrates my expertise in frontend and backend development, with clean code and user-centered design.",
  keywords: [
    "Khamidov",
    "khamidov",
    "hamidov",
    "Hamidov",
    "Xamidov",
    "xamidov",
    "Mardonbek",
    "mardonbek",
    "Mardonbek Khamidov",
    "Mardonbek Khamidov projects",
    "mardonbek khamidov",
    "mardonbek khamidov projects",
    "Mardonbek Xamidov",
    "Mardonbek Xamidov projects",
    "mardonbek xamidov",
    "mardonbek xamidov projects",
    "Mardonbek Hamidov",
    "mardonbek hamidov",
    "sayt",
    "portfolio",
    "Portfolio",
    "khamidov-porfoio",
    "Khamidov-porfoio",
    "Xamidov-porfoio",
    "Mardonbek uz",
    "Mardonbek Uz",
    "mardonbek uz",
    "Xamidov uz",
    "Khamidov uz",
    "xamidov uz",
    "khamidov uz",
  ],
  alternates: {
    canonical: "https://xamidov.uz/projects",
  },
  openGraph: {
    title: "Mardonbek Xamidov | Portfolio | Projects",
    description:
      "A curated showcase of real-world applications I’ve built, ranging from startup MVPs to scalable platforms. Each project demonstrates my expertise in frontend and backend development, with clean code and user-centered design.",
    url: "https://xamidov.com/projects",
    siteName: "Mardonbek Xamidov Portfolio",
    images: [
      {
        url: "https://github.com/silvante/portfolio/blob/main/app/assets/og_image.png?raw=true",
        width: 280,
        height: 280,
        type: "image/png",
        alt: "Mardonbek Xamidov Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mardonbek Xamidov | Portfolio | Projects",
    description:
      "Explore the skill set of Mardonbek Xamidov – Full Stack Engineer with experience in web frameworks and scalable systems.",
    images: ["https://github.com/silvante/portfolio/blob/main/app/assets/og_image.png?raw=true"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Projects() {
  const projects = getProjects();

  return (
    <div className="shell page space-y-[clamp(3rem,6vw,5rem)]">
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
