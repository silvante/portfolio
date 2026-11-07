/* ------------------------------------------------------------------
   Server-side project helpers.

   Project text lives in app/data.js. Images live in
   app/assets/projects/<slug>/ and are discovered from disk, so adding
   a screenshot is just dropping a file in that folder.

   Images are served by app/media/projects/[slug]/[file]/route.ts, which
   is prerendered at build time — nothing reads the disk in production.
   ------------------------------------------------------------------ */
import fs from "node:fs";
import path from "node:path";
import { projects as rawProjects } from "@/app/data";

export type ProjectImage = {
  file: string;
  src: string;
  alt: string;
};

export type ProjectAuthor = {
  name: string;
  portfolio: string;
  image: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  author: ProjectAuthor;
  client: string;
  duration?: string;
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

export type ProjectWithImages = Project & { images: ProjectImage[] };

export const PROJECTS_DIR = path.join(process.cwd(), "app", "assets", "projects");

export const IMAGE_TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

/* "numeric" collation: 2.png < 10.png, and 1.png < 1b.png < 2.png */
const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

/** Image file names in app/assets/projects/<slug>/, number-sorted. */
export function listImageFiles(slug: string): string[] {
  // slug comes from data.js, but never let it walk outside the folder
  if (!/^[a-z0-9][a-z0-9-]*$/i.test(slug)) return [];

  const dir = path.join(PROJECTS_DIR, slug);
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return []; // folder not created yet — project simply has no images
  }

  return entries
    .filter(
      (e) =>
        e.isFile() &&
        !e.name.startsWith(".") &&
        path.extname(e.name).toLowerCase() in IMAGE_TYPES,
    )
    .map((e) => e.name)
    .sort(collator.compare);
}

function withImages(p: Project): ProjectWithImages {
  const images = listImageFiles(p.slug).map((file, i) => ({
    file,
    src: `/media/projects/${p.slug}/${encodeURIComponent(file)}`,
    alt: `${p.title} — rasm ${i + 1}`,
  }));
  return { ...p, images };
}

/** All projects, in the order they are written in data.js. */
export function getProjects(): ProjectWithImages[] {
  const list = rawProjects as Project[];

  if (process.env.NODE_ENV !== "production") {
    const seen = new Set<string>();
    for (const p of list) {
      if (seen.has(p.slug)) {
        throw new Error(`data.js: duplicate project slug "${p.slug}"`);
      }
      seen.add(p.slug);
    }
  }

  return list.map(withImages);
}

export function getProject(slug: string): ProjectWithImages | undefined {
  return getProjects().find((p) => p.slug === slug);
}
