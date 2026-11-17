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
import { ArrowLink } from "@/components/ui/ArrowLink";
import { NewProjects } from "@/components/build/NewProjects";
import { Pill } from "@/components/ui/Pill";
import { jobSearchAssistant, newProjects, weswapcards, whatIBuildMeta, whatIBuildPage } from "@/content/projects";
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

      <div className={`container ${styles.newRow}`}>
        <NewProjects id="new-projects-title" {...newProjects} />
      </div>

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

      <section
        id={jobSearchAssistant.id}
        className={`container ${styles.secondary}`}
        aria-labelledby="job-search-assistant-title"
      >
        <div className={styles.card}>
          <p className={styles.badgeLine}>
            <Pill label={jobSearchAssistant.badge} tone="pink" size="small" />
            <span className={styles.eyebrow}>{jobSearchAssistant.eyebrow}</span>
          </p>
          <h2 id="job-search-assistant-title" className={styles.cardTitle}>
            {jobSearchAssistant.title}
          </h2>
          {jobSearchAssistant.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className={styles.cardColumns}>
            <div>
              <h3 className={styles.cardSubtitle}>{jobSearchAssistant.featuresTitle}</h3>
              <ul className={styles.features}>
                {jobSearchAssistant.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <TagList tags={jobSearchAssistant.stack} label={jobSearchAssistant.stackTitle} size="small" showLabel />
          </div>
          <p>
            <ArrowLink link={jobSearchAssistant.caseStudy} />
          </p>
        </div>
      </section>
    </>
  );
}
