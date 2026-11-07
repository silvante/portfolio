/* Home page FAQ — shown on the page AND emitted as FAQPage JSON-LD,
   so search engines and AI answer engines quote the same text a
   visitor reads. Keep answers factual: they get cited verbatim. */
import { COMPANY, CONTACT, FOUNDER } from "./site";

export const faq = [
  {
    q: "Sayt yaratish qancha turadi?",
    a: "Narx loyiha hajmiga bog‘liq. Basic tarif (landing va axborot sahifalari, kichik biznes uchun) — $120 – $280. Professional tarif (admin panel, ma’lumotlar bazasi, blog, ko‘p sahifali sayt) — $350 – $900. Enterprise tarif (to‘liq maxsus veb-ilovalar, murakkab tizimlar) — $1,000 – $3,500+. Yakuniy narx “Reja va narx” bosqichida aniq kelishiladi, yashirin xarajatlar yo‘q.",
  },
  {
    q: "Qanday xizmatlar ko‘rsatasiz?",
    a: "Biznes uchun veb-saytlar (landing sahifalar, korporativ va ko‘p sahifali saytlar), Android va iOS mobil ilovalar, desktop ilovalar, admin panellar, Telegram/WhatsApp bot integratsiyalari, API integratsiyalari va SEO optimizatsiya.",
  },
  {
    q: "Ish jarayoni qanday tashkil etilgan?",
    a: "6 bosqichda: 1) Tanishuv — biznesingiz va maqsadingizni tushunamiz; 2) Reja va narx — hajm, muddat va narxni kelishamiz; 3) Shartnoma — rasmiy kelishuv; 4) Ishlab chiqish — jarayondan muntazam xabardor bo‘lasiz; 5) Test va tasdiqlash — fikringiz asosida tuzatishlar; 6) Topshirish va qo‘llab-quvvatlash.",
  },
  {
    q: "Sayt topshirilgandan keyin qo‘llab-quvvatlaysizmi?",
    a: "Ha. Barcha uchta tarif bir oylik bepul texnik qo‘llab-quvvatlashni o‘z ichiga oladi. Undan keyin — moslashuvchan va arzon oylik to‘lov asosida texnik yordam.",
  },
  {
    q: `${COMPANY.name} qanday kompaniya?`,
    a: `${COMPANY.name} (${COMPANY.short}) — butun O‘zbekiston bo‘ylab faoliyat yurituvchi raqamli yechimlar kompaniyasi. Bosh ofis ${COMPANY.city}da, ${COMPANY.partnerCities.join(", ")} va boshqa viloyatlarda hamkorlari bor. Kengaytiriladigan, zamonaviy va ishonchli veb-saytlar, mobil va desktop ilovalarni ishlab chiqadi. Asoschisi — ${FOUNDER.fullName}. Tamoyillari: aniq qoidalar, to‘lovlarda shaffoflik va ishonch.`,
  },
  {
    q: `${FOUNDER.name} kim?`,
    a: `${FOUNDER.name} (Mardonbek Khamidov) — ${COMPANY.name} asoschisi, O‘zbekistonlik full-stack dasturchi. Dasturlashni 2023-yilda ${FOUNDER.academy}da boshlagan va keyinchalik shu akademiyada ishlagan. Ruby on Rails, Next.js, NestJS, React, Node.js, TypeScript, MongoDB, MySQL va Prisma bilan ishlaydi.`,
  },
  {
    q: "Viloyatlarda ham sayt yaratib berasizmi?",
    a: `Ha. Biz faqat Toshkentda emas, butun O‘zbekiston bo‘ylab ishlaymiz: ${COMPANY.partnerCities.join(", ")} va mamlakatning ko‘plab boshqa viloyatlarida hamkorlarimiz bor — Farg‘ona, Samarqand, Buxoro va boshqa hududlardagi bizneslar uchun ham veb-saytlar va ilovalar yaratamiz.`,
  },
  {
    q: "Qaysi tillarda muloqot qilasiz?",
    a: "O‘zbek, rus va ingliz tillarida.",
  },
  {
    q: "Qanday bog‘lanish mumkin?",
    a: `Telefon: ${CONTACT.phoneDisplay}, Telegram: @mardonbekxamidov, e-mail: ${CONTACT.email}. Bosh ofis — ${COMPANY.city}; butun O‘zbekiston bo‘ylab ishlaymiz.`,
  },
];

export function faqJsonLd() {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
