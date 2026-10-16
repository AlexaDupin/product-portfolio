import type { Category, CategoryId, LinkItem, PageMeta } from "./types";

export const person = {
  name: "Alexa Dupin",
  location: "Brooklyn, NY",
  languages: "French · English · Spanish",
};

export const siteUrl = "https://alexadupin.vercel.app";

export const links = {
  linkedin: "https://www.linkedin.com/in/alexa-dupin/",
  github: "https://github.com/AlexaDupin",
  devPortfolio: "https://alexadupin.vercel.app",
  weswapcardsDeepDive: "https://alexadupin.vercel.app/work/weswapcards",
} as const;

export const anchors = {
  main: "main",
  contact: "contact",
  whatIDoBest: "what-i-do-best",
} as const;

export const routes = {
  home: "/",
  caseStudies: "/case-studies",
  whatIBuild: "/what-i-build",
  about: "/about",
} as const;

export const caseStudyPath = (slug: string) => `${routes.caseStudies}/${slug}`;

export const nav = {
  homeLabel: `${person.name}, home`,
  items: [
    { label: "Home", href: routes.home },
    { label: "Case studies", href: routes.caseStudies },
    { label: "What I build", href: routes.whatIBuild },
    { label: "About", href: routes.about },
  ] satisfies LinkItem[],
  cta: { label: "Get in touch", href: `#${anchors.contact}` } satisfies LinkItem,
  menuOpenLabel: "Open menu",
  menuCloseLabel: "Close menu",
  navLabel: "Main",
  skipLink: "Skip to content",
};

export const contact = {
  title: "Let's talk",
  text: "Open to Product Specialist and technical support roles in New York, hybrid or remote.",
  cta: { label: "Connect on LinkedIn", href: links.linkedin, external: true } satisfies LinkItem,
};

export const footer = {
  links: [
    { label: "LinkedIn", href: links.linkedin, external: true },
    { label: "GitHub", href: links.github, external: true },
  ] satisfies LinkItem[],
  linksLabel: "Elsewhere",
};

export const ui = {
  comingSoon: "Coming soon",
  confirmLabel: "Unfinished: needs confirmation",
  confirmPrefix: "CONFIRM",
  newTabHint: "(opens in a new tab)",
  arrow: "→",
  separator: " · ",
};

export const categories: Category[] = [
  {
    id: "understand-users",
    label: "Understand users",
    tone: "pink",
    description: "Finding out where people struggle and bringing it back to the product.",
  },
  {
    id: "resolve-issues",
    label: "Resolve issues",
    tone: "pink",
    description: "Reproducing problems, finding the real cause and getting them fixed.",
  },
  {
    id: "prevent-repeats",
    label: "Prevent repeats",
    tone: "sand",
    description: "Writing things down and adding checks so the same problem doesn't come back.",
  },
  {
    id: "enable-users",
    label: "Enable users",
    tone: "sand",
    description: "Explaining technical steps so people can act on them.",
  },
];

export const categoryById = (id: CategoryId): Category => {
  const category = categories.find((item) => item.id === id);
  if (!category) {
    throw new Error(`Unknown category: ${id}`);
  }
  return category;
};

export const notFoundPage = {
  meta: { title: "Page not found", description: "This page doesn't exist." } satisfies PageMeta,
  eyebrow: "404",
  title: "This page doesn't exist.",
  lead: "The link may be out of date. The case studies are a good place to start.",
  cta: { label: "See all case studies", href: routes.caseStudies } satisfies LinkItem,
};

export const defaultMeta: PageMeta = {
  title: "Alexa Dupin | Product Specialist & Technical Support",
  description:
    "Alexa Dupin, Product Specialist and technical support in New York. Troubleshooting, bug triage, user research, onboarding and documentation, backed by hands-on product and engineering experience.",
};

export const titleTemplate = "%s | Alexa Dupin";
