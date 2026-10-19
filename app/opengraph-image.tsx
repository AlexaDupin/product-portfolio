import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { shareImage } from "@/content/site";

// Generated once at build time; every page uses it unless it sets its own.
export const alt = shareImage.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colors from globals.css (CSS variables don't reach this renderer): dark plum with two soft
// glows of the hero's pink, the sand pill color for the name, the pink pill color for the dots.
const background = [
  "radial-gradient(circle at 92% 8%, rgba(176, 69, 127, 0.55) 0%, rgba(176, 69, 127, 0) 48%)",
  "radial-gradient(circle at 78% 115%, rgba(161, 61, 120, 0.45) 0%, rgba(161, 61, 120, 0) 45%)",
  "linear-gradient(135deg, #2a1f27 0%, #3b2333 100%)",
].join(", ");

// TTF files: this renderer can't read the site's woff2 files from next/font. Geist is the renderer's own default font.
// Read once when the module loads, not per request, so the image stays static (prerendered at build time).
const [heading, body] = await Promise.all([
  readFile(join(process.cwd(), "assets/fonts/SchibstedGrotesk-ExtraBold.ttf")),
  readFile(join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf")),
]);

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "0 96px",
          backgroundImage: background,
          color: "#ffffff",
          fontFamily: "Geist",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 7, textTransform: "uppercase", color: "#d8b672" }}>
          {shareImage.eyebrow}
        </div>
        <div
          style={{
            marginTop: 28,
            maxWidth: 900,
            fontFamily: "Schibsted Grotesk",
            fontSize: 72,
            letterSpacing: -2,
            lineHeight: 1.04,
          }}
        >
          {shareImage.title}
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: 44, fontSize: 27, color: "#eadde6" }}>
          {shareImage.keywords.map((keyword, index) => (
            <div key={keyword} style={{ display: "flex", alignItems: "center" }}>
              {index > 0 && (
                <div style={{ width: 8, height: 8, margin: "0 18px", borderRadius: 8, background: "#bd5c8c" }} />
              )}
              {keyword}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Schibsted Grotesk", data: heading, weight: 800, style: "normal" },
        { name: "Geist", data: body, weight: 400, style: "normal" },
      ],
    },
  );
}
