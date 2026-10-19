import Link from "next/link";
import type { LiveCaseStudy } from "@/content/types";
import { caseStudyPath, categoryById } from "@/content/site";
import { caseStudyLabels } from "@/content/caseStudies";
import { Media } from "@/components/ui/Media";
import { TagList } from "@/components/ui/TagList";
import styles from "./CaseStudyCard.module.css";

interface CaseStudyCardProps {
  study: LiveCaseStudy;
  /** Adds the one-line summary and tool tags. */
  detailed?: boolean;
}

export function CaseStudyCard({ study, detailed = false }: CaseStudyCardProps) {
  const category = categoryById(study.category);

  return (
    <article className={`${styles.card} ${detailed ? styles.detailed : ""}`}>
      <Media
        image={study.image}
        className={styles.media}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        hideCaption
      />
      <div className={styles.body}>
        <p className={styles.category}>{category.label}</p>
        <h3 className={styles.title}>
          <Link href={caseStudyPath(study.slug)} className={styles.link}>
            {study.title}
          </Link>
        </h3>
        {detailed && (
          <>
            <p className={styles.summary}>{study.summary}</p>
            <TagList tags={study.tags} label={caseStudyLabels.skills} size="small" />
          </>
        )}
      </div>
    </article>
  );
}
