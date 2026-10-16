import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Media } from "@/components/ui/Media";
import { Metrics } from "@/components/ui/Metrics";
import { StorySection } from "@/components/ui/StorySection";
import { LinkList } from "@/components/ui/LinkList";
import { TagList } from "@/components/ui/TagList";
import { ArchitectureDiagram } from "@/components/build/ArchitectureDiagram";
import { DefinitionCards } from "@/components/ui/DefinitionCards";
import { BulletList } from "@/components/ui/BulletList";
import { aiWorkflow, weswapcards, whatIBuildMeta, whatIBuildPage } from "@/content/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: whatIBuildMeta.title,
  description: whatIBuildMeta.description,
};

export default function WhatIBuildPage() {
  const { why, what, learned, stack, diagram, highlights } = weswapcards;

  return (
    <>
      <PageHeader eyebrow={whatIBuildPage.eyebrow} title={whatIBuildPage.title} lead={whatIBuildPage.lead} />

      <article className={`container ${styles.project}`} aria-labelledby="weswapcards-title">
        <header className={styles.projectHeader}>
          <h2 id="weswapcards-title" className={styles.projectTitle}>
            {weswapcards.title}
          </h2>
          <p className={styles.tagline}>{weswapcards.tagline}</p>
        </header>

        <StorySection id="why" title={why.title} paragraphs={why.paragraphs} />
        <Media image={weswapcards.image} sizes="(min-width: 800px) 760px, 100vw" />
        <StorySection id="what" title={what.title} paragraphs={what.paragraphs} />

        <StorySection id="numbers" title={weswapcards.metricsTitle}>
          <Metrics items={weswapcards.metrics} label={weswapcards.metricsTitle} variant="band" />
          <p className={styles.note}>{weswapcards.metricsNote}</p>
        </StorySection>

        <StorySection id="learned" title={learned.title} paragraphs={learned.paragraphs} highlight />

        <StorySection id="stack" title={stack.title}>
          <DefinitionCards items={stack.groups} />
          <ArchitectureDiagram {...diagram} />
        </StorySection>

        <StorySection id="highlights" title={highlights.title}>
          <BulletList items={highlights.items} />
        </StorySection>

        <StorySection id="links" title={weswapcards.linksTitle}>
          <LinkList links={weswapcards.links} />
        </StorySection>
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
