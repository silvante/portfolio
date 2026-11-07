import Link from "next/link";
import { Globe, Smartphone, Monitor, MoveRight } from "lucide-react";

export const services = [
  {
    icon: Globe,
    title: "Veb-saytlar",
    text: "Biznesingizning onlayn mavjudligini mustahkamlaydigan va mijozlarni jalb qiladigan zamonaviy, moslashuvchan veb-saytlar.",
  },
  {
    icon: Smartphone,
    title: "Mobil ilovalar",
    text: "Biznesingiz ehtiyojlariga moslab yaratiladigan Android va iOS ilovalari.",
  },
  {
    icon: Monitor,
    title: "Desktop ilovalar",
    text: "Biznesni boshqarish, avtomatlashtirish va maxsus ish jarayonlari uchun kuchli desktop ilovalar.",
  },
];

type Tone = "light" | "soft" | "dark";

export const plans: {
  name: string;
  audience: string;
  price: string;
  text: string;
  features: string[];
  tone: Tone;
}[] = [
  {
    name: "Basic",
    audience: "Yakka tartibdagi tadbirkorlar va kichik biznes uchun",
    price: "$120 – $280",
    text: "Chiroyli animatsiyali landing sahifalar, axborot sahifalari va reklama. Telegram/WhatsApp bot integratsiyasi hamda kichik lead-generatsiya API’lari kiritilishi mumkin.",
    features: [
      "Moslashuvchan dizayn (telefon, planshet, kompyuter)",
      "Zamonaviy UI/UX",
      "Silliq animatsiya va o‘tishlar",
      "Landing va axborot sahifalari",
      "Asosiy SEO optimizatsiya",
      "Aloqa formalari",
      "Telegram/WhatsApp bot integratsiyasi",
      "Oddiy API integratsiyalari",
    ],
    tone: "light",
  },
  {
    name: "Professional",
    audience: "O‘sib borayotgan biznes uchun",
    price: "$350 – $900",
    text: "Ilg‘or funksiyalar, dinamik kontent va integratsiyalarga ega to‘liq biznes saytlar — biznes jarayonlari va mijozlar tajribasini yaxshilash uchun.",
    features: [
      "Basic’dagi barcha imkoniyatlar",
      "Ko‘p sahifali saytlar",
      "Maxsus UI/UX dizayn",
      "Admin panel",
      "Ma’lumotlar bazasi integratsiyasi",
      "Foydalanuvchi autentifikatsiyasi va ruxsatlar",
      "Ilg‘or SEO optimizatsiya",
      "Blog va kontentni boshqarish",
      "Ilg‘or API integratsiyalari",
      "Biznesga xos maxsus funksiyalar",
      "Tezlikni optimallashtirish",
    ],
    tone: "soft",
  },
  {
    name: "Enterprise",
    audience: "Maxsus yechim kerak bo‘lgan biznes uchun",
    price: "$1,000 – $3,500+",
    text: "Murakkab biznes talablari, ichki jarayonlar va keng ko‘lamli operatsiyalar uchun yaratilgan ilg‘or veb-ilovalar.",
    features: [
      "Professional’dagi barcha imkoniyatlar",
      "To‘liq maxsus veb-ilovalar",
      "Ilg‘or admin panellar",
      "Murakkab ma’lumotlar bazasi arxitekturasi",
      "Ko‘p rolli ruxsatlar tizimi",
      "Uchinchi tomon servislari integratsiyasi",
      "Biznes jarayonlarini avtomatlashtirish",
      "Real vaqt (real-time) funksiyalari",
      "Ilg‘or xavfsizlik",
      "Kengaytiriladigan arxitektura",
      "Maxsus backend tizimlar",
      "Doimiy texnik yordam",
    ],
    tone: "dark",
  },
];

const tones: Record<Tone, string> = {
  light: "border-line bg-paper text-ink",
  soft: "border-line bg-paper text-ink",
  dark: "border-ink bg-ink text-paper",
};

export default function Services() {
  return (
    <section id="services" className="shell page scroll-mt-24 space-y-[clamp(3.5rem,7vw,6rem)]">
      {/* What we do */}
      <div className="space-y-10">
        <div className="space-y-5">
          <p className="eyebrow">
            <span className="base_bg block size-1.5" />
            Xizmatlar
          </p>
          <h2 className="text-headline">
            Barcha xizmatlar<span className="dot">.</span>
          </h2>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="group relative flex cursor-pointer flex-col gap-10 border border-line bg-paper p-7 transition-all duration-150 ease-mech hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-ink hover:shadow-brand-sm sm:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-14 items-center justify-center border border-line text-ink transition-colors duration-150 ease-mech group-hover:border-ink">
                  <s.icon className="size-6" strokeWidth={1.75} />
                </span>
                <span className="font-display text-5xl leading-none font-bold tracking-tighter text-ink-3/40 transition-colors duration-300 ease-mech group-hover:text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-title">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-3">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Website plans */}
      <div className="space-y-10">
        <div className="space-y-5">
          <p className="eyebrow">
            <span className="base_bg block size-1.5" />
            Tariflar
          </p>
          <h2 className="text-headline">
            Veb-sayt tariflari<span className="dot">.</span>
          </h2>
          <p className="lead max-w-2xl">
            Mobil va desktop ilovalar ham veb-ishlab chiqish bilan bir xil
            yo‘ldan boradi.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p, i) => {
            const dark = p.tone === "dark";
            return (
              <article
                key={p.name}
                className={`group relative flex flex-col gap-7 border p-7 transition-all duration-200 ease-mech hover:-translate-x-1 hover:-translate-y-1 sm:p-9 ${tones[p.tone]} ${
                  dark ? "hover:shadow-brand" : "hover:shadow-hard"
                }`}
              >
                <span aria-hidden className="base_bg absolute right-0 bottom-0 size-3" />

                <header className="space-y-4">
                  <p className="eyebrow" style={dark ? { color: "rgb(255 255 255 / .6)" } : undefined}>
                    <span className="base_bg block size-1.5" />
                    {String(i + 1).padStart(2, "0")} · {p.name}
                  </p>

                  <p className="font-display text-[clamp(2rem,3.4vw,2.5rem)] leading-none font-bold tracking-tight">
                    {p.price}
                  </p>

                  <p className={`text-sm font-medium ${dark ? "text-paper/80" : "text-ink-2"}`}>
                    {p.audience}
                  </p>
                </header>

                <p className={`text-sm leading-relaxed ${dark ? "text-paper/60" : "text-ink-3"}`}>
                  {p.text}
                </p>

                <span aria-hidden className={`h-px w-full ${dark ? "bg-paper/20" : "bg-line"}`} />

                <ul className="space-y-2.5">
                  {p.features.map((f, k) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-sm leading-snug ${
                        k === 0 && i > 0 ? "font-semibold" : ""
                      } ${dark ? "text-paper/85" : "text-ink-2"}`}
                    >
                      <span aria-hidden className="base_bg mt-[0.4rem] block size-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Included support */}
        <div className="grid border-2 border-brand lg:grid-cols-12">
          <div className="base_bg relative flex flex-col justify-center gap-4 overflow-hidden p-7 text-paper sm:p-9 lg:col-span-4">
            <p className="font-display text-[clamp(3.5rem,8vw,5.5rem)] leading-none font-bold tracking-tighter">
              1 oy
            </p>
            <span className="inline-block self-start bg-paper px-3 py-1.5 font-mono text-sm font-semibold tracking-[0.18em] text-brand uppercase shadow-hard-sm">
              Bepul
            </span>
          </div>

          <div className="space-y-4 bg-brand-3/50 p-7 sm:p-9 lg:col-span-8">
            <p className="eyebrow">
              <span className="base_bg block size-1.5" />
              Qo‘llab-quvvatlash
            </p>

            <h3 className="text-title">
              Barcha uchta tarif bir oylik{" "}
              <span className="base_bg px-2 py-0.5 text-paper">bepul</span>{" "}
              qo‘llab-quvvatlashni o‘z ichiga oladi.
            </h3>

            <p className="text-sm leading-relaxed text-ink-2">
              Undan keyin — texnik mutaxassis qo‘llab-quvvatlashi uchun{" "}
              <span className="font-semibold text-ink">moslashuvchan va arzon</span>{" "}
              oylik to‘lov.
            </p>
          </div>
        </div>

        {/* Custom */}
        <div className="panel blueprint flex flex-col items-center gap-7 px-6 py-14 text-center sm:py-16">
          <p className="eyebrow">
            <span className="base_bg block size-1.5" />
            Maxsus yechim
          </p>

          <h3 className="text-headline max-w-xl">
            Boshqacha narsa kerakmi<span className="dot">?</span>
          </h3>

          <p className="max-w-xl text-base leading-relaxed text-ink-2">
            Har bir biznes tayyor paketlarga sig‘avermaydi. Talablaringizni
            ayting — biz sizga maxsus yechim va shaxsiy narx taklifini
            tayyorlaymiz.
          </p>

          <Link href="/contacts" className="base_btn">
            Narx so‘rash
            <MoveRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
