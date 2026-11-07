import Banner from "./(components)/Banner";
import CallToAction from "./(components)/CallToAction";
import Services, { plans, services } from "./(components)/Services";
import WorkflowTeaser from "./(components)/WorkflowTeaser";
import Faq from "./(components)/Faq";
import JsonLd from "./(components)/JsonLd";
import { faqJsonLd } from "./lib/faq";
import { COMPANY, REGIONS, SITE_URL, ids, pageMetadata } from "./lib/site";

export const metadata = pageMetadata({
  title: `Sayt yaratish O‘zbekistonda — veb-saytlar va ilovalar | ${COMPANY.name}`,
  absoluteTitle: true,
  description:
    "Butun O‘zbekiston bo‘ylab veb-sayt, landing sahifa, mobil va desktop ilova yaratish — Toshkent, Andijon, Namangan va boshqa viloyatlar. Narxlar $120 dan, 1 oy bepul qo‘llab-quvvatlash.",
  path: "/",
});

/* "$1,000 – $3,500+" -> { min: 1000, max: 3500 } */
function priceRange(price: string) {
  const [min, max] = price.match(/[\d,]+/g)!.map((n) => Number(n.replace(/,/g, "")));
  return { min, max };
}

const serviceGraph = [
  {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `Sayt yaratish O‘zbekistonda — ${COMPANY.name}`,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.org },
    inLanguage: "uz",
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#services`,
    name: "Veb-sayt, mobil va desktop ilova yaratish",
    serviceType: "Web development",
    provider: { "@id": ids.org },
    areaServed: [
      { "@type": "Country", name: "Uzbekistan" },
      ...REGIONS.map(([, en]) => ({ "@type": "AdministrativeArea", name: en })),
    ],
    availableLanguage: ["uz", "ru", "en"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Xizmatlar va tariflar",
      itemListElement: [
        ...services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.text,
          },
        })),
        ...plans.map((p) => {
          const { min, max } = priceRange(p.price);
          return {
            "@type": "Offer",
            name: `Veb-sayt — ${p.name} tarifi`,
            description: `${p.audience}. ${p.text}`,
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "USD",
              minPrice: min,
              maxPrice: max,
            },
            itemOffered: {
              "@type": "Service",
              name: `${p.name} veb-sayt`,
              description: p.features.join(", "),
            },
          };
        }),
      ],
    },
  },
  faqJsonLd(),
];

export default function Home() {
  return (
    <>
      <JsonLd data={serviceGraph} />

      <Banner />

      <Services />

      <WorkflowTeaser />

      <Faq />

      <section className="shell page pt-0!">
        <CallToAction />
      </section>
    </>
  );
}
