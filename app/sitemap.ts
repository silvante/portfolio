/* /sitemap.xml — generated at build time from the real routes,
   so every new project in data.js is listed automatically. */
import type { MetadataRoute } from "next";
import { getProjects } from "./lib/projects";
import { FOUNDER, SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, priority: 1, changeFrequency: "weekly" },
    { url: `${SITE_URL}/info`, priority: 0.9, changeFrequency: "monthly" },
    {
      url: `${SITE_URL}/founder`,
      priority: 0.9,
      changeFrequency: "monthly",
      images: [`${SITE_URL}${FOUNDER.image}`],
    },
    { url: `${SITE_URL}/projects`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${SITE_URL}/contacts`, priority: 0.8, changeFrequency: "yearly" },
  ].map((p) => ({ ...p, lastModified: now }) as MetadataRoute.Sitemap[number]);

  const projects: MetadataRoute.Sitemap = getProjects().map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
    images: p.images.map((img) => `${SITE_URL}${img.src}`),
  }));

  return [...pages, ...projects];
}
