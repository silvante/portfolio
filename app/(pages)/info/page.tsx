import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import img from "@/app/assets/marketting/background.png";
import PageHeading from "@/app/(reusable)/PageHeading";
import CallToAction from "@/app/(components)/CallToAction";
import WorkflowTimeline from "@/app/(components)/WorkflowTimeline";

export const metadata: Metadata = {
  title: "Mardonbek Xamidov | Portfolio | Info",
  description:
    "Xamidov & Associates — O‘zbekistonda faoliyat yurituvchi raqamli yechimlar kompaniyasi. Veb-saytlar, mobil va desktop ilovalar hamda boshqa raqamli mahsulotlarni ishlab chiqamiz. Tamoyillarimiz: aniq qoidalar, to‘lovlarda shaffoflik va ishonch.",
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
      "Xamidov & Associates — O‘zbekistonda faoliyat yurituvchi raqamli yechimlar kompaniyasi. Veb-saytlar, mobil va desktop ilovalar hamda boshqa raqamli mahsulotlarni ishlab chiqamiz. Tamoyillarimiz: aniq qoidalar, to‘lovlarda shaffoflik va ishonch.",
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
      "Xamidov & Associates — O‘zbekistonda faoliyat yurituvchi raqamli yechimlar kompaniyasi. Veb-saytlar, mobil va desktop ilovalar hamda boshqa raqamli mahsulotlarni ishlab chiqamiz. Tamoyillarimiz: aniq qoidalar, to‘lovlarda shaffoflik va ishonch.",
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

const principles = [
  {
    title: "Aniq qoidalar",
    text: "Kelishuvlar, o‘zaro kutilmalar va mas’uliyat chegaralari ish boshlanishidan oldin ochiq va tushunarli tarzda belgilanadi.",
  },
  {
    title: "To‘lovlarda shaffoflik",
    text: "Narxlar asoslangan, to‘lov shartlari aniq bo‘ladi. Yashirin xarajatlar yo‘q.",
  },
  {
    title: "Ishonch",
    text: "Hamkorlik mas’uliyat va o‘zaro hurmatga tayanadi. Biz uzoq muddatli munosabatlarni qadrlaymiz.",
  },
];

const workflow = [
  {
    title: "Tanishuv",
    text: "Biznesingiz bilan tanishamiz, muammolaringizni aniqlaymiz va nimaga erishmoqchi ekaningizni tushunamiz.",
  },
  {
    title: "Reja va narx",
    text: "Yechimni muhokama qilamiz, loyiha hajmi va muddatlarini belgilaymiz hamda yakuniy narxni kelishamiz.",
  },
  {
    title: "Shartnoma",
    text: "Shartnoma imzolaymiz, mas’uliyatlarni belgilaymiz va hamkorlik shartlarini tasdiqlaymiz.",
  },
  {
    title: "Ishlab chiqish",
    text: "Jamoamiz yechimingizni loyihalaydi va yaratadi, jarayon haqida sizni muntazam xabardor qilib turadi.",
  },
  {
    title: "Test va tasdiqlash",
    text: "Hammasini sinovdan o‘tkazamiz, fikringizni yig‘amiz va kelishilgan yakuniy tuzatishlarni kiritamiz.",
  },
  {
    title: "Topshirish va qo‘llab-quvvatlash",
    text: "Tayyor mahsulotni topshiramiz, ishga tushirishda yordam beramiz va kelishuv bo‘yicha qo‘llab-quvvatlaymiz.",
  },
];

const products = [
  "Veb-saytlar",
  "Mobil ilovalar",
  "Desktop ilovalar",
];

export default function Info() {
  return (
    <div className="shell page space-y-[clamp(3rem,6vw,5rem)]">
      <PageHeading eyebrow="Biz haqimizda" text="Batafsil" />

      {/* Intro */}
      <section className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-6 lg:col-span-7">
          <p className="eyebrow">
            <span className="base_bg block size-1.5" />
            Kompaniya
          </p>

          <h2 className="text-headline">
            Xamidov &amp; Associates<span className="dot">.</span>
          </h2>

          <p className="lead">
            Xamidov &amp; Associates (X&amp;A) — O‘zbekistonda faoliyat
            yurituvchi raqamli yechimlar kompaniyasi. Biz kengaytiriladigan,
            zamonaviy ko‘rinishdagi va ishonchli raqamli mahsulotlarni ishlab
            chiqamiz.
          </p>

          <p className="lead">
            Faoliyatimiz veb-saytlar, mobil ilovalar, desktop ilovalar hamda
            boshqa raqamli yechimlarni qamrab oladi.
          </p>

          <ul className="flex flex-wrap gap-2.5 pt-1">
            {products.map((p) => (
              <li key={p} className="chip cursor-pointer">
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="panel h-full space-y-8 p-7 sm:p-9">
            <p className="eyebrow">
              <span className="base_bg block size-1.5" />
              Qisqacha
            </p>

            <dl className="divide-y divide-line">
              <div className="space-y-1.5 pb-5">
                <dt className="eyebrow">Joylashuv</dt>
                <dd className="text-title">O‘zbekiston</dd>
              </div>
              <div className="space-y-1.5 py-5">
                <dt className="eyebrow">Faoliyat turi</dt>
                <dd className="text-title">Raqamli yechimlar</dd>
              </div>
              <div className="space-y-1.5 pt-5">
                <dt className="eyebrow">Asoschi</dt>
                <dd className="text-title">Mardonbek F. Xamidov</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="space-y-10">
        <div className="space-y-5">
          <p className="eyebrow">
            <span className="base_bg block size-1.5" />
            Qadriyatlar
          </p>

          <h2 className="text-headline">
            Uch tamoyil<span className="dot">.</span>
          </h2>

          <p className="lead max-w-2xl">
            Faoliyatimiz quyidagi uch asosiy tamoyilga asoslanadi.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
          {principles.map((p, i) => (
            <div key={p.title} className="group relative space-y-5 pt-7">
              <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-line" />
              <span
                aria-hidden
                className="base_bg absolute top-0 left-0 h-0.5 w-10 transition-all duration-500 ease-mech group-hover:w-full"
              />

              <p className="font-display text-[clamp(3.5rem,9vw,5.5rem)] leading-none font-bold tracking-tighter text-ink-3 transition-colors duration-300 ease-mech group-hover:text-ink">
                {String(i + 1).padStart(2, "0")}
              </p>

              <div className="space-y-2">
                <h3 className="text-title">{p.title}</h3>
                <p className="text-sm leading-relaxed text-ink-3">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="scroll-mt-24 space-y-10">
        <div className="space-y-5">
          <p className="eyebrow">
            <span className="base_bg block size-1.5" />
            Ish jarayoni
          </p>

          <h2 className="text-headline">
            6 qadamda natija<span className="dot">.</span>
          </h2>

          <p className="lead max-w-2xl">
            Birinchi suhbatdan tayyor mahsulotgacha — sodda va shaffof jarayon.
          </p>
        </div>

        <WorkflowTimeline steps={workflow} />
      </section>

      {/* Philosophy + founder */}
      <section className="panel grid overflow-visible border-ink bg-ink text-paper shadow-brand lg:grid-cols-12">
        {/* Brand image — portrait source, so it gets a portrait frame */}
        <div className="relative order-first aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:order-last lg:col-span-5 lg:aspect-auto lg:min-h-[34rem]">
          <Image
            src={img}
            alt="Xamidov & Associates"
            fill
            priority={false}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-center"
          />
          {/* melt the image into the card */}
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink to-transparent lg:hidden"
          />
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 hidden w-1/3 bg-linear-to-r from-ink to-transparent lg:block"
          />
        </div>

        <div className="flex flex-col justify-center gap-8 p-7 sm:p-10 lg:col-span-7 lg:p-14">
          <p className="eyebrow !text-paper/60">
            <span className="base_bg block size-1.5" />
            Yondashuv
          </p>

          <blockquote className="border-l-4 border-brand pl-6 font-display text-[clamp(1.5rem,3.2vw,2.5rem)] leading-[1.12] font-semibold tracking-tight text-balance">
            X&amp;A uchun hamkorlar va buyurtmachilar birinchi o‘rinda turadi.
          </blockquote>

          <p className="max-w-xl text-[1.0625rem] leading-[1.7] text-paper/70">
            Biz agressiv savdo va qisqa muddatli foydadan ko‘ra kasbiy
            munosabatlarni hamda barqaror rivojlanishni ustun qo‘yamiz.
          </p>

          {/* Founder credit */}
          <Link href="/founder" className="chip self-start !border-paper !bg-paper">
            Kompaniya asoschisi — Mardonbek F. Xamidov
            <MoveUpRight className="size-3.5 shrink-0 opacity-40" />
          </Link>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
