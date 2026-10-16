import { person } from "./site";
import type { PageMeta } from "./types";

export const aboutMeta: PageMeta = {
  title: "About",
  description:
    "Alexa Dupin: translation project manager, 14 years at Booking.com in localization, release triage, user testing and training, now building WeSwapCards. Based in Brooklyn, NY.",
};

export const aboutPage = {
  eyebrow: "About",
  title: "I help people use products well, and I build them too.",
  lead: `Based in ${person.location}. I speak French, English and Spanish.`,
};

export const path = {
  title: "My path",
  items: [
    {
      period: "2008–2011",
      role: "Translation project manager",
      text: "Client-facing, by phone and email, from quote to delivery, in French, English and Spanish.",
    },
    {
      period: "2011–2025",
      role: "French Localization Specialist, Booking.com",
      text: "Localization, release triage, user testing and training.",
    },
    {
      period: "Since 2025",
      role: "Full-stack developer, WeSwapCards",
      text: "Building and running WeSwapCards, after a full-stack bootcamp and a French state web developer qualification in 2023.",
    },
  ],
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
