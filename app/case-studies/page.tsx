import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CaseStudyFilter, type FilterSection } from "@/components/caseStudies/CaseStudyFilter";
import { caseStudiesMeta, caseStudiesPage } from "@/content/caseStudies";
import { categories } from "@/content/site";
import { featuredCaseStudies, otherCaseStudiesIn } from "@/lib/caseStudies";
import { toCardItems } from "@/lib/caseStudyCards";

export const metadata: Metadata = {
  title: caseStudiesMeta.title,
  description: caseStudiesMeta.description,
};

export default function CaseStudiesPage() {
  const sections: FilterSection[] = [
    {
      id: "featured",
      title: caseStudiesPage.featuredTitle,
      items: toCardItems(featuredCaseStudies(), true),
    },
    ...categories.map((category) => ({
      id: category.id,
      title: category.label,
      description: category.description,
      items: toCardItems(otherCaseStudiesIn(category.id), true),
    })),
  ];

  return (
    <>
      <PageHeader
        eyebrow={caseStudiesPage.eyebrow}
        title={caseStudiesPage.title}
        lead={caseStudiesPage.lead}
      />
      <div className="container section">
        <CaseStudyFilter
          label={caseStudiesPage.filterLabel}
          allLabel={caseStudiesPage.allLabel}
          options={categories.map(({ id, label }) => ({ id, label }))}
          sections={sections}
        />
      </div>
    </>
  );
}
