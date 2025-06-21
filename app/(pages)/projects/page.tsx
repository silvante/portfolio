import At from "@/app/(reusable)/At";
import Portfolio from "@/app/(sections)/Portfolio";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mardonbek Khamidov | Portfolio | Projects",
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
    title: "Mardonbek Khamidov | Portfolio | Projects",
    description:
      "A curated showcase of real-world applications I’ve built, ranging from startup MVPs to scalable platforms. Each project demonstrates my expertise in frontend and backend development, with clean code and user-centered design.",
    url: "https://xamidov.com/projects",
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

export default function Projects() {
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className="lg:w-2/3">
        Those projects are all created by myself and with minimal help of AI.
        Some of those are only backend parts and some are frontend. Also I have
        Full-stack projects which had built with rails. Finally some projects
        are Figma designs.
      </p>
      <At text="Project cards" />
      <Portfolio />
      <p>next page</p>
      <Link
        href={"/contacts"}
        className="px-4 py-2 bg-violet-600 rounded-xl inline-block"
      >
        Contacts →
      </Link>
    </div>
  );
}
