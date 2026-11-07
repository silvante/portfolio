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
    slug: "smalltalk", // → app/assets/projects/smalltalk/
    title: "SmallTalk",
    category: "Veb-sayt", // Veb-sayt | Mobil ilova | Desktop ilova | Dizayn
    author: {
      name: "Mardonbek Xamidov F.",
      portfolio: "https://xamidov.uz/founder",
      image: "https://avatars.githubusercontent.com/u/166621808?v=4",
    },
    client: "Shaxsiy loyiha",
    duration: "Jarayonda", // optional
    summary:
      "Turli xil hamjamiyat turlari uchun mo‘ljallangan ijtimoiy tarmoq. Ijtimoiy muloqotning yanada xotirjam uslubi.",
    description:
      "Maqsad — foydalanuvchilarga — xoh yangiliklardan xabardor bo‘lish, xoh ishga oid vazifalarni bajarish yoki turli hamjamiyatlar bilan muloqot qilish bo‘lsin — ortiqcha chalg‘ituvchi omillarsiz aloqada bo‘lishga yordam berish, shu bilan birga, ularning ma’lumotlarini himoya qilish hamda xavfsizroq va erkinroq muloqot uchun imkoniyat yaratishdir.",
    features: [
      "Hamjamiyatlar yaratish va ularni boshqarish",
      "Haqiqiy odamlardan yordam olish",
      "Haqiqiy odamlarga yordam berish",
      "Xavfsiz malumotlar",
      "NSFW mediadan himoya",
    ],
    stack: ["Ruby", "Ruby on Rails", "Tailwind CSS", "Shrine.rb", "Quill", "Inertia.js", "Node.js", "ViteRails", "Kaminari", "Railsblocks.com", "Discard", "Friendly ID", "View Components"],
    liveUrl: null, // optional
    sourceUrl: "https://github.com/silvante/smalltalk", // optional
  },
  /* ---------------- Boburov Shukurillo's projects ---------------- */
  {
    id: 2,
    slug: "learnstuff", // → app/assets/projects/learnstuff/
    title: "LearnStuff — 3D, VR va AI ta’lim platformasi",
    category: "Veb-sayt",
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "Startup · Jamoaviy loyiha",
    summary:
      "Fanlarni 3D modellar, interaktiv tajribalar, VR va AI o‘qituvchi yordamida o‘rgatuvchi startup. Jamoamiz ushbu loyiha bilan Andijondagi Nation AI xakatonida 1-o‘rinni olgan.",
    description:
      "LearnStuff kimyo, biologiya, fizika, elektronika va tarixni brauzerda amaliy o‘rganishga yordam beradi. O‘quvchi 3D modelni aylantiradi, tajriba parametrlarini o‘zgartiradi va mavzuni biladigan AI o‘qituvchidan o‘zbek tilida izoh oladi. Platformada VR va WebXR imkoniyatlari ham mavjud. Ushbu startup bilan jamoamiz Andijondagi Nation AI xakatonida 1-o‘rinni egallagan.",
    features: [
      "5 ta fan yo‘nalishi",
      "Aylantirish va yaqinlashtirish mumkin bo‘lgan 3D modellar",
      "Kimyo va fizika bo‘yicha interaktiv simulyatsiyalar",
      "Mavzu kontekstini biladigan AI o‘qituvchi",
      "VR va WebXR rejimlari",
      "O‘zbek tilidagi tushuntirishlar",
      "Telefon, planshet va kompyuter brauzeridan foydalanish",
    ],
    stack: ["React", "TypeScript", "Vite", "Three.js", "React Three Fiber", "WebXR", "Node.js", "Express", "Tailwind CSS"],
    liveUrl: "https://learnstuff.uz/",
    sourceUrl: "https://github.com/boburov/LearnStuff",
  },
  {
    id: 3,
    slug: "rosella-flowers", // → app/assets/projects/rosella-flowers/
    title: "Rosella Flowers",
    category: "Veb-sayt",
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "Rosella Flowers",
    summary:
      "Gul do‘koni uchun landing sahifa, buketlar katalogi, savat va Telegram orqali buyurtma tayyorlash imkoniyatiga ega sayt.",
    description:
      "Rosella Flowers mijozlarga buketlar, ularning rasmlari va narxlarini telefonda qulay ko‘rish imkonini beradi. Mahsulotlarni toifalar orqali izlash, saralash va savatga yig‘ish mumkin. Sayt buyurtma tarkibi va umumiy summani Telegram xabariga tayyorlab beradi; xabarni mijozning o‘zi ko‘rib yuboradi. Loyihada katalogga mahsulot va rasm qo‘shish uchun administrator Telegram boti ham bor.",
    features: [
      "Mobil ilovaga o‘xshash moslashuvchan dizayn",
      "Buketlar va kompozitsiyalar katalogi",
      "Mahsulot rasmi, tavsifi va narxi",
      "Qidiruv, toifalar va saralash",
      "Savat, mahsulot miqdori va umumiy summa",
      "Telegram uchun tayyor buyurtma xabari",
      "Telegram administrator boti orqali mahsulot va rasm qo‘shish",
      "SEO metadata va mahsulot sahifalari",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Telegram Bot API"],
    liveUrl: "https://rosellaflowers.uz/",
    sourceUrl: "https://github.com/boburov/flower_shop",
  },
  {
    id: 4,
    slug: "sevenedu", // → app/assets/projects/sevenedu/
    title: "SevenEdu — Web platforma",
    category: "Veb-sayt",
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "SevenEdu",
    duration: "1 yildan ortiq",
    summary:
      "Til kurslari, videodarslar, testlar, speaking mashqlari, to‘lovlar va o‘quv natijalarini birlashtirgan ta’lim platformasi.",
    description:
      "SevenEdu chet tillarini o‘rganish uchun yaratilgan web platforma. O‘quvchilar kursga yoziladi, videodarslarni ko‘radi, test ishlaydi, talaffuzini mashq qiladi va o‘z rivojlanishini kuzatadi. Administratorlar kurs, modul va darslarni boshqaradi. Autentifikatsiya, to‘lovlar, bildirishnomalar va natijalar umumiy backend orqali ishlaydi; iOS va Android ilovalari ham shu tizimga ulangan.",
    features: [
      "7 ta til bo‘yicha kurslar",
      "Videodarslar va modul boshqaruvi",
      "Avtomatik tekshiriladigan testlar",
      "Speaking va talaffuzni baholash",
      "O‘quv progressi, streak, tangalar va reyting",
      "Kurs yakunida sertifikat",
      "Click va Payme to‘lov integratsiyalari",
      "Kurs va foydalanuvchilarni boshqarish paneli",
      "Web va mobil ilovalar uchun umumiy API",
    ],
    stack: ["Next.js", "TypeScript", "NestJS", "Tailwind CSS", "Prisma", "PostgreSQL", "Redis"],
    liveUrl: "https://sevenedu.org/",
  },
  {
    id: 5,
    slug: "sevenedu-mobile", // → app/assets/projects/sevenedu-mobile/
    title: "SevenEdu — iOS va Android ilovasi",
    category: "Mobil ilova",
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "SevenEdu",
    duration: "3 oy",
    summary:
      "App Store va Google Play’da chop etilgan, til kurslari, videodarslar, testlar, speaking va o‘yinlarni birlashtirgan Flutter ilova.",
    description:
      "SevenEdu mobil ilovasi yagona Flutter kod bazasi orqali iPhone, iPad va Android qurilmalarida ishlaydi. O‘quvchi kurslarni davom ettiradi, test va talaffuz mashqlarini bajaradi, o‘yinlar orqali bilimini mustahkamlaydi. Streak, tangalar, reyting, push bildirishnomalar va sertifikatlar muntazam o‘rganishni qo‘llab-quvvatlaydi. Ilova SevenEdu web platformasi bilan umumiy backendga ulangan.",
    features: [
      "iOS, iPadOS va Android uchun yagona kod bazasi",
      "App Store va Google Play’da mavjud",
      "7 ta til bo‘yicha kurslar va videodarslar",
      "Testlar, speaking va talaffuz mashqlari",
      "O‘quv o‘yinlari, streak, tangalar va reyting",
      "Firebase push bildirishnomalari",
      "Drift va SQLite yordamida o‘quv ma’lumotlarini keshlash",
      "Sertifikatni PDF ko‘rinishida ko‘rish va ulashish",
      "Web platforma bilan umumiy API",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Drift", "SQLite", "REST API"],
    liveUrl: "https://apps.apple.com/app/sevenedu/id6818105760",
    // Google Play: https://play.google.com/store/apps/details?id=com.sevenedu.app
  },
  {
    id: 6,
    slug: "lc-system", // → app/assets/projects/lc-system/
    title: "LC System / Nester — O‘quv markazi tizimi",
    category: "Veb-sayt",
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "O‘quv markazlari",
    summary:
      "O‘quv markazlari uchun o‘quvchi, guruh, jadval, davomat, moliya, maosh, CRM va Telegram ish jarayonlarini birlashtirgan boshqaruv tizimi.",
    description:
      "LC System / Nester o‘quv markazining kundalik faoliyatini bitta tizimda boshqaradi. O‘quvchilar, o‘qituvchilar, dars jadvali, davomat, to‘lovlar, qarzdorlik va maoshlar o‘zaro bog‘langan. Filiallar kesimida rollar va ruxsatlar belgilanadi. Alohida boshqaruv paneli markazlar uchun mustaqil baza va sozlamalarni tayyorlaydi. Telegram botlar va Mini App eslatmalar, aloqa va tizimga chat ichidan kirish jarayonlarini qo‘llab-quvvatlaydi.",
    features: [
      "O‘quvchi, xodim, guruh, kurs va xonalar bazasi",
      "Dars jadvali, davomat, baholar va uy vazifalari",
      "To‘lov, qarzdorlik, xarajat va kassa jurnali",
      "O‘qituvchi maoshi, xodim oyligi va KPI",
      "Lidlar va qayta aloqa uchun CRM",
      "Ko‘p filialli boshqaruv va rollar bo‘yicha ruxsatlar",
      "Telegram bot, eslatmalar va Mini App",
      "Excel import va eksport",
      "Hisobotlar va amallar tarixi",
      "Markazlar uchun alohida baza va joylashtirish",
      "AI yordamidagi tahliliy hisobotlar",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Telegram Bot API"],
    liveUrl: "https://markaz.nester.uz/owner/dashboard",
  },
  {
    id: 7,
    slug: "bayyina-erp", // → app/assets/projects/bayyina-erp/
    title: "Bayyina ERP",
    category: "Veb-sayt",
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "Bayyina o‘quv markazi",
    duration: "1 oy",
    summary:
      "Administrator, o‘qituvchi va o‘quvchi uchun alohida panellarga ega o‘quv markazi boshqaruv tizimi.",
    description:
      "Bayyina ERP o‘quv markazidagi moliya, davomat, guruhlar, dars jadvali va natijalarni boshqarish uchun yaratilgan. Administrator foydalanuvchi va moliyani, o‘qituvchi guruh va baholarni, o‘quvchi esa jadval, davomat va to‘lovlarini ko‘radi. Rollar bo‘yicha kirish nazorati yagona backendda amalga oshiriladi.",
    features: [
      "Administrator, o‘qituvchi va o‘quvchi panellari",
      "Moliya, hisobot va foydalanuvchi boshqaruvi",
      "Guruh, jadval, davomat va baholar",
      "O‘quvchining to‘lov va davomat tarixi",
      "Rollar bo‘yicha kirish nazorati",
      "PostgreSQL va Prisma orqali ma’lumotlar modeli",
      "Docker orqali joylashtirish",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"],
  },
  {
    id: 8,
    slug: "dexfilm-bot", // → app/assets/projects/dexfilm-bot/
    title: "DexFilm Bot",
    category: "Veb-sayt",
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "Shaxsiy loyiha",
    duration: "2 kun",
    summary:
      "Telegram ichida filmlarni qidirish, toifalar orqali ko‘rish va boshqarish uchun bot.",
    description:
      "DexFilm foydalanuvchilarga Telegram ichida film nomi yoki toifasi bo‘yicha qidirish imkonini beradi. Bot kanalga obunani tekshiradi, administratorlarga yangi material qo‘shish va foydalanish statistikasini ko‘rish imkonini beradi. Backend Node.js’da yozilgan; ma’lumotlar yengil JSON omborida saqlanadi.",
    features: [
      "Film nomi va toifasi bo‘yicha qidiruv",
      "Kanalga obuna orqali kirishni tekshirish",
      "Yangi material qo‘shish uchun administrator boshqaruvi",
      "Foydalanish statistikasi",
      "Telegram orqali video yetkazish",
    ],
    stack: ["Node.js", "Telegraf", "Telegram Bot API", "JSON"],
    liveUrl: "https://t.me/DEX_Filmbot",
    sourceUrl: "https://github.com/boburov/kino_bot",
  },
  {
    id: 9,
    slug: "primeprint", // → app/assets/projects/primeprint/
    title: "PrimePrint",
    category: "Veb-sayt",
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "PrimePrint",
    duration: "2 hafta",
    summary:
      "Kitob chop etish uchun landing sahifa, tezkor narx kalkulyatori va Telegram orqali buyurtma qabul qilish tizimi.",
    description:
      "PrimePrint mijozga sahifa soni, format va qog‘oz turini tanlab, bosma ish narxini darhol hisoblash imkonini beradi. Tayyor buyurtma Telegram bot orqali biznes egasiga uzatiladi. Shu bilan qo‘lda narx aytish va buyurtma ma’lumotlarini qayta yig‘ish ishlari kamayadi.",
    features: [
      "Real vaqt rejimidagi narx kalkulyatori",
      "Sahifa soni, format va qog‘oz turi bo‘yicha hisoblash",
      "Telegram bot orqali buyurtma uzatish",
      "Moslashuvchan dizayn",
      "SEO uchun tayyorlangan sahifa",
    ],
    stack: ["Next.js", "Tailwind CSS", "Telegram Bot API"],
    liveUrl: "https://prime-print.uz",
  },
  {
    id: 10,
    slug: "intela-music", // → app/assets/projects/intela-music/
    title: "Intela — Musiqa pleyeri",
    category: "Veb-sayt",
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "Shaxsiy loyiha",
    duration: "1 soat",
    summary:
      "YouTube havolalaridan shaxsiy musiqa to‘plami va pleylistlar yaratish uchun web pleyer.",
    description:
      "Intela yoqqan YouTube treklarini bitta to‘plamga yig‘ish va qulay interfeysda tinglash uchun yaratilgan shaxsiy loyiha. Foydalanuvchi havola qo‘shadi, pleylist tuzadi va to‘plamdan izlaydi. Ma’lumotlar brauzer xotirasida saqlanadi; musiqa ijrosi YouTube embed imkoniyatlariga bog‘liq.",
    features: [
      "YouTube havolalari orqali trek qo‘shish",
      "Shaxsiy to‘plam va pleylistlar",
      "Brauzer xotirasida saqlash",
      "Qidiruv va saralash",
      "Sodda musiqa pleyeri interfeysi",
    ],
    stack: ["Next.js", "Tailwind CSS", "YouTube API"],
    liveUrl: "https://intela-snowy.vercel.app/",
  },
  {
    id: 11,
    slug: "alango", // → app/assets/projects/alango/
    title: "Alango — Ingliz tilini o‘yin orqali o‘rganish",
    category: "Veb-sayt",
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "Shaxsiy startup prototipi",
    summary:
      "Pixel-art dizayn, 3D voxel sahna, 6 bo‘limli xarita va o‘ynash mumkin bo‘lgan namuna darsdan iborat ingliz tili prototipi.",
    description:
      "Alango ingliz tilini qisqa o‘yin mashqlari orqali o‘rgatish g‘oyasini sinovdan o‘tkazuvchi web prototip. Unda pixel-art interfeys, tulki obrazi, 3D voxel bosh sahifa va 6 ta bo‘limdan iborat kurs xaritasi bor. Namuna darsda so‘z tarjimasini tanlash mumkin. Bu rivojlantirilayotgan prototip; AI suhbatdosh va ligalar kabi kengroq g‘oyalar tayyor imkoniyat sifatida ko‘rsatilmaydi.",
    features: [
      "Pixel-art interfeys va tulki obrazi",
      "3D voxel bosh sahifa",
      "Harakatni kamaytirish rejimi uchun statik ko‘rinish",
      "6 bo‘limli ingliz tili xaritasi",
      "O‘ynash mumkin bo‘lgan namuna lug‘at darsi",
      "Telefon va kompyuterga moslashuvchan ko‘rinish",
    ],
    stack: ["React", "Vite", "Three.js", "React Three Fiber", "Tailwind CSS"],
  },
  {
    id: 12,
    slug: "pronunciation-coach", // → app/assets/projects/pronunciation-coach/
    title: "Pronunciation Coach — Talaffuzni baholash API",
    category: "Veb-sayt",
    author: {
      name: "Boburov Shukurillo",
      portfolio: "https://boburov.uz",
      image: "https://avatars.githubusercontent.com/u/137058543?v=4",
    },
    client: "Shaxsiy loyiha / SevenEdu ekotizimi",
    summary:
      "Yozib olingan nutqni fonemalar bilan solishtirib, 8 tilda talaffuz aniqligini baholaydigan Python servisi.",
    description:
      "Servis audioyozuv, maqsad so‘z va tilni qabul qiladi. FFmpeg audioni tayyorlaydi, wav2vec2 aytilgan fonemalarni aniqlaydi, espeak-ng esa namunaviy talaffuzni yaratadi. Natija 0–100 ball va fonema ketma-ketliklari bilan qaytariladi. Model birinchi sozlashda yuklab olinadi; shundan keyin hisoblash mahalliy bajarilishi mumkin. API kalitlar, tariflar, kvota, navbat va yuklamani cheklash ham qo‘llab-quvvatlanadi.",
    features: [
      "8 tilda talaffuzni baholash",
      "Brauzerdan audio yozish interfeysi",
      "wav2vec2 va espeak-ng orqali fonema tahlili",
      "0–100 aniqlik bali va fonemalarni qaytarish",
      "FastAPI assessment, languages va health endpointlari",
      "API kalitlar, tariflar va kvotalar",
      "So‘rov tezligi va parallel hisoblash cheklovlari",
      "Navbat va foydalanish hisoboti",
    ],
    stack: ["Python", "FastAPI", "PyTorch", "Hugging Face Transformers", "wav2vec2", "FFmpeg", "espeak-ng"],
    sourceUrl: "https://github.com/boburov/edu.pronauns.api.service",
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