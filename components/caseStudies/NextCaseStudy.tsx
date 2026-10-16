import Link from "next/link";
import type { LiveCaseStudy } from "@/content/types";
import { caseStudyLabels } from "@/content/caseStudies";
import { caseStudyPath, routes, ui } from "@/content/site";
import { ArrowLink } from "@/components/ui/ArrowLink";
import styles from "./NextCaseStudy.module.css";

interface NextCaseStudyProps {
  study: LiveCaseStudy;
}

export function NextCaseStudy({ study }: NextCaseStudyProps) {
  return (
    <nav className={styles.nav} aria-label={caseStudyLabels.next}>
      <Link href={caseStudyPath(study.slug)} className={styles.next}>
        <span className={styles.label}>{caseStudyLabels.next}</span>
        <span className={styles.title}>
          {study.title}
          <span aria-hidden="true"> {ui.arrow}</span>
        </span>
      </Link>
      <ArrowLink link={{ label: caseStudyLabels.back, href: routes.caseStudies }} />
    </nav>
  );
}
