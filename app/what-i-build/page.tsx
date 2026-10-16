import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { DeviceShowcase } from "@/components/ui/DeviceShowcase";
import { Metrics } from "@/components/ui/Metrics";
import { LabeledSection } from "@/components/ui/LabeledSection";
import { SplitPair } from "@/components/ui/SplitPair";
import { Steps } from "@/components/ui/Steps";
import { InfoColumns } from "@/components/ui/InfoColumns";
import { TagList } from "@/components/ui/TagList";
import { StatCards } from "@/components/ui/StatCards";
import { ArchitectureDiagram } from "@/components/build/ArchitectureDiagram";
import { AppLinks } from "@/components/build/AppLinks";
import { aiWorkflow, weswapcards, whatIBuildMeta, whatIBuildPage } from "@/content/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: whatIBuildMeta.title,
  description: whatIBuildMeta.description,
};

export default function WhatIBuildPage() {
  const { role, why, what, steps, stack, diagram, highlights, results } = weswapcards;

  return (
    <>
      <PageHeader eyebrow={whatIBuildPage.eyebrow} title={whatIBuildPage.title} lead={whatIBuildPage.lead} />

      <article className={`container ${styles.project}`} aria-labelledby="weswapcards-title">
        <header className={styles.intro}>
          <div className={styles.introText}>
            <p className={styles.eyebrow}>{weswapcards.eyebrow}</p>
            <h2 id="weswapcards-title" className={styles.projectTitle}>
              {weswapcards.title}
            </h2>
            <p className={styles.tagline}>{weswapcards.tagline}</p>
          </div>
          <DeviceShowcase laptop={weswapcards.laptopImage} phone={weswapcards.phoneImage} />
        </header>

        <section className={styles.metrics} aria-labelledby="metrics-title">
          <p id="metrics-title" className={styles.eyebrow}>
            {weswapcards.metricsTitle}
          </p>
          <Metrics items={weswapcards.metrics} label={weswapcards.metricsTitle} variant="row" />
        </section>

        <LabeledSection id="role" variant="soft" {...role} />

        <SplitPair>
          <LabeledSection id="why" {...why} />
          <LabeledSection id="what" {...what} />
        </SplitPair>

        <hr className={styles.rule} />

        <LabeledSection id="what-i-did" eyebrow={steps.eyebrow} headline={steps.headline}>
          <Steps steps={steps.items} />
        </LabeledSection>

        <hr className={styles.rule} />

        <LabeledSection id="stack" eyebrow={stack.eyebrow}>
          <TagList tags={stack.items} label={stack.eyebrow} />
          <ArchitectureDiagram {...diagram} />
        </LabeledSection>

        <LabeledSection id="highlights" eyebrow={highlights.eyebrow}>
          <StatCards items={highlights.items} />
        </LabeledSection>

        <hr className={styles.rule} />

        <LabeledSection id="results" eyebrow={results.eyebrow}>
          <InfoColumns items={results.items} />
        </LabeledSection>

        <LabeledSection id="links" eyebrow={weswapcards.linksTitle}>
          <AppLinks links={weswapcards.linkCards} />
        </LabeledSection>
      </article>

      <section className={`container ${styles.secondary}`} aria-labelledby="ai-workflow-title">
        <div className={styles.card}>
          <p className={styles.eyebrow}>{aiWorkflow.eyebrow}</p>
          <h2 id="ai-workflow-title" className={styles.cardTitle}>
            {aiWorkflow.title}
          </h2>
          {aiWorkflow.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <TagList tags={aiWorkflow.skills} label={aiWorkflow.skillsTitle} size="small" showLabel />
        </div>
      </section>
    </>
  );
}
