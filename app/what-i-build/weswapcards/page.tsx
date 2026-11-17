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
import { BackLink } from "@/components/build/BackLink";
import { weswapcards } from "@/content/projects";
import styles from "../project.module.css";

export const metadata: Metadata = {
  title: weswapcards.meta.title,
  description: weswapcards.meta.description,
};

export default function WeSwapCardsPage() {
  const { role, why, what, steps, stack, diagram, highlights, results } = weswapcards;

  return (
    <>
      <PageHeader eyebrow={<BackLink />} title={weswapcards.title} lead={weswapcards.tagline} />

      <article className={`container ${styles.project}`} aria-label={weswapcards.title}>
        <div className={styles.showcase}>
          <DeviceShowcase laptop={weswapcards.laptopImage} phone={weswapcards.phoneImage} />
        </div>

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
    </>
  );
}
