import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Pill } from "@/components/ui/Pill";
import { Media } from "@/components/ui/Media";
import { TagList } from "@/components/ui/TagList";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ConfirmNote } from "@/components/ui/ConfirmNote";
import { CaseStudyDetails } from "@/components/caseStudies/CaseStudyDetails";
import { CaseSection } from "@/components/caseStudies/CaseSection";
import { ResultBand } from "@/components/caseStudies/ResultBand";
import { Steps } from "@/components/caseStudies/Steps";
import { BeforeAfterTable } from "@/components/caseStudies/BeforeAfterTable";
import { ExcerptBlock } from "@/components/caseStudies/ExcerptBlock";
import { NextCaseStudy } from "@/components/caseStudies/NextCaseStudy";
import { CaseStudyFallback } from "@/components/caseStudies/CaseStudyFallback";
import { caseStudyLabels } from "@/content/caseStudies";
import { categoryById } from "@/content/site";
import { getLiveCaseStudy, liveCaseStudies, nextCaseStudy } from "@/lib/caseStudies";
import styles from "./page.module.css";

export function generateStaticParams() {
  return liveCaseStudies().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getLiveCaseStudy(slug);
  return study ? { title: study.meta.title, description: study.meta.description } : {};
}

// Reading `params` suspends, so it sits under <Suspense> to keep client navigations instant.
// Every slug is prerendered, so direct visits get the full page, never the fallback.
export default function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  return (
    <Suspense fallback={<CaseStudyFallback label={caseStudyLabels.loading} />}>
      <CaseStudy params={params} />
    </Suspense>
  );
}

async function CaseStudy({ params }: Pick<PageProps<"/case-studies/[slug]">, "params">) {
  const { slug } = await params;
  const study = getLiveCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const category = categoryById(study.category);

  return (
    <article>
      <PageHeader
        eyebrow={<Pill label={category.label} tone={category.tone} />}
        title={study.title}
        lead={study.summary}
        background={study.image}
      >
        <CaseStudyDetails header={study.header} />
      </PageHeader>

      <div className={`container ${styles.body}`}>
        {!study.image.src && <Media image={study.image} sizes="(min-width: 800px) 840px, 100vw" />}

        <div className={styles.pair}>
          <CaseSection
            id="problem"
            eyebrow={caseStudyLabels.problem}
            headline={study.headlines.problem}
            paragraphs={study.problem}
          />
          <CaseSection
            id="responsibility"
            eyebrow={caseStudyLabels.responsibility}
            headline={study.headlines.responsibility}
            paragraphs={study.responsibility}
          />
        </div>

        {study.metrics ? (
          <ResultBand title={study.metricsTitle ?? caseStudyLabels.metrics} metrics={study.metrics} />
        ) : (
          <hr className={styles.rule} />
        )}

        <CaseSection id="what-i-did" eyebrow={caseStudyLabels.whatIDid} headline={study.headlines.whatIDid}>
          {study.steps && <Steps steps={study.steps} />}
        </CaseSection>

        {study.communication && (
          <>
            <hr className={styles.rule} />
            <CaseSection
              id="communication"
              eyebrow={caseStudyLabels.communication}
              headline={study.communication.title}
              paragraphs={study.communication.paragraphs}
            />
          </>
        )}

        {study.excerpt && <ExcerptBlock excerpt={study.excerpt} />}

        <hr className={styles.rule} />

        <CaseSection id="outcome" eyebrow={caseStudyLabels.outcome} headline={study.headlines.outcome}>
          {study.beforeAfter && <BeforeAfterTable data={study.beforeAfter} />}
          {study.outcome.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </CaseSection>

        <CaseSection id="approach" eyebrow={caseStudyLabels.approach} paragraphs={study.approach} variant="soft">
          <TagList tags={study.tags} label={caseStudyLabels.skills} showLabel />
        </CaseSection>

        {study.deepDive && <ArrowLink link={study.deepDive} />}

        {study.confirm && <ConfirmNote items={study.confirm} />}

        <NextCaseStudy study={nextCaseStudy(study.slug)} />
      </div>
    </article>
  );
}
