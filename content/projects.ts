import { weswapcardsScreens } from "./screens";
import { links } from "./site";
import type { LinkItem, Metric, PageMeta } from "./types";

export const whatIBuildMeta: PageMeta = {
  title: "What I build",
  description:
    "WeSwapCards, the trading platform I designed, built and support solo for 1,000+ WeWard card collectors on web, iOS and Android, plus a smaller AI job search workflow.",
};

export const whatIBuildPage = {
  eyebrow: "What I build",
  title: "I build products that solve a real problem for people.",
  lead: "WeSwapCards is my main project. I designed, built and run it solo, user support included.",
};

/** A link shown as a card with the destination's logo. Logos are decorative; the label names the destination. */
export interface LogoLink extends LinkItem {
  detail: string;
  logo: string;
  /** For logos that are already a full square tile: fill the whole box instead of sitting inside it. */
  logoFill?: boolean;
}

export interface DiagramNode {
  title: string;
  detail: string;
}

export const weswapcards = {
  eyebrow: "Personal project",
  title: "WeSwapCards",
  tagline: "A web and mobile app where WeWard collectors find swap partners, message about trades and track progress toward complete sets.",
  laptopImage: weswapcardsScreens.desktopHome,
  phoneImage: weswapcardsScreens.iosFindCard,
  metricsTitle: "Key metrics",
  metrics: [
    { value: "1,000+", label: "members" },
    { value: "16,000+", label: "trades coordinated" },
    { value: "200,000+", label: "messages exchanged" },
    {
      value: "317",
      label: "average monthly active users",
      note: "(Jul 2025–Feb 2026)",
    },
  ] satisfies Metric[],
  role: {
    eyebrow: "My role",
    headline: "I designed, built and run it solo, end to end",
    paragraphs: [
      "Architecture, frontend, backend, database, authentication, deployment and user support are all mine. I keep adding features, fixing what users report and answering their questions.",
    ],
  },
  why: {
    eyebrow: "Why I built it",
    headline: "Collectors had no good way to trade",
    paragraphs: [
      "WeWard collectors were trading through long lists of missing cards and duplicates, posted across social media and group chats. Finding a match meant reading everyone's lists by hand.",
      "I built WeSwapCards to give them one place to find each other, talk and trade. It launched in February 2025 after four months of development and user research.",
      "About a year later, WeWard launched a similar feature inside its own app, which confirmed the need was real.",
    ],
  },
  what: {
    eyebrow: "What it is",
    headline: "One place to find, talk and trade",
    paragraphs: [
      "WeSwapCards runs on the web and as iOS and Android apps. Collectors track the cards they have and the ones they're missing, find people who have the duplicates they need, and message each other to arrange the trade.",
    ],
  },
  steps: {
    eyebrow: "What I did",
    headline: "How I built it and how I run it.",
    items: [
      {
        title: "Shaped the product around the problem",
        text: "I based the core features on what collectors were struggling with: tracking their collection, finding swap partners and arranging trades without reading endless lists.",
      },
      {
        title: "Built the web platform",
        text: "A React web app and a Node.js/Express REST API, with PostgreSQL for data, Clerk for sign-in and Cloudinary for images.",
      },
      {
        title: "Expanded to iOS and Android",
        text: "Mobile apps in React Native with Expo and strict TypeScript, on the same API, with push notifications and user blocking and reporting to meet App Store and Play Store rules. They've been live since the end of September 2026.",
      },
      {
        title: "Run it and support users",
        text: "I handle all user support and reports myself, turn reports into fixes, and use Sentry to catch API errors in production.",
      },
    ],
  },
  stack: {
    eyebrow: "Tech stack",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native (Expo)",
      "Node.js / Express",
      "PostgreSQL",
      "Clerk",
      "Cloudinary",
      "Sentry",
    ],
  },
  diagram: {
    description:
      "Web and mobile clients call one REST API, which stores data in PostgreSQL and works with Clerk for sign-in, Cloudinary for images and Sentry for error monitoring.",
    clients: [
      { title: "Web app", detail: "React" },
      { title: "iOS and Android apps", detail: "React Native, Expo" },
    ] satisfies DiagramNode[],
    api: { title: "REST API", detail: "Node.js, Express" } satisfies DiagramNode,
    database: { title: "Database", detail: "PostgreSQL" } satisfies DiagramNode,
    services: [
      { title: "Clerk", detail: "Sign-in" },
      { title: "Cloudinary", detail: "Images" },
      { title: "Sentry", detail: "Error monitoring" },
    ] satisfies DiagramNode[],
  },
  highlights: {
    eyebrow: "Technical highlights",
    items: [
      {
        value: "1M+",
        title: "Requests in a month, at peak",
        text: "A layered REST API serves both the web app and the mobile apps.",
      },
      {
        value: "35,000+",
        title: "API calls a day, at peak",
        text: "The same API handles the busiest days for web and mobile users.",
      },
      {
        value: "10.5 → 1.2 ms",
        title: "Faster chat query",
        text: "I found a slow query over 57,000+ conversations with EXPLAIN ANALYZE and fixed it with indexes.",
      },
      {
        value: "200+",
        title: "Jest tests on mobile",
        text: "The tests cover the React Native app, written in strict TypeScript.",
      },
    ],
  },
  results: {
    eyebrow: "Results",
    items: [
      {
        title: "End-to-end ownership",
        text: "I designed, built and run the whole product solo, from the first idea to production and user support.",
      },
      {
        title: "Real usage",
        text: "1,000+ members, 16,000+ trades coordinated and 200,000+ messages exchanged.",
      },
      {
        title: "Mobile launch",
        text: "iOS and Android apps live since the end of September 2026, with 100+ downloads in the first week.",
      },
    ],
  },
  linksTitle: "Links and apps",
  linkCards: [
    {
      label: "Live website",
      detail: "Visit WeSwapCards",
      href: "https://weswapcards.com",
      external: true,
      logo: "/images/logos/weswapcards.png",
    },
    {
      label: "Android app",
      detail: "Get it on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.weswapcards.app",
      external: true,
      logo: "/images/logos/google-play.svg",
    },
    {
      label: "iOS app",
      detail: "Available on the App Store",
      href: "https://apps.apple.com/us/app/weswapcards/id6810779158",
      external: true,
      logo: "/images/logos/app-store.svg",
    },
    {
      label: "GitHub (web)",
      detail: "React and Node.js code",
      href: "https://github.com/AlexaDupin/WeSwapCards",
      external: true,
      logo: "/images/logos/github.svg",
    },
    {
      label: "GitHub (mobile)",
      detail: "React Native code",
      href: "https://github.com/AlexaDupin/WeSwapCards-native",
      external: true,
      logo: "/images/logos/github.svg",
    },
    {
      label: "Technical case study",
      detail: "On my developer portfolio",
      href: links.weswapcardsDeepDive,
      external: true,
      logo: "/images/logos/dev-portfolio.svg",
      logoFill: true,
    },
  ] satisfies LogoLink[],
};

export const aiWorkflow = {
  eyebrow: "Smaller project",
  title: "AI job search workflow",
  paragraphs: [
    "An agentic workflow I built in Claude that finds job postings and scores them against my criteria and experience, for me to review. I review every result myself.",
    "I write the prompts and instructions, run it weekly, and refine it from each run's results. It's now on version 4.",
  ],
  skillsTitle: "Skills shown",
  skills: ["AI tools", "Prompt design", "Testing and iteration", "Workflow design", "Process improvement"],
};
