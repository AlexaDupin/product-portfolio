import { caseStudies, featuredSlugs } from "@/content/caseStudies";
import type { CaseStudy, CategoryId, LiveCaseStudy } from "@/content/types";

export const isLive = (study: CaseStudy): study is LiveCaseStudy => study.status === "live";

export const liveCaseStudies = (): LiveCaseStudy[] => caseStudies.filter(isLive);

export const getLiveCaseStudy = (slug: string): LiveCaseStudy | undefined =>
  liveCaseStudies().find((study) => study.slug === slug);

export const featuredCaseStudies = (): CaseStudy[] =>
  featuredSlugs.map((slug) => {
    const study = caseStudies.find((item) => item.slug === slug);
    if (!study) {
      throw new Error(`Featured case study not found: ${slug}`);
    }
    return study;
  });

const isFeatured = (study: CaseStudy) =>
  (featuredSlugs as readonly string[]).includes(study.slug);

/** Non-featured studies in a category: live ones first, then coming soon. */
export const otherCaseStudiesIn = (category: CategoryId): CaseStudy[] =>
  caseStudies
    .filter((study) => study.category === category && !isFeatured(study))
    .sort((a, b) => Number(isLive(b)) - Number(isLive(a)));

/** Featured studies first, then the rest in content order; wraps around. */
export const nextCaseStudy = (slug: string): LiveCaseStudy => {
  const featured = featuredCaseStudies().filter(isLive);
  const ordered = [...featured, ...liveCaseStudies().filter((study) => !isFeatured(study))];
  const index = ordered.findIndex((study) => study.slug === slug);
  return ordered[(index + 1) % ordered.length];
};
