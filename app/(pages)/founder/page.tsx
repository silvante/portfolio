import { FOUNDER, SITE_URL, breadcrumbs, ids, pageMetadata } from "@/app/lib/site";
import JsonLd from "@/app/(components)/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import PageHeading from "@/app/(reusable)/PageHeading";
import Counters from "@/app/(components)/Counters";
import CallToAction from "@/app/(components)/CallToAction";
import IMG1 from "../../assets/album/IMG1_BG.png";
import IMG2 from "../../assets/album/IMG2_BG.png";
import { languages, skills } from "@/app/data";

export const metadata = pageMetadata({
  title: "Mardonbek Xamidov (Khamidov) — asoschi, full-stack dasturchi",
  description:
    "Mardonbek Xamidov (Khamidov, Хамидов) — Xamidov & Associates asoschisi, O‘zbekistonlik full-stack dasturchi. Ruby on Rails, Next.js, NestJS, React, Node.js. Tajriba, ko‘nikmalar va tillar.",
  path: "/founder",
  type: "profile",
  image: {
    url: FOUNDER.image,
    width: 900,
    height: 1200,
    alt: "Mardonbek Xamidov — Xamidov & Associates asoschisi",
  },
});

const founderGraph = [
  {
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/founder`,
    url: `${SITE_URL}/founder`,
    name: "Mardonbek Xamidov — asoschi",
    inLanguage: "uz",
    isPartOf: { "@id": ids.website },
    mainEntity: { "@id": ids.person },
  },
  breadcrumbs([{ name: "Asoschi", path: "/founder" }]),
];

export default function Founder() {
  return (
    <div className="shell page space-y-[clamp(3rem,6vw,5rem)]">
      <JsonLd data={founderGraph} />

      <PageHeading eyebrow="Asoschi" text="Mardonbek Xamidov" />

      {/* Bio */}
      <section className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="frame lg:col-span-5">
          <Image
            src={IMG1}
            alt="Mardonbek Xamidov — Xamidov &amp; Associates asoschisi"
            height={720}
            width={1280}
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>

        <div className="space-y-6 lg:col-span-7">
          <p className="eyebrow">
            <span className="base_bg block size-1.5" />
            Full-stack dasturchi
          </p>

          <p className="lead">Dasturiy ta’minot ishlab chiqish faoliyatimni 2023-yilda WebKing IT Akademiyasida boshlaganman. Dasturlash bilan shug‘ullanishni boshlagan ilk kunimdan boshlab, uni men uchun shunchaki kasb emas, balki o‘ziga xos san’at sifatida shakllantirganman. Keyinchalik aynan ta’lim olgan akademiyamda faoliyat yuritishni boshladim. Ish jarayonida jamoada ishlash, kod arxitekturasini to‘g‘ri tashkil etish, loyihalarni deployment qilish hamda dasturiy ta’minot ishlab chiqishning boshqa muhim jihatlari bo‘yicha amaliy tajriba orttirdim.</p>

          <p className="lead">Dasturlash asoslarini akademiyada olgan bo‘lsam-da, Back-end yo‘nalishi va unda qo‘llaniladigan ko‘plab texnologiyalarni mustaqil ravishda internet manbalari hamda rasmiy dokumentatsiyalar orqali o‘rganganman. Tajribamning katta qismi esa shaxsiy qiziqishlarim, mustaqil loyihalar va amaliyot davomida shakllangan.</p>

          <blockquote className="quote">Buyurtmachining maqsadi — mening ustuvor vazifam. Men uchun har doim sizning manfaatingiz birinchi o‘rinda.</blockquote>
        </div>
      </section>

      {/* Numbers */}
      <section>
        <Counters />
      </section>

      {/* Skills */}
      <section className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-10 lg:col-span-7">
          <div className="space-y-5">
            <p className="eyebrow">
              <span className="base_bg block size-1.5" />
              Ko&apos;nikmalar
            </p>

            <h2 className="text-headline">
              Texnik<span className="dot">.</span>
            </h2>

            <ul className="flex flex-wrap gap-2.5 pt-1">
              {skills.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip"
                  >
                    {s.name}
                    <MoveUpRight className="size-3.5 shrink-0 opacity-40" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="text-headline">
              Tillar<span className="dot">.</span>
            </h2>

            <ul className="flex flex-wrap gap-2.5 pt-1">
              {languages.map((l) => (
                <li key={l.id}>
                  <Link
                    href={l.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip"
                  >
                    {l.name}
                    <MoveUpRight className="size-3.5 shrink-0 opacity-40" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="frame lg:col-span-5">
          <Image
            src={IMG2}
            alt="Mardonbek Xamidov — Xamidov &amp; Associates asoschisi"
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
