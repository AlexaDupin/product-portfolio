import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { person } from "@/content/site";

// Read once when the module loads, not per request, so the icons stay static (prerendered at build time).
const heading = await readFile(join(process.cwd(), "assets/fonts/SchibstedGrotesk-ExtraBold.ttf"));

/**
 * The "AD" monogram in Schibsted Grotesk ExtraBold, white on plum (#3b2333, --plum in globals.css).
 * `rounded` gives the browser tab icon its own corners; iPhones round their icons themselves.
 */
export function monogramIcon(size: number, rounded: boolean) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: rounded ? size * 0.22 : 0,
          background: "#3b2333",
          color: "#ffffff",
          fontFamily: "Schibsted Grotesk",
          fontSize: size * 0.5,
          letterSpacing: -size * 0.02,
          paddingBottom: size * 0.04,
        }}
      >
        {person.initials}
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: "Schibsted Grotesk", data: heading, weight: 800, style: "normal" }],
    },
  );
}
