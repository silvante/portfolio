import At from "@/app/(reusable)/At";
import SkillCards from "@/app/(sections)/SkillCards";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mardonbek Khamidov | Portfolio | Skills",
  description:
    "Explore my technical skill set — from frameworks like Next.js and Ruby on Rails to core technologies like TypeScript, PostgreSQL, and Redis. I constantly evolve and master tools that make scalable software possible.",
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
    "Mardonbek Khamidov skills",
    "mardonbek khamidov",
    "mardonbek khamidov skills",
    "Mardonbek Xamidov",
    "Mardonbek Xamidov skills",
    "mardonbek xamidov",
    "mardonbek xamidov skills",
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
    canonical: "https://xamidov.uz/skills",
  },
  openGraph: {
    title: "Mardonbek Khamidov | Portfolio | Skills",
    description:
      "Explore my technical skill set — from frameworks like Next.js and Ruby on Rails to core technologies like TypeScript, PostgreSQL, and Redis. I constantly evolve and master tools that make scalable software possible.",
    url: "https://xamidov.com/skills",
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

export default function Skills() {
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-2xl font-semibold">Skills</h1>
      <p className="lg:w-2/3">
        In the cards below, my main skills that I mastered in my carrier of
        Software engineer. Many of them are fully functional programming
        languages, some of them are just libraries, and some of them are
        full-stack, front-end and back-end only frameworks.
      </p>
      <At text="Skill cards" />
      <SkillCards />
      <p>next page</p>
      <Link
        href={"/projects"}
        className="px-4 py-2 bg-violet-600 rounded-xl inline-block"
      >
        Projects →
      </Link>
    </div>
  );
}
