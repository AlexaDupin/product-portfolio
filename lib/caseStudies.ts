import { caseStudies, featuredSlugs } from "@/content/caseStudies";
import type { CaseStudy, CategoryId, LiveCaseStudy } from "@/content/types";

const isLive = (study: CaseStudy): study is LiveCaseStudy => study.status === "live";

/** Every case study shown on the site. Unpublished (hidden) entries are left out. */
export const liveCaseStudies = (): LiveCaseStudy[] => caseStudies.filter(isLive);

export const getLiveCaseStudy = (slug: string): LiveCaseStudy | undefined =>
  liveCaseStudies().find((study) => study.slug === slug);

export const featuredCaseStudies = (): LiveCaseStudy[] =>
  featuredSlugs.map((slug) => {
    const study = getLiveCaseStudy(slug);
    if (!study) {
      throw new Error(`Featured case study not found or not live: ${slug}`);
    }
    return study;
  });

const isFeatured = (study: CaseStudy) =>
  (featuredSlugs as readonly string[]).includes(study.slug);

/** Non-featured live studies in a category, in content order. */
export const otherCaseStudiesIn = (category: CategoryId): LiveCaseStudy[] =>
  liveCaseStudies().filter((study) => study.category === category && !isFeatured(study));

/** Featured studies first, then the rest in content order; wraps around. */
export const nextCaseStudy = (slug: string): LiveCaseStudy => {
  const ordered = [...featuredCaseStudies(), ...liveCaseStudies().filter((study) => !isFeatured(study))];
  const index = ordered.findIndex((study) => study.slug === slug);
  return ordered[(index + 1) % ordered.length];
};
