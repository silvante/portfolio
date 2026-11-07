import { SITE_URL, breadcrumbs, ids, pageMetadata } from "@/app/lib/site";
import JsonLd from "@/app/(components)/JsonLd";
import { MoveUpRight, Phone, Send } from "lucide-react";
import PageHeading from "@/app/(reusable)/PageHeading";
import { contacts, languages } from "@/app/data";

const PHONE_DISPLAY = "+998 94 820-94-82";
const PHONE_HREF = "tel:+998948209482";
const EMAIL = "khamidov.ko@gmail.com";
const TELEGRAM = "https://t.me/mardonbekxamidov";

/* "https://github.com/silvante/" -> "@silvante" */
function handle(url: string) {
  const slug = url.replace(/\/+$/, "").split("/").pop();
  return slug ? `@${slug}` : url;
}

const channels = [
  {
    id: "email",
    label: "E-mail",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
  },
  ...contacts.map((c) => ({
    id: `social-${c.id}`,
    label: c.name,
    value: handle(c.link),
    href: c.link,
    external: true,
  })),
];

export const metadata = pageMetadata({
  title: "Bog‘lanish — sayt yoki ilova buyurtma qilish",
  description:
    "Sayt yoki ilova buyurtma qilish uchun bog‘laning: +998 94 820-94-82, Telegram @mardonbekxamidov, khamidov.ko@gmail.com. Xamidov & Associates — butun O‘zbekiston bo‘ylab: Toshkent, Andijon, Namangan va boshqa viloyatlar.",
  path: "/contacts",
});

const contactGraph = [
  {
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contacts`,
    url: `${SITE_URL}/contacts`,
    name: "Xamidov & Associates bilan bog‘lanish",
    inLanguage: "uz",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.org },
  },
  breadcrumbs([{ name: "Bog‘lanish", path: "/contacts" }]),
];

export default function Contacts() {
  return (
    <div className="shell page space-y-[clamp(3rem,6vw,5rem)]">
      <JsonLd data={contactGraph} />

      <PageHeading eyebrow="Aloqa" text="Bog'lanish" />

      {/* Primary channel — the phone number is the hero of this page */}
      <section className="panel">
        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:items-end lg:gap-8 lg:p-12">
          <div className="space-y-6 lg:col-span-7">
            <p className="eyebrow">
              <span className="base_bg block size-1.5" />
              Asosiy aloqa
            </p>

            <a href={PHONE_HREF} className="group block w-fit max-w-full">
              <span className="block font-display text-[clamp(1.375rem,5.5vw,3.5rem)] leading-none font-bold tracking-tight whitespace-nowrap">
                {PHONE_DISPLAY}
              </span>

              <span
                aria-hidden
                className="base_bg mt-4 block h-1.5 w-0 transition-all duration-300 ease-mech group-hover:w-full"
              />
            </a>

            <p className="lead max-w-md">
              Savolingiz bormi? To&apos;g&apos;ridan-to&apos;g&apos;ri
              qo&apos;ng&apos;iroq qiling yoki qulay kanal orqali yozib
              qoldiring — albatta javob beramiz.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <a href={PHONE_HREF} className="base_btn w-full lg:w-fit">
              <Phone className="size-4" />
              Qo&apos;ng&apos;iroq qilish
            </a>

            <a
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost_btn w-full lg:w-fit"
            >
              <Send className="size-4" />
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Every other way to reach us */}
      <section className="space-y-8">
        <p className="eyebrow">
          <span className="base_bg block size-1.5" />
          Boshqa kanallar
        </p>

        <ul className="border-t border-line">
          {channels.map((c, i) => (
            <li key={c.id}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group grid gap-1 border-b border-line py-6 pl-1 transition-[padding-left,background-color] duration-300 ease-mech hover:bg-paper-2 hover:pl-5 md:grid-cols-12 md:items-center md:gap-6"
              >
                <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-3 uppercase transition-colors duration-300 ease-mech group-hover:text-brand md:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="text-title md:col-span-3">{c.label}</span>

                <span className="font-mono text-sm break-all text-ink-2 md:col-span-6">
                  {c.value}
                </span>

                <span className="hidden justify-end md:col-span-1 md:flex">
                  <MoveUpRight className="size-4 shrink-0 -translate-x-2 opacity-0 transition-all duration-300 ease-mech group-hover:translate-x-0 group-hover:opacity-100" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Practical details */}
      <section className="grid-rule sm:grid-cols-2">
        <div className="space-y-2 bg-paper p-6 sm:p-7">
          <p className="eyebrow">Hudud</p>
          <p className="text-title">Butun O&apos;zbekiston bo&apos;ylab</p>
          <p className="text-sm text-ink-3">
            Bosh ofis — Toshkent. Andijon, Namangan va boshqa viloyatlarda
            hamkorlarimiz bor.
          </p>
        </div>

        <div className="space-y-2 bg-paper p-6 sm:p-7">
          <p className="eyebrow">Muloqot tillari</p>
          <p className="text-title">
            {languages.map((l) => l.name.split(" - ")[0]).join(", ")}
          </p>
        </div>
      </section>
    </div>
  );
}
