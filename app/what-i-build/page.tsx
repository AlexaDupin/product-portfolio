import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectMenu } from "@/components/build/ProjectMenu";
import { newProjects, weswapcards, whatIBuildMeta, whatIBuildPage } from "@/content/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: whatIBuildMeta.title,
  description: whatIBuildMeta.description,
};

/** A menu of projects: WeSwapCards as the big card, newer projects beside it. Each card opens its own page. */
export default function WhatIBuildPage() {
  return (
    <>
      <PageHeader eyebrow={whatIBuildPage.eyebrow} title={whatIBuildPage.title} lead={whatIBuildPage.lead} />
      <div className={`container ${styles.menu}`}>
        <ProjectMenu id="projects-title" title={whatIBuildPage.projectsTitle} main={weswapcards} others={newProjects.items} />
      </div>
    </>
  );
}
