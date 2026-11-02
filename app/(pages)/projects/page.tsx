import { Metadata } from "next";
import PageHeading from "@/app/(reusable)/PageHeading";
import CallToAction from "@/app/(components)/CallToAction";

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
  return (
    <div className="shell page space-y-[clamp(3rem,6vw,5rem)]">
      <PageHeading eyebrow="Loyihalar" text="Tez kunda" />

      <section className="panel p-6 sm:p-8 lg:p-14">
        <div className="max-w-xl space-y-6">
          <p className="eyebrow">
            <span className="base_bg animate-blink block size-1.5" />
            Ishlanmoqda
          </p>

          <h2 className="text-headline">
            Ushbu sahifa tayyorlanmoqda<span className="dot">.</span>
          </h2>

          <p className="lead">
            Yaqin kunlarda bu yerda yakunlangan loyihalar, ularning vazifalari
            va natijalari bilan tanishishingiz mumkin bo&apos;ladi.
          </p>

          {/* progress rail — purely decorative */}
          <div
            aria-hidden
            className="flex gap-1.5 pt-2"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className={
                  i < 7
                    ? "base_bg h-2 flex-1"
                    : "h-2 flex-1 bg-paper-3"
                }
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Loyihani birinchi bo'lib ko'rmoqchimisiz"
        text="Yangiliklardan xabardor bo'lish uchun bizga yozib qo'ying."
      />
    </div>
  );
}
