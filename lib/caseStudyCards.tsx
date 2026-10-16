import { CaseStudyCard } from "@/components/caseStudies/CaseStudyCard";
import type { CardGridItem } from "@/components/caseStudies/CardGrid";
import type { CaseStudy, CategoryId } from "@/content/types";

export interface CaseStudyCardItem extends CardGridItem {
  category: CategoryId;
}

/** Renders case studies as card items ready for a CardGrid. */
export const toCardItems = (studies: CaseStudy[], detailed = false): CaseStudyCardItem[] =>
  studies.map((study) => ({
    key: study.slug,
    category: study.category,
    node: <CaseStudyCard study={study} detailed={detailed} />,
  }));
