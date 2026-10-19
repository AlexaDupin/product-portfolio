import { monogramIcon } from "@/lib/monogramIcon";

// Browser tab icon, generated at build time. 64px stays sharp on high-density screens.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return monogramIcon(size.width, true);
}
