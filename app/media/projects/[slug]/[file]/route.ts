/* Serves app/assets/projects/<slug>/<file>.
   Every image is prerendered at build time (force-static + generateStaticParams),
   so production never touches the file system. In dev the folder is re-read
   on each request — drop a file in and refresh. */
import fs from "node:fs/promises";
import path from "node:path";
import {
  IMAGE_TYPES,
  PROJECTS_DIR,
  getProjects,
  listImageFiles,
} from "@/app/lib/projects";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().flatMap((p) =>
    p.images.map((img) => ({ slug: p.slug, file: img.file })),
  );
}

function decode(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string; file: string }> },
) {
  const { slug, file: rawFile } = await params;
  const file = decode(rawFile);

  // only serve names that the folder listing itself returned
  if (!listImageFiles(slug).includes(file)) {
    return new Response("Not found", { status: 404 });
  }

  const body = await fs.readFile(path.join(PROJECTS_DIR, slug, file));

  return new Response(new Uint8Array(body), {
    headers: {
      "Content-Type": IMAGE_TYPES[path.extname(file).toLowerCase()],
      "Cache-Control": "public, max-age=86400, must-revalidate",
    },
  });
}
