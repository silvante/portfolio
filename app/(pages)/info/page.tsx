import { Metadata } from "next";
import Image from "next/image";
import PageHeading from "@/app/(reusable)/PageHeading";
import CallToAction from "@/app/(components)/CallToAction";
import img from "@/app/assets/marketting/background.png";

export const metadata: Metadata = {
  title: "Mardonbek Xamidov | Portfolio | Info",
  description:
    "I'm Mardonbek Xamidov, a passionate Software Engineer from Uzbekistan with a strong background in full-stack development. I build fast, reliable, and secure web applications. Learn more about my experience, values, and the technologies I love.",
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
    "Mardonbek Khamidov info",
    "mardonbek khamidov",
    "mardonbek khamidov info",
    "Mardonbek Xamidov",
    "Mardonbek Xamidov info",
    "mardonbek xamidov",
    "mardonbek xamidov info",
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
    canonical: "https://xamidov.uz/info",
  },
  openGraph: {
    title: "Mardonbek Xamidov | Portfolio | Info",
    description:
      "I'm Mardonbek Xamidov, a passionate Software Engineer from Uzbekistan with a strong background in full-stack development. I build fast, reliable, and secure web applications. Learn more about my experience, values, and the technologies I love.",
    url: "https://xamidov.com/info",
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
    title: "Mardonbek Xamidov | Portfolio | Info",
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

export default function Info() {
  return (
    <div className="shell page space-y-[clamp(3rem,6vw,5rem)]">
      <PageHeading eyebrow="Biz haqimizda" text="Batafsil" />

      {/* Intro */}
      <section className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-6 lg:col-span-7">
          <h2 className="text-headline">
            Xamidov &amp; Associates<span className="dot">.</span>
          </h2>

          <p className="lead">
            Biznes uchun raqamli yechimlar ishlab chiqadigan jamoa. G&apos;oyadan
            ishga tushirishgacha bo&apos;lgan barcha bosqichlarni o&apos;z
            ustimizga olamiz: dizayn, dasturlash, serverga joylash va keyingi
            qo&apos;llab-quvvatlash.
          </p>

          <p className="lead">
            Har bir loyihaga alohida yondashamiz. Maqsad — shunchaki sayt emas,
            balki biznesingizga real natija keltiradigan mahsulot yaratish.
          </p>

          <blockquote className="quote">Buyurtmachining maqsadi — mening ustuvor vazifam. Men uchun har doim sizning manfaatingiz birinchi o‘rinda.</blockquote>
        </div>

        <div className="lg:col-span-5 aspect-auto flex justify-center items-center">
          <Image
            src={img}
            alt="Xamidov & Associates"
            height={720}
            width={1280}
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
