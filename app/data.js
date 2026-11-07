/* ------------------------------------------------------------------
   Navigation — single source of truth for desktop nav + mobile sidebar
   so the two can never drift apart again.
   ------------------------------------------------------------------ */
export const navLinks = [
  { id: 1, label: "Bosh sahifa", href: "/" },
  { id: 2, label: "Batafsil", href: "/info" },
  { id: 3, label: "Asoschi", href: "/founder" },
  { id: 4, label: "Loyihalar", href: "/projects" },
  { id: 5, label: "Bog'lanish", href: "/contacts" },
];

export const skills = [
  {
    id: 1,
    name: "HTML",
    link: "https://en.wikipedia.org/wiki/HTML",
  },
  {
    id: 2,
    name: "CSS",
    link: "https://en.wikipedia.org/wiki/CSS",
  },
  {
    id: 3,
    name: "JavaScript",
    link: "https://www.javascript.com/",
  },
  {
    id: 4,
    name: "React",
    link: "https://react.dev/",
  },
  {
    id: 5,
    name: "Tailwind css",
    link: "https://tailwindcss.com/",
  },
  {
    id: 6,
    name: "Git",
    link: "https://en.wikipedia.org/wiki/Git",
  },
  {
    id: 7,
    name: "GitHub",
    link: "https://github.com/",
  },
  {
    id: 8,
    name: "MUI",
    link: "https://mui.com/",
  },
  {
    id: 9,
    name: "Bootsrap",
    link: "https://getbootstrap.com/",
  },
  {
    id: 10,
    name: "Express",
    link: "https://expressjs.com/",
  },
  {
    id: 11,
    name: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  {
    id: 12,
    name: "Node.js",
    link: "https://nodejs.org/en",
  },
  {
    id: 13,
    name: "Ruby",
    link: "https://www.ruby-lang.org/en/",
  },
  {
    id: 14,
    name: "Ruby on Rails",
    link: "https://rubyonrails.org/",
  },
  {
    id: 15,
    name: "MySQL",
    link: "https://www.mysql.com/",
  },
  {
    id: 16,
    name: "NestJs",
    link: "https://nestjs.com/",
  },
  {
    id: 17,
    name: "NextJs",
    link: "https://nextjs.org/",
  },
  {
    id: 18,
    name: "Figma",
    link: "https://www.figma.com/",
  },
  {
    id: 19,
    name: "Prisma",
    link: "https://www.prisma.io/",
  },
  {
    id: 20,
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 21,
    name: "CI/CD",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 22,
    name: "AWS",
    link: "https://aws.amazon.com/",
  },
];

export const languages = [
  {
    id: 1,
    name: "English - B2 (ielts 6.5)",
    link: "https://en.wikipedia.org/wiki/English_language",
  },
  {
    id: 2,
    name: "Uzbek - Native",
    link: "https://en.wikipedia.org/wiki/Uzbek_language",
  },
  {
    id: 3,
    name: "Russian - B2",
    link: "https://en.wikipedia.org/wiki/Russian_language",
  },
]

export const contacts = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/silvante/"
  },
  {
    id: 2,
    name: "Telegram",
    link: "https://t.me/mardonbekxamidov"
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://www.instagram.com/therealxamidov"
  }
]

/* ------------------------------------------------------------------
   Projects — shown on /projects and /projects/[slug].

   HOW TO ADD A PROJECT
   1. Copy one object below and fill it in. `slug` must be unique and
      URL-friendly (lowercase, digits, dashes): it becomes the page URL
      → /projects/<slug>
   2. Create the folder  app/assets/projects/<slug>/  and drop the images
      in it (png, jpg, jpeg, webp, avif, gif, svg).
      They are ordered by number: 1.png, 2.png, 3.png … 10.png
      (10 comes after 9, not after 1). The first image is the cover.
   `author` is who built it: name, portfolio link and an image (avatar) URL.
   Optional fields can simply be left out.
   ------------------------------------------------------------------ */
export const projects = [
  {
    id: 1,
    slug: "xamidov-portfolio", // → app/assets/projects/xamidov-portfolio/
    title: "Xamidov & Associates",
    category: "Veb-sayt", // Veb-sayt | Mobil ilova | Desktop ilova | Dizayn
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "Shaxsiy loyiha",
    duration: "3 hafta", // optional
    summary:
      "Xizmatlar, tariflar va ish jarayonini aniq ko'rsatadigan zamonaviy portfolio va biznes sayti.",
    description:
      "Maqsad — mijoz saytga kirgan zahoti kim bilan ishlayotganini, qanday xizmatlar borligini va narxlar qanchaligini tushunishi. Sayt telefon, planshet va kompyuterda birdek qulay ishlaydi, tez yuklanadi va qidiruv tizimlarida yaxshi ko'rinadi.",
    features: [
      "Barcha qurilmalarga moslashuvchan dizayn",
      "Xizmatlar va tariflar sahifasi",
      "Ish jarayoni bosqichma-bosqich",
      "SEO optimizatsiya va sitemap",
      "Tezkor yuklanish",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://xamidov.uz", // optional
    sourceUrl: "https://github.com/silvante/portfolio", // optional
  },
  {
    id: 2,
    slug: "smalltalk", // → app/assets/projects/smalltalk/
    title: "SmallTalk",
    category: "Veb-sayt", // Veb-sayt | Mobil ilova | Desktop ilova | Dizayn
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "Shaxsiy loyiha",
    duration: "3 hafta", // optional
    summary:
        "Xizmatlar, tariflar va ish jarayonini aniq ko'rsatadigan zamonaviy portfolio va biznes sayti.",
    description:
        "Maqsad — mijoz saytga kirgan zahoti kim bilan ishlayotganini, qanday xizmatlar borligini va narxlar qanchaligini tushunishi. Sayt telefon, planshet va kompyuterda birdek qulay ishlaydi, tez yuklanadi va qidiruv tizimlarida yaxshi ko'rinadi.",
    features: [
      "Barcha qurilmalarga moslashuvchan dizayn",
      "Xizmatlar va tariflar sahifasi",
      "Ish jarayoni bosqichma-bosqich",
      "SEO optimizatsiya va sitemap",
      "Tezkor yuklanish",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://xamidov.uz", // optional
    sourceUrl: "https://github.com/silvante/portfolio", // optional
  },
];

export const counts = [
  {
    id: 1,
    amount: skills.length,
    name: "Ko'nikmalar",
    desc: "Texnologiyalar"
  },
  {
    id: 2,
    amount: languages.length,
    name: "Tillar",
    desc: "Erkin muloqot & yozma nutq"
  },
  {
    id: 3,
    amount: "4+",
    name: "Yaratilgan loyihalar",
    desc: "Web-sahifalar, Ilovalar, Dizayn"
  },
]