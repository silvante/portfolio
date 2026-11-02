import type { Metadata } from "next";
import { Geist, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import StickyHeader from "./(components)/StickyHeader";
import ScrollToTop from "./(components)/ScrollToTop";
import Footer from "./(components)/Footer";
import { Toaster } from "react-hot-toast";

/* Body text — a grotesque with flat terminals and squared-off curves, so the
   running text sits in the same drafting-table voice as the logo. */
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

/* Headlines — geometric and a little stiff, like the logo */
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

/* Labels, counters and eyebrows — the technical voice */
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mardonbek Xamidov | Portfolio",
  description:
    "Welcome to the official portfolio of Mardonbek Xamidov — a Full-Stack Software Engineer specializing in high-performance web applications using Ruby on Rails, Next.js, and NestJS. Discover my work, skills, and digital journey.",
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
    "Mardonbek Khamidov",
    "mardonbek khamidov",
    "mardonbek khamidov",
    "Mardonbek Xamidov",
    "Mardonbek Xamidov",
    "mardonbek xamidov",
    "mardonbek xamidov",
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
    canonical: "https://xamidov.uz",
  },
  openGraph: {
    title: "Mardonbek Xamidov | Portfolio",
    description:
      "Full-stack developer with mastery in frameworks like Next.js, Rails, and NestJS. Explore technical proficiencies here.",
    url: "https://xamidov.com",
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
    title: "Mardonbek Xamidov | Portfolio",
    description:
      "Welcome to the official portfolio of Mardonbek Xamidov — a Full-Stack Software Engineer specializing in high-performance web applications using Ruby on Rails, Next.js, and NestJS. Discover my work, skills, and digital journey.",
    images: [
      "https://github.com/silvante/portfolio/blob/main/app/assets/og_image.png?raw=true",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icons/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${grotesk.variable} ${mono.variable} antialiased`}
      >
        <Toaster
          position="top-right"
          reverseOrder={true}
          toastOptions={{
            style: {
              borderRadius: 0,
              border: "2px solid #0a0a0b",
              background: "#ffffff",
              color: "#0a0a0b",
              boxShadow: "4px 4px 0 0 #e62d42",
              fontSize: "0.875rem",
              maxWidth: "22rem",
            },
          }}
        />

        <ScrollToTop />

        <div className="flex min-h-screen flex-col">
          <Header />
          <StickyHeader />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
