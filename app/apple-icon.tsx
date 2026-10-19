import { monogramIcon } from "@/lib/monogramIcon";

// iPhone and iPad home screen and bookmark icon, generated at build time.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return monogramIcon(size.width, false);
}
