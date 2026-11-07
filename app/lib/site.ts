/* ------------------------------------------------------------------
   SEO — single source of truth for who we are.

   Every page's <head>, the JSON-LD knowledge graph, sitemap.xml,
   robots.txt and /llms.txt read from here, so a phone number or a
   name spelling only ever has to change in one place.
   ------------------------------------------------------------------ */
import type { Metadata } from "next";
import { contacts, languages, skills } from "@/app/data";

export const SITE_URL = "https://xamidov.uz";

export const COMPANY = {
  name: "Xamidov & Associates",
  short: "X&A",
  /* every spelling people actually type — Latin, old Latin, Cyrillic */
  alternateNames: [
    "X&A",
    "Xamidov and Associates",
    "Khamidov & Associates",
    "Khamidov and Associates",
    "Hamidov & Associates",
    "Хамидов и партнёры",
    "Xamidov.uz",
  ],
  tagline: "Biznes uchun zamonaviy veb-saytlar, ilovalar va foydali raqamli yechimlar.",
  description:
    "Xamidov & Associates (X&A) — butun O‘zbekiston bo‘ylab faoliyat yurituvchi raqamli yechimlar kompaniyasi. Bosh ofis Toshkentda, Andijon, Namangan va boshqa viloyatlarda hamkorlarimiz bor. Biznes uchun veb-saytlar, landing sahifalar, mobil (Android, iOS) va desktop ilovalar, admin panellar, Telegram botlar va maxsus veb-ilovalar ishlab chiqamiz. Tamoyillarimiz: aniq qoidalar, to‘lovlarda shaffoflik va ishonch.",
  city: "Toshkent", // headquarters
  cityEn: "Tashkent",
  /* regions where we have associates — named explicitly in copy */
  partnerCities: ["Andijon", "Namangan"],
  country: "UZ",
  priceRange: "$120 – $3,500+",
} as const;

export const FOUNDER = {
  name: "Mardonbek Xamidov",
  fullName: "Mardonbek F. Xamidov",
  givenName: "Mardonbek",
  familyName: "Xamidov",
  alternateNames: [
    "Mardonbek Khamidov",
    "Mardonbek Hamidov",
    "Mardonbek F. Xamidov",
    "Мардонбек Хамидов",
    "Khamidov Mardonbek",
    "Xamidov Mardonbek",
  ],
  jobTitle: "Full-stack dasturchi, Xamidov & Associates asoschisi",
  description:
    "Mardonbek Xamidov (Khamidov) — O‘zbekistonlik full-stack dasturchi va Xamidov & Associates raqamli yechimlar kompaniyasining asoschisi. Dasturlashni 2023-yilda WebKing IT Akademiyasida boshlagan, keyinchalik shu akademiyada ishlagan. Ruby on Rails, Next.js, NestJS, React, Node.js va TypeScript bilan tez, ishonchli va xavfsiz veb-ilovalar yaratadi.",
  image: "/images/mardonbek-xamidov.jpg",
  academy: "WebKing IT Akademiyasi",
} as const;

export const CONTACT = {
  phone: "+998948209482",
  phoneDisplay: "+998 94 820-94-82",
  email: "khamidov.ko@gmail.com",
  telegram: "https://t.me/mardonbekxamidov",
} as const;

/* Every region of Uzbekistan — areaServed in JSON-LD and regional search terms.
   [Uzbek name, English name] */
export const REGIONS: [string, string][] = [
  ["Toshkent", "Tashkent"],
  ["Toshkent viloyati", "Tashkent Region"],
  ["Andijon", "Andijan Region"],
  ["Namangan", "Namangan Region"],
  ["Farg‘ona", "Fergana Region"],
  ["Samarqand", "Samarkand Region"],
  ["Buxoro", "Bukhara Region"],
  ["Navoiy", "Navoiy Region"],
  ["Qashqadaryo", "Kashkadarya Region"],
  ["Surxondaryo", "Surkhandarya Region"],
  ["Jizzax", "Jizzakh Region"],
  ["Sirdaryo", "Sirdaryo Region"],
  ["Xorazm", "Khorezm Region"],
  ["Qoraqalpog‘iston", "Republic of Karakalpakstan"],
];

export const SAME_AS = contacts.map((c) => c.link);

/* "English - B2 (ielts 6.5)" -> "English" */
export const LANGUAGES = languages.map((l) => l.name.split(" - ")[0]);
export const SKILLS = skills.map((s) => s.name);

/* What people search for when they need a website and don't know us yet.
   Google mostly ignores <meta keywords>, but other engines and AI tools
   still read it — the real ranking work is done by visible text + JSON-LD. */
export const SERVICE_KEYWORDS = [
  "sayt yaratish",
  "veb-sayt yaratish",
  "sayt yaratish O'zbekiston",
  "sayt yaratish Toshkent",
  "sayt yaratish Andijon",
  "sayt yaratish Namangan",
  "sayt yaratish Farg'ona",
  "sayt yaratish Samarqand",
  "sayt yaratish Buxoro",
  "veb-sayt xizmatlari O'zbekiston",
  "sayt buyurtma qilish",
  "sayt narxi",
  "landing sahifa yaratish",
  "internet do'kon yaratish",
  "mobil ilova yaratish",
  "desktop ilova yaratish",
  "telegram bot yaratish",
  "IT kompaniya O'zbekiston",
  "IT kompaniya Toshkent",
  "dasturchi Toshkent",
  "dasturchi Andijon",
  "dasturchi Namangan",
  "web dasturlash O'zbekiston",
  "создание сайтов Узбекистан",
  "создание сайтов Ташкент",
  "создание сайтов Андижан",
  "создание сайтов Наманган",
  "разработка сайтов Узбекистан",
  "web development Uzbekistan",
  "website development Tashkent",
  "web services Uzbekistan",
];

export const NAME_KEYWORDS = [
  COMPANY.name,
  ...COMPANY.alternateNames,
  FOUNDER.name,
  ...FOUNDER.alternateNames,
  "xamidov.uz",
];

export const ids = {
  org: `${SITE_URL}/#organization`,
  person: `${SITE_URL}/founder#person`,
  website: `${SITE_URL}/#website`,
};

/* ------------------------------------------------------------------
   <head> helper. Next replaces (not merges) a parent's openGraph and
   twitter objects, so every page builds the full set here.
   ------------------------------------------------------------------ */
type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: { url: string; alt: string; width?: number; height?: number };
  type?: "website" | "article" | "profile";
  /** skip the "| Xamidov & Associates" suffix (home page already has the name) */
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
  type = "website",
  absoluteTitle = false,
}: PageMeta): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${COMPANY.name}`;
  // a page-level openGraph drops the root opengraph-image, so name it explicitly
  const img = image ?? {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${COMPANY.name} — veb-saytlar, mobil va desktop ilovalar`,
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...keywords, ...SERVICE_KEYWORDS, ...NAME_KEYWORDS],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      locale: "uz_UZ",
      type,
      images: [img],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [img.url],
    },
  };
}

/* ------------------------------------------------------------------
   JSON-LD — the knowledge graph Google, Gemini and other AI search
   read to answer "who is Mardonbek Xamidov" / "what is X&A".
   The org + person + website nodes ship on every page (layout.tsx);
   pages add their own nodes that point back to them by @id.
   ------------------------------------------------------------------ */
export function siteGraph() {
  const address = {
    "@type": "PostalAddress",
    addressLocality: COMPANY.cityEn,
    addressRegion: COMPANY.cityEn,
    addressCountry: COMPANY.country,
  };

  return [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ids.org,
      name: COMPANY.name,
      alternateName: COMPANY.alternateNames,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icons/icon.svg`,
      },
      image: `${SITE_URL}/opengraph-image`,
      slogan: COMPANY.tagline,
      description: COMPANY.description,
      founder: { "@id": ids.person },
      address,
      areaServed: [
        { "@type": "Country", name: "Uzbekistan" },
        ...REGIONS.map(([uz, en]) => ({
          "@type": "AdministrativeArea",
          name: en,
          alternateName: uz,
        })),
      ],
      telephone: CONTACT.phone,
      email: CONTACT.email,
      priceRange: COMPANY.priceRange,
      currenciesAccepted: "USD, UZS",
      knowsLanguage: ["uz", "ru", "en"],
      knowsAbout: [
        "Veb-sayt yaratish",
        "Web development",
        "Mobile app development",
        "Desktop application development",
        "UI/UX design",
        "SEO",
        "Telegram bot development",
        ...SKILLS,
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: CONTACT.phone,
          email: CONTACT.email,
          url: CONTACT.telegram,
          areaServed: "UZ", // whole country
          availableLanguage: ["Uzbek", "Russian", "English"],
        },
      ],
      sameAs: SAME_AS,
    },
    {
      "@type": "Person",
      "@id": ids.person,
      name: FOUNDER.name,
      givenName: FOUNDER.givenName,
      familyName: FOUNDER.familyName,
      alternateName: FOUNDER.alternateNames,
      url: `${SITE_URL}/founder`,
      image: `${SITE_URL}${FOUNDER.image}`,
      jobTitle: FOUNDER.jobTitle,
      description: FOUNDER.description,
      worksFor: { "@id": ids.org },
      founder: { "@id": ids.org },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: FOUNDER.academy,
      },
      nationality: { "@type": "Country", name: "Uzbekistan" },
      homeLocation: { "@type": "Place", address },
      knowsAbout: SKILLS,
      knowsLanguage: LANGUAGES,
      telephone: CONTACT.phone,
      email: CONTACT.email,
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": ids.website,
      url: SITE_URL,
      name: COMPANY.name,
      alternateName: [COMPANY.short, "Xamidov.uz", FOUNDER.name],
      description: COMPANY.tagline,
      inLanguage: "uz",
      publisher: { "@id": ids.org },
      about: [{ "@id": ids.org }, { "@id": ids.person }],
    },
  ];
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Bosh sahifa", path: "/" }, ...items].map(
      (item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
      }),
    ),
  };
}
