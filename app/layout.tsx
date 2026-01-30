import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import Nav from "./(components)/Nav";
import Footer from "./(components)/Footer";
import TopMark from "./(components)/TopMark";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"], // add other weights if needed
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mardonbek Khamidov | Portfolio",
  description:
    "Welcome to the official portfolio of Mardonbek Khamidov — a Full-Stack Software Engineer specializing in high-performance web applications using Ruby on Rails, Next.js, and NestJS. Discover my work, skills, and digital journey.",
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
    title: "Mardonbek Khamidov | Portfolio",
    description:
      "Full-stack developer with mastery in frameworks like Next.js, Rails, and NestJS. Explore technical proficiencies here.",
    url: "https://xamidov.com",
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
    title: "Mardonbek Khamidov | Portfolio",
    description:
      "Welcome to the official portfolio of Mardonbek Khamidov — a Full-Stack Software Engineer specializing in high-performance web applications using Ruby on Rails, Next.js, and NestJS. Discover my work, skills, and digital journey.",
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
      <body className={`${montserrat.className} antialiased`}>
        <Toaster position="top-right" reverseOrder={true} />
        <main className="w-full h-screen flex justify-center">
          <div className="w-[90%] lg:w-[1182px] flex flex-col">
            <Header />
            <TopMark />
            <div className="w-full flex-1 main_bg rounded-tr-xl rounded-tl-xl border-t border-x border-gray-700">
              <Nav />
              {children}
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
