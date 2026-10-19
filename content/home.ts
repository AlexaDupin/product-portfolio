import { weswapcardsScreens } from "./screens";
import { anchors, caseStudyPath, routes } from "./site";
import type { ImageSpec, LinkItem, Metric, PageMeta, PillTone } from "./types";

export const homeMeta: PageMeta = {
  title: "Alexa Dupin | Product Specialist & Technical Support",
  description:
    "Product Specialist and technical support in New York. I reproduce and triage issues, explain technical steps clearly, and bring what users struggle with back to the product.",
};

export const hero = {
  eyebrow: "Product Specialist · Technical Support",
  title: "Where engineering meets users.",
  subtitle: "I get to know products inside out, then help people use them.",
  primaryCta: { label: "See what I do", href: `#${anchors.whatIDoBest}` } satisfies LinkItem,
  secondaryCta: { label: "Get in touch", href: `#${anchors.contact}` } satisfies LinkItem,
};

export const homeMetrics: { label: string; items: Metric[] } = {
  label: "Key numbers",
  items: [
    { value: "5 years", label: "Jira bug triage on app releases" },
    { value: "42", label: "language teams supported" },
    { value: "30+", label: "usability sessions moderated" },
    { value: "1,000+", label: "members on the app I built" },
  ],
};

export const intro = {
  title: "I've worked on both sides of a product.",
  cards: [
    {
      pill: "With users",
      tone: "pink",
      text: "At Booking.com, I moderated usability sessions, answered testers' questions, and trained new hires to use and test the apps.",
    },
    {
      pill: "With engineers",
      tone: "sand",
      text: "I reproduced and triaged release bugs for five years, then learned to code and built my own app from scratch.",
    },
  ] satisfies { pill: string; tone: PillTone; text: string }[],
};

export interface Strength {
  pill: string;
  tone: PillTone;
  title: string;
  text: string;
  links: LinkItem[];
  image: ImageSpec;
}

export const strengths: {
  title: string;
  lead: string;
  featured: Strength;
  others: Strength[];
} = {
  title: "What I do best",
  lead: "Whether it's a bug report, a confused user or a new team member, I work out what's really going on and make it easier for the next person.",
  featured: {
    pill: "Resolve issues",
    tone: "pink",
    title: "I find the real cause behind a problem.",
    text: "I reproduce what users report, follow it across the product and hand engineers a clear, complete picture. Five years of app release triage at Booking.com, and every issue on my own app.",
    links: [
      { label: "Release bug triage", href: caseStudyPath("release-bug-triage") },
      { label: "Sign-in loop fix", href: caseStudyPath("login-redirects") },
    ],
    image: {
      label: "Image: a bug report next to the fixed screen",
      alt: "Hands holding a phone with an app open, in front of a laptop on a desk",
      tone: "pink",
      src: "/images/photo-phone-testing.jpg",
      width: 1600,
      height: 1200,
    },
  },
  others: [
    {
      pill: "Enable users",
      tone: "sand",
      title: "I explain technical steps so people can act on them.",
      text: "Testing guides for 42 teams and live training for new testers worldwide.",
      links: [{ label: "Training new testers", href: caseStudyPath("training-testers") }],
      image: {
        label: "Image: training",
        alt: "A person on a group video call, with several participants on a laptop screen",
        tone: "sand",
        src: "/images/photo-video-call.jpg",
        width: 1600,
        height: 1280,
      },
    },
    {
      pill: "Understand users",
      tone: "pink",
      title: "I bring what users struggle with back to the product.",
      text: "30+ usability sessions, and user reports turned into fixes on my own app.",
      links: [{ label: "Usability research", href: caseStudyPath("usability-research") }],
      image: {
        label: "Image: usability session",
        alt: "Two women at a table, one using a laptop while the other watches and talks with her",
        tone: "pink",
        src: "/images/photo-usability.jpg",
        width: 1600,
        height: 1067,
      },
    },
  ],
};

export const homeCaseStudies = {
  title: "Case studies",
  seeAll: { label: "See all case studies", href: routes.caseStudies } satisfies LinkItem,
};

export const projectBand = {
  eyebrow: "What I build",
  title: "WeSwapCards",
  text: "Collectors were posting long lists of missing cards and duplicates across social media and group chats. I built one place for them to find each other, talk and trade, on the web and as iOS and Android apps. I run it solo, user support included.",
  metricsLabel: "WeSwapCards in numbers",
  metrics: [
    { value: "16,000+", label: "trades coordinated" },
    { value: "200,000+", label: "messages exchanged" },
  ] satisfies Metric[],
  link: { label: "See what I build", href: routes.whatIBuild } satisfies LinkItem,
  laptopImage: weswapcardsScreens.desktopHome,
  phoneImage: weswapcardsScreens.iosFindCard,
};
