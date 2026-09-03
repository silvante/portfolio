import At from "@/app/(reusable)/At";
import { Metadata } from "next";
import Link from "next/link";
import PageHeading from "@/app/(reusable)/PageHeading";
import Image from "next/image";
import IMG1 from "../../assets/album/IMG1_BG.png"
import IMG2 from "../../assets/album/IMG2_BG.png"
import {languages, skills} from "@/app/data";

export const metadata: Metadata = {
  title: "Mardonbek Khamidov | Portfolio | Info",
  description:
    "I'm Mardonbek Khamidov, a passionate Software Engineer from Uzbekistan with a strong background in full-stack development. I build fast, reliable, and secure web applications. Learn more about my experience, values, and the technologies I love.",
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
    title: "Mardonbek Khamidov | Portfolio | Info",
    description:
      "I'm Mardonbek Khamidov, a passionate Software Engineer from Uzbekistan with a strong background in full-stack development. I build fast, reliable, and secure web applications. Learn more about my experience, values, and the technologies I love.",
    url: "https://xamidov.com/info",
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
    title: "Mardonbek Khamidov | Portfolio | Info",
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

export default function Info() {
  return (
      <div className="py-16 space-y-10">
        <PageHeading text="Batafsil" />

        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <Image
              src={IMG1}
              alt="Mardonbek Xamidov"
              height={720}
              width={1280}
              className="w-full lg:max-w-lg grayscale hover:grayscale-0 transition-all"
          />

          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Mardonbek Xamidov<span className="base_text">.</span>
              </h2>

              <p className="text-lg opacity-70 max-w-2xl leading-relaxed">
                Dasturiy ta’minot ishlab chiqish faoliyatimni 2023-yilda WebKing IT Akademiyasida boshlaganman. Dasturlash bilan shug‘ullanishni boshlagan ilk kunimdan boshlab, uni men uchun shunchaki kasb emas, balki o‘ziga xos san’at sifatida shakllantirganman.
                Keyinchalik aynan ta’lim olgan akademiyamda faoliyat yuritishni boshladim. Ish jarayonida jamoada ishlash, kod arxitekturasini to‘g‘ri tashkil etish, loyihalarni deployment qilish hamda dasturiy ta’minot ishlab chiqishning boshqa muhim jihatlari bo‘yicha amaliy tajriba orttirdim.
              </p>

              <p className="text-lg opacity-70 max-w-2xl leading-relaxed">
                Dasturlash asoslarini akademiyada olgan bo‘lsam-da, Back-end yo‘nalishi va unda qo‘llaniladigan ko‘plab texnologiyalarni mustaqil ravishda internet manbalari hamda rasmiy dokumentatsiyalar orqali o‘rganganman. Tajribamning katta qismi esa shaxsiy qiziqishlarim, mustaqil loyihalar va amaliyot davomida shakllangan.
              </p>

              <p className="p-4 border-l-4 border-l-gray-200 text-lg max-w-2xl">
                Buyurtmachining maqsadi — mening ustuvor vazifam. Men uchun har doim sizning manfaatingiz birinchi o‘rinda.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center py-16">
          <PageHeading text="Ko'nikmalar"/>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Texnik
              </h2>
              <div className="flex flex-wrap gap-2">
                { skills.map((s) => (
                    <Link href={s.link} target="_blank" key={s.id} className="text-lg py-3 px-6 border border-gray-200 flex hover:bg-black/5">
                      <p>{s.name}</p>
                    </Link>
                ))}
              </div>

              <br/>

              <h2 className="text-4xl md:text-5xl font-bold">
                Til
              </h2>
              <div className="flex flex-wrap gap-2">
                { languages.map((l) => (
                    <Link href={l.link} target="_blank" key={l.id} className="text-lg py-3 px-6 border border-gray-200 flex hover:bg-black/5">
                      <p>{l.name}</p>
                    </Link>
                ))}
              </div>
            </div>
          </div>

          <Image
              src={IMG2}
              alt="Mardonbek Xamidov"
              height={720}
              width={1280}
              className="w-full lg:max-w-lg grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </div>
  );
}