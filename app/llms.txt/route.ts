/* /llms.txt — a plain-text brief for AI assistants (llmstxt.org).
   Built from the same data as the pages, so it never drifts. */
import { plans, services } from "@/app/(components)/Services";
import { faq } from "@/app/lib/faq";
import { getProjects } from "@/app/lib/projects";
import {
  COMPANY,
  CONTACT,
  FOUNDER,
  LANGUAGES,
  REGIONS,
  SAME_AS,
  SITE_URL,
  SKILLS,
} from "@/app/lib/site";

export const dynamic = "force-static";

export function GET() {
  const projects = getProjects();

  const body = `# ${COMPANY.name}

> ${COMPANY.name} (${COMPANY.short}) is a digital solutions company serving all of Uzbekistan (headquarters in Tashkent, associates in Andijan, Namangan and most other regions), founded by ${FOUNDER.fullName} (also spelled Mardonbek Khamidov / Мардонбек Хамидов). It builds websites, landing pages, mobile apps (Android, iOS), desktop apps, admin panels, Telegram/WhatsApp bot integrations and custom web applications for businesses. Website language: Uzbek. Communication: ${LANGUAGES.join(", ")}.

Also known as: ${COMPANY.alternateNames.join("; ")}.

## Company

${COMPANY.description}

- Headquarters: Tashkent, Uzbekistan
- Service area: all of Uzbekistan — ${REGIONS.map(([, en]) => en).join(", ")}
- Associates in: Andijan, Namangan and most other regions
- Phone: ${CONTACT.phone}
- Telegram: ${CONTACT.telegram}
- E-mail: ${CONTACT.email}
- Price range: ${COMPANY.priceRange} (USD)
- Principles: clear rules, transparent payments, trust

## Services

${services.map((s) => `- ${s.title}: ${s.text}`).join("\n")}

## Website plans (pricing)

${plans
  .map(
    (p) =>
      `- ${p.name} — ${p.price}. ${p.audience}. ${p.text}\n  Includes: ${p.features.join("; ")}.`,
  )
  .join("\n")}
- All plans include 1 month of free support; after that, an affordable monthly support fee.
- Custom projects get an individual quote.

## Process (6 steps)

1. Tanishuv (discovery) 2. Reja va narx (plan & price) 3. Shartnoma (contract) 4. Ishlab chiqish (development) 5. Test va tasdiqlash (testing & approval) 6. Topshirish va qo'llab-quvvatlash (handover & support)

## Founder — ${FOUNDER.name}

${FOUNDER.description}

- Also spelled: ${FOUNDER.alternateNames.join("; ")}
- Skills: ${SKILLS.join(", ")}
- Languages: ${LANGUAGES.join(", ")}
- Profiles: ${SAME_AS.join(", ")}

## FAQ (Uzbek)

${faq.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Pages

- [Home — services & pricing](${SITE_URL}/)
- [About the company](${SITE_URL}/info)
- [Founder — ${FOUNDER.name}](${SITE_URL}/founder)
- [Projects](${SITE_URL}/projects)
- [Contacts](${SITE_URL}/contacts)
${projects.map((p) => `- [Project: ${p.title}](${SITE_URL}/projects/${p.slug}): ${p.summary}`).join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
