/* 1200x630 share card — used by Google, Telegram, Facebook, LinkedIn, X
   for every page that doesn't set its own image (project pages do).
   Rendered once at build time. */
import { ImageResponse } from "next/og";
import { COMPANY, FOUNDER, CONTACT } from "./lib/site";

export const alt = `${COMPANY.name} — veb-saytlar, mobil va desktop ilovalar. Asoschi: ${FOUNDER.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0a0a0b";
const PAPER = "#ffffff";
const BRAND = "#e62d42";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          color: INK,
          padding: "72px 80px",
          position: "relative",
          backgroundImage:
            "linear-gradient(#ececee 1px, transparent 1px), linear-gradient(90deg, #ececee 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        {/* registration marks — the logo motif */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 160, height: 14, background: BRAND }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: 160, height: 14, background: BRAND }} />

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#55555c" }}>
          <div style={{ width: 12, height: 12, background: BRAND }} />
          Butun O'zbekiston bo'ylab
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            {COMPANY.name}
            <span style={{ color: BRAND }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 40, lineHeight: 1.25, color: "#2a2a2e", maxWidth: 960 }}>
            Veb-saytlar, mobil va desktop ilovalar — biznesingiz uchun.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ color: "#55555c", fontSize: 22, letterSpacing: 3, textTransform: "uppercase" }}>Asoschi</span>
            <span style={{ fontWeight: 700 }}>{FOUNDER.name}</span>
          </div>
          <div style={{ display: "flex", background: INK, color: PAPER, padding: "14px 24px", boxShadow: `6px 6px 0 0 ${BRAND}` }}>
            xamidov.uz · {CONTACT.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
