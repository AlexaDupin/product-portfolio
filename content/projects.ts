import { weswapcardsScreens } from "./screens";
import { links } from "./site";
import type { LinkItem, Metric, PageMeta } from "./types";

export const whatIBuildMeta: PageMeta = {
  title: "What I build",
  description:
    "WeSwapCards, the trading platform I designed, built and support alone for 1,000+ WeWard card collectors on web, iOS and Android, plus a smaller AI job search workflow.",
};

export const whatIBuildPage = {
  eyebrow: "What I build",
  title: "I build products that solve a real problem for people.",
  lead: "WeSwapCards is my main project. I designed, built and run it alone, user support included.",
};

export interface DiagramNode {
  title: string;
  detail: string;
}

export const weswapcards = {
  title: "WeSwapCards",
  tagline: "A platform where WeWard collectors find swap partners, message about trades and track progress toward complete sets.",
  why: {
    title: "Why I built it",
    paragraphs: [
      "WeWard card collectors were posting long lists of the cards they were missing and the duplicates they could trade, on social media and across scattered group chats. Finding a match meant reading through everyone's lists by hand, and people lost track of who had what.",
      "No good tool existed, so I built WeSwapCards to give them one place to find each other, talk and trade. It launched in February 2025 after four months of development.",
      "About a year later, WeWard launched a similar feature inside its own app, which confirmed the need was real.",
    ],
  },
  what: {
    title: "What it is",
    paragraphs: [
      "WeSwapCards runs on the web and as iOS and Android apps. I designed, built and run it alone: architecture, frontend, backend, database, auth, deployment and user support.",
    ],
  },
  laptopImage: weswapcardsScreens.desktopHome,
  phoneImage: weswapcardsScreens.iosFindCard,
  metricsTitle: "Key numbers",
  metrics: [
    { value: "1,000+", label: "members" },
    { value: "16,000+", label: "trades coordinated" },
    { value: "200,000+", label: "messages exchanged" },
    { value: "317", label: "average monthly active users, July 2025 to February 2026 (peak 334 in January 2026)" },
    { value: "35,000+", label: "API calls a day, at peak" },
    { value: "100+", label: "app downloads in the first week across both stores" },
  ] satisfies Metric[],
  metricsNote: "Mobile apps live on the App Store and Google Play since the end of September 2026.",
  learned: {
    title: "What I learned",
    paragraphs: [
      "Activity dropped after WeWard launched its own feature. The mobile apps are partly a response: a way to compete on a different surface.",
    ],
  },
  stack: {
    title: "Stack",
    groups: [
      {
        term: "Web",
        description:
          "JavaScript: React, Node.js/Express REST API, PostgreSQL, Clerk auth, Cloudinary, Sentry. Hosted on o2switch.",
      },
      {
        term: "Mobile",
        description: "React Native with Expo and strict TypeScript, using the same API.",
      },
    ],
  },
  diagram: {
    title: "How it fits together",
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
    title: "Highlights",
    items: [
      "A layered REST API serving web and mobile, with a peak of 1M+ requests in a month.",
      "Found a slow chat query over 57,000+ conversations with EXPLAIN ANALYZE. Indexes cut it from 10.5 ms to 1.2 ms.",
      "A mobile app with 200+ Jest tests, push notifications, and user blocking and reporting to meet App Store and Play Store rules.",
      "I handle all user support and reports myself.",
    ],
  },
  linksTitle: "Links",
  links: [
    { label: "Live site", href: "https://weswapcards.com", external: true },
    { label: "App Store", href: "https://apps.apple.com/us/app/weswapcards/id6810779158", external: true },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.weswapcards.app",
      external: true,
    },
    { label: "GitHub (web)", href: "https://github.com/AlexaDupin/WeSwapCards", external: true },
    { label: "GitHub (mobile)", href: "https://github.com/AlexaDupin/WeSwapCards-native", external: true },
    { label: "Full technical case study", href: links.weswapcardsDeepDive, external: true },
  ] satisfies LinkItem[],
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
