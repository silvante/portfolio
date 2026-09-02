import { my_github_link } from "@/app/data";
import { Metadata } from "next";
import Image from "next/image";
import BlueSky from "@/app/assets/bluesky.svg";
import Pinterest from "@/app/assets/Pinterest.svg";
import Github from "@/app/assets/Github.svg";
import Youtube from "@/app/assets/Youtube.svg";
import Telegram from "@/app/assets/Telegram.svg";
import PageHeading from "@/app/(reusable)/PageHeading";

export const metadata: Metadata = {
  title: "Mardonbek Khamidov | Portfolio | Contacts",
  description:
    "Let’s connect! Whether you’re looking to hire, collaborate, or just say hello, you can reach me via email, GitHub, LinkedIn, or Telegram. I'm always open to new opportunities and meaningful conversations.",
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
    "Mardonbek Khamidov contacts",
    "mardonbek khamidov",
    "mardonbek khamidov contacts",
    "Mardonbek Xamidov",
    "Mardonbek Xamidov contacts",
    "mardonbek xamidov",
    "mardonbek xamidov contacts",
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
    canonical: "https://xamidov.uz/contacts",
  },
  openGraph: {
    title: "Mardonbek Khamidov | Portfolio | Contacts",
    description:
      "Let’s connect! Whether you’re looking to hire, collaborate, or just say hello, you can reach me via email, GitHub, LinkedIn, or Telegram. I'm always open to new opportunities and meaningful conversations.",
    url: "https://xamidov.com/contacts",
    siteName: "Mardonbek Khamidov Portfolio",
    images: [
      {
        url: "https://github.com/silvante/portfolio/blob/main/app/assets/og_image.png?raw=true",
        width: 280,
        height: 280,
        type: "image/png",
        alt: "Mardonbek Khamidov Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mardonbek Khamidov | Portfolio | Skills",
    description:
      "Explore the skill set of Mardonbek Khamidov – Full Stack Engineer with experience in web frameworks and scalable systems.",
    images: ["https://yourdomain.com/og-images/skills-page.png"],
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

export default function Contacts() {
  return (
    <main className="w-full py-16">
      <div className="space-y-12">
        <PageHeading text="Bog‘lanish" />

        <section className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-60">
            Aloqa
          </p>

          <h2 className="text-8xl font-bold">
            +998 (94) 820-94-82
          </h2>
        </section>

        <section className="max-w-4xl space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-60">
            E-mail
          </p>

          <a
              href="mailto:khamidov.ko@gmail.com"
          >
            <h2 className="hover:opacity-100 opacity-70 text-4xl font-bold break-all">
              khamidov.ko@gmail.com
            </h2>
          </a>
        </section>

        <section className="space-y-5">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-60">
              Ijtimoiy tarmoqlar
            </p>
          </div>

          <ul className="flex flex-wrap gap-3">
            <li>
              <a
                href="https://t.me/shrinerb"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost_btn"
              >
                Telegram
              </a>
            </li>

            <li>
              <a
                href={my_github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost_btn"
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}