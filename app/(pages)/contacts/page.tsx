import Contact from "@/app/(sections)/Contact";
import { my_github_link } from "@/app/data";
import { Github, Link, Send, Youtube } from "lucide-react";
import { Metadata } from "next";

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
    <div className="p-5 space-y-5">
      <h1 className="text-2xl font-semibold">Contacts</h1>
      <p>
        As a person who does not like jokes, I remember you, please whire or
        call to me only about something important, non-important messages and
        call will be ignored or even spammed. thank you for understanding and
        those are all of my social contacts, phone number and email, mostly I
        can answer from 9:00 to 22:00, thank you!
      </p>
      <div className="space-y-3">
        <p>email</p>
        <h3 className="text-xl font-semibold">info@xamidov.uz</h3>
      </div>
      <div className="space-y-3">
        <p>phone number</p>
        <h3 className="text-xl font-semibold">+998 (95) 075 00 54</h3>
      </div>
      <div className="space-y-3">
        <p>social account</p>
        <ul className="flex flex-wrap gap-3">
          <li>
            <a
              href="https://t.me/newassembler"
              target="_blanck"
              className="flex items-center gap-3 py-2 px-4 bg-blue-500 rounded-md"
            >
              <Send /> Telegram
            </a>
          </li>
          <li>
            <a
              href={my_github_link}
              target="_blanck"
              className="flex items-center gap-3 py-2 px-4 bg-gray-950 rounded-md"
            >
              <Github /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://xamidov.uz"
              target="_blanck"
              className="flex items-center gap-3 py-2 px-4 bg-violet-600 rounded-md"
            >
              <Link /> Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@valentine_82"
              target="_blanck"
              className="flex items-center gap-3 py-2 px-4 bg-red-600 rounded-md"
            >
              <Youtube /> Youtube
            </a>
          </li>
        </ul>
      </div>
      <Contact />
    </div>
  );
}
