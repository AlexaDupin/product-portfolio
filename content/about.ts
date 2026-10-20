import { person } from "./site";
import type { PageMeta, TimelineEntry } from "./types";

export const aboutMeta: PageMeta = {
  title: "About",
  description:
    "Alexa Dupin: translation project manager, 13 years at Booking.com in localization, release triage, user testing and training, now building WeSwapCards. Based in Brooklyn, NY.",
};

export const aboutPage = {
  eyebrow: "About",
  title: "I help people use products well, and I build them too.",
  lead: `Based in ${person.location}.`,
};

export const path = {
  title: "My path",
  rolesLabel: "Roles",
  items: [
    {
      period: "2008 – 2011",
      title: "Translation Project Manager",
      icon: "document",
      text: "Client-facing, by phone and email, from quote to delivery, in French, English and Spanish.",
    },
    {
      period: "2011 – 2025",
      title: "Booking.com",
      icon: "building",
      logo: { src: "/images/booking-logo.png", width: 148, height: 148 },
      text: "Localization, release triage, user testing and training. From 2019, also coordinated iOS/Android localization QA within the Mobile Support Team.",
      roles: [
        { role: "Localization Specialist", period: "2011 – 2025", icon: "globe" },
        { role: "Mobile Support Team", period: "2019 – 2025", icon: "phone" },
      ],
    },
    {
      period: "Since 2025",
      title: "Full-Stack Developer, WeSwapCards",
      icon: "code",
      text: "Building and running WeSwapCards, after a full-stack bootcamp and a professional web developer certification in 2023.",
    },
  ] satisfies TimelineEntry[],
};

export const thread = {
  title: "The common thread",
  paragraphs: [
    "I build products that solve a real problem for people, and I help people use existing products well. WeSwapCards started from a problem I saw collectors struggling with on social media.",
  ],
};

export const enjoy = {
  title: "What I enjoy",
  paragraphs: [
    "Getting deep into a product, testing it by hand, working out what's underneath and why behavior changes, then explaining it clearly to users. That's what I liked most at Booking.com, across the apps, the website and the partner products.",
    "I also enjoy improving processes and building solutions that make things easier for the people who use them.",
  ],
};

export const languages = {
  title: "Languages",
  items: [
    { term: "French", description: "Native" },
    { term: "English", description: "Fluent" },
    { term: "Spanish", description: "Professional" },
  ],
};

export const skills = {
  title: "Skills",
  items: [
    "Technical support",
    "Troubleshooting",
    "Root cause analysis",
    "Bug triage",
    "Jira",
    "SLAs",
    "Documentation",
    "Onboarding and training",
    "User research",
    "Usability testing",
    "Multilingual support",
    "React",
    "Node.js",
    "PostgreSQL",
    "REST APIs",
  ],
};
