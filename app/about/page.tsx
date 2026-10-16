import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { StorySection } from "@/components/ui/StorySection";
import { TagList } from "@/components/ui/TagList";
import { Timeline } from "@/components/about/Timeline";
import { DefinitionCards } from "@/components/ui/DefinitionCards";
import { aboutMeta, aboutPage, enjoy, languages, path, skills, thread } from "@/content/about";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: aboutMeta.title,
  description: aboutMeta.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow={aboutPage.eyebrow} title={aboutPage.title} lead={aboutPage.lead} />
      <div className={`container ${styles.body}`}>
        <StorySection id="path" title={path.title}>
          <Timeline items={path.items} rolesLabel={path.rolesLabel} />
        </StorySection>
        <StorySection id="thread" title={thread.title} paragraphs={thread.paragraphs} highlight />
        <StorySection id="enjoy" title={enjoy.title} paragraphs={enjoy.paragraphs} />
        <StorySection id="languages" title={languages.title}>
          <DefinitionCards items={languages.items} />
        </StorySection>
        <StorySection id="skills" title={skills.title}>
          <TagList tags={skills.items} label={skills.title} />
        </StorySection>
      </div>
    </>
  );
}
