import { weswapcardsScreens } from "./screens";
import { caseStudyPath, routes } from "./site";
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
};

export const homeMetrics: { label: string; items: Metric[] } = {
  label: "Key numbers",
  items: [
    { value: "13 years", label: "at Booking.com" },
    { value: "5 years", label: "Jira bug triage on app releases" },
    { value: "42", label: "language teams supported" },
    { value: "1,000+", label: "members on the app I built" },
  ],
};

export const aboutIntro = {
  /** Not shown; names the section for screen readers. */
  label: "About me",
  paragraphs: [
    "Most of my career has been about figuring out how products really work, and why they behave the way they do.",
    "At Booking.com, I did that alongside product and engineering teams, testing the apps before every release and training the people who tested them.",
    "Then curiosity took me to the other side: I learned to code and built my own products, from the first line of code to user support.",
    "Now I'm looking for a role close to the product and the people who use it.",
  ],
  link: { label: "More about me", href: routes.about } satisfies LinkItem,
};

export interface Achievement {
  /** Where it happened, shown as a small label above the headline. */
  context: string;
  title: string;
  text: string;
  link: LinkItem;
}

export const achievements: { title: string; items: Achievement[] } = {
  title: "Key achievements",
  items: [
    {
      context: "Booking.com",
      title: "About 90% of localization bugs fixed before release",
      text: "With an engineer, I replaced a spreadsheet engineers didn't check consistently with an in-app tool that creates Jira tickets.",
      link: { label: "In-app reporting tool", href: caseStudyPath("in-app-bug-reporting") },
    },
    {
      context: "Booking.com",
      title: "Language teams met a 48-hour testing deadline",
      text: "My testing guide and training sessions also cut non-actionable tickets sharply.",
      link: { label: "Testing guide", href: caseStudyPath("testing-guides") },
    },
    {
      context: "Booking.com",
      title: "Trained 15 teammates and 30+ linguists worldwide in app testing",
      text: "On site and over live video across time zones, walking through a real test together.",
      link: { label: "Training testers", href: caseStudyPath("training-testers") },
    },
    {
      context: "WeSwapCards",
      title: "Found and fixed a silent production outage within an hour of investigating",
      text: "Then I added monitoring so backend errors show up in Sentry.",
      link: { label: "Outage case study", href: caseStudyPath("production-outage") },
    },
  ],
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
    text: "I reproduce what users report, follow it across the product, and either fix it myself or give engineers a clear, complete picture.",
    links: [
      { label: "Release bug triage", href: caseStudyPath("release-bug-triage") },
      { label: "Sign-in loop fix", href: caseStudyPath("login-redirects") },
    ],
    image: {
      label: "Image: checking an app on a phone next to a laptop",
      alt: "A person looking at a phone, with an open laptop beside them on a desk",
      tone: "pink",
      src: "/images/photo-phone-laptop.jpg",
      width: 1600,
      height: 1067,
    },
  },
  others: [
    {
      pill: "Enable users",
      tone: "sand",
      title: "I explain technical steps so people can act on them.",
      text: "Testing guides and live training for new testers worldwide.",
      links: [
        { label: "Training testers", href: caseStudyPath("training-testers") },
        { label: "Testing guides", href: caseStudyPath("testing-guides") },
      ],
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
      text: "Usability sessions, and user reports turned into fixes on my own app.",
      links: [
        { label: "Usability research", href: caseStudyPath("usability-research") },
        { label: "User reports to fixes", href: caseStudyPath("user-reports-to-fixes") },
      ],
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
  text: "I spotted a real problem people were having, built a product to solve it and launched it on the web, iOS and Android.",
  metricsLabel: "WeSwapCards in numbers",
  metrics: [
    { value: "16,000+", label: "trades coordinated" },
    { value: "200,000+", label: "messages exchanged" },
  ] satisfies Metric[],
  link: { label: "See what I build", href: routes.whatIBuild } satisfies LinkItem,
  laptopImage: weswapcardsScreens.desktopHome,
  phoneImage: weswapcardsScreens.iosFindCard,
};
