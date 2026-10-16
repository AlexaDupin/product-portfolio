import type { ImageSpec } from "./types";

/** Real WeSwapCards screenshots, shared by every page that shows the product. */
export const weswapcardsScreens = {
  desktopHome: {
    label: "Screenshot: WeSwapCards home page on desktop",
    alt: "WeSwapCards home page on a laptop: \"Your duplicates are someone else's missing card\", with two collectible cards",
    tone: "pink",
    src: "/images/weswapcards-desktop-home.webp",
    width: 2000,
    height: 1056,
    device: "laptop",
  },
  desktopChapters: {
    label: "Screenshot: WeSwapCards chapters on desktop",
    alt: "WeSwapCards on a laptop showing card chapters such as Sweden, Legends of Olympus, Copenhagen and Bavaria",
    tone: "pink",
    src: "/images/weswapcards-desktop-chapters.webp",
    width: 2000,
    height: 1125,
    device: "laptop",
  },
  iosFindCard: {
    label: "Screenshot: WeSwapCards iOS app",
    alt: "WeSwapCards iOS app on a phone: the Find a card screen listing chapters such as Bavaria, South Korea, Toronto and Lyon",
    tone: "pink",
    src: "/images/weswapcards-ios-find-card.webp",
    width: 924,
    height: 2000,
    device: "phone",
  },
} satisfies Record<string, ImageSpec>;
