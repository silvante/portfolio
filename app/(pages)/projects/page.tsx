import At from "@/app/(reusable)/At";
import { Metadata } from "next";
import Link from "next/link";
import PageHeading from "@/app/(reusable)/PageHeading";

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
    <div className="py-16 space-y-5">
      <PageHeading text="Ushbu sahifa tamirlanmoqda..."/>
    </div>
  );
}
