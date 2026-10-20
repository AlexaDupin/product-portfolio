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
import { LabeledSection } from "@/components/ui/LabeledSection";
import { SplitPair } from "@/components/ui/SplitPair";
import { ResultBand } from "@/components/caseStudies/ResultBand";
import { Steps } from "@/components/ui/Steps";
import { InfoColumns } from "@/components/ui/InfoColumns";
import { BeforeAfterTable } from "@/components/caseStudies/BeforeAfterTable";
import { ExcerptBlock } from "@/components/caseStudies/ExcerptBlock";
import { ProcessFlow } from "@/components/caseStudies/ProcessFlow";
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
  // A real image becomes the hero background; a placeholder stays in the body.
  const imageInHero = Boolean(study.image.src);

  return (
    <article>
      <PageHeader
        eyebrow={<Pill label={category.label} tone={category.tone} />}
        title={study.title}
        lead={study.summary}
        background={imageInHero ? study.image : undefined}
      >
        <CaseStudyDetails header={study.header} />
      </PageHeader>

      <div className={`container ${styles.body}`}>
        {!imageInHero && <Media image={study.image} sizes="(min-width: 800px) 840px, 100vw" />}

        <SplitPair>
          <LabeledSection
            id="problem"
            eyebrow={caseStudyLabels.problem}
            headline={study.headlines.problem}
            paragraphs={study.problem}
          >
            {study.links?.problem && (
              <p>
                <ArrowLink link={study.links.problem} />
              </p>
            )}
          </LabeledSection>
          <LabeledSection
            id="responsibility"
            eyebrow={caseStudyLabels.responsibility}
            headline={study.headlines.responsibility}
            paragraphs={study.responsibility}
          />
        </SplitPair>

        {study.metrics ? (
          <ResultBand title={study.metricsTitle ?? caseStudyLabels.metrics} metrics={study.metrics} />
        ) : (
          <hr className={styles.rule} />
        )}

        <LabeledSection id="what-i-did" eyebrow={caseStudyLabels.whatIDid} headline={study.headlines.whatIDid}>
          {study.steps && <Steps steps={study.steps} />}
        </LabeledSection>

        {study.flow && (
          <LabeledSection id="process" eyebrow={caseStudyLabels.flow} headline={study.flow.headline}>
            <ProcessFlow label={study.flow.label} nodes={study.flow.nodes} />
          </LabeledSection>
        )}

        {study.communication && (
          <>
            <hr className={styles.rule} />
            {/* The explanation sits beside the example of what users received, when there is one. */}
            <div className={study.excerpt ? styles.withExample : undefined}>
              <LabeledSection
                id="communication"
                eyebrow={caseStudyLabels.communication}
                headline={study.communication.title}
                paragraphs={study.communication.paragraphs}
              />
              {study.excerpt && <ExcerptBlock excerpt={study.excerpt} />}
            </div>
          </>
        )}

        {study.excerpt && !study.communication && <ExcerptBlock excerpt={study.excerpt} />}

        {study.usage && (
          <LabeledSection id="usage" eyebrow={study.usage.title}>
            <InfoColumns items={study.usage.items} />
          </LabeledSection>
        )}

        <hr className={styles.rule} />

        <LabeledSection
          id="outcome"
          eyebrow={study.outcomeLabel ?? caseStudyLabels.outcome}
          headline={study.headlines.outcome}
        >
          {study.beforeAfter && <BeforeAfterTable data={study.beforeAfter} />}
          {study.outcome.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          {study.links?.outcome && (
            <p>
              <ArrowLink link={study.links.outcome} />
            </p>
          )}
        </LabeledSection>

        <LabeledSection id="approach" eyebrow={caseStudyLabels.approach} paragraphs={study.approach} variant="soft">
          <TagList tags={study.tags} label={caseStudyLabels.skills} showLabel onSoft />
        </LabeledSection>

        {(study.links?.end || study.deepDive) && (
          <div className={styles.endLinks}>
            {study.links?.end?.map((link) => (
              <ArrowLink key={link.href} link={link} />
            ))}
            {study.deepDive && <ArrowLink link={study.deepDive} />}
          </div>
        )}

        {study.confirm && <ConfirmNote items={study.confirm} />}

        <NextCaseStudy study={nextCaseStudy(study.slug)} />
      </div>
    </article>
  );
}
