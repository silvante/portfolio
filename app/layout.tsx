import type { Metadata } from "next";
import { Geist, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import StickyHeader from "./(components)/StickyHeader";
import ScrollToTop from "./(components)/ScrollToTop";
import Footer from "./(components)/Footer";
import { Toaster } from "react-hot-toast";
import JsonLd from "./(components)/JsonLd";
import {
  COMPANY,
  FOUNDER,
  NAME_KEYWORDS,
  SERVICE_KEYWORDS,
  SITE_URL,
  siteGraph,
} from "./lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} — veb-sayt va ilova yaratish O‘zbekiston bo‘ylab`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  applicationName: COMPANY.name,
  authors: [{ name: FOUNDER.name, url: `${SITE_URL}/founder` }],
  creator: FOUNDER.name,
  publisher: COMPANY.name,
  keywords: [...SERVICE_KEYWORDS, ...NAME_KEYWORDS],
  category: "technology",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${COMPANY.name} — veb-sayt va ilova yaratish O‘zbekiston bo‘ylab`,
    description: COMPANY.description,
    url: SITE_URL,
    siteName: COMPANY.name,
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — veb-sayt va ilova yaratish O‘zbekiston bo‘ylab`,
    description: COMPANY.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // let Google (and AI Overviews / Gemini) show full snippets & big previews
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icons/icon.svg",
  },
  formatDetection: { telephone: true, email: true },
  // Paste the code from Google Search Console here if you verify with the
  // "HTML tag" method:  verification: { google: "xxxxxxxx" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
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

        <JsonLd data={siteGraph()} />

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
