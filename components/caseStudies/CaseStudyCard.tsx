import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import { caseStudyPath, categoryById, ui } from "@/content/site";
import { caseStudyLabels } from "@/content/caseStudies";
import { Media } from "@/components/ui/Media";
import { TagList } from "@/components/ui/TagList";
import { isLive } from "@/lib/caseStudies";
import styles from "./CaseStudyCard.module.css";

interface CaseStudyCardProps {
  study: CaseStudy;
  /** Adds the one-line summary and tool tags. */
  detailed?: boolean;
}

export function CaseStudyCard({ study, detailed = false }: CaseStudyCardProps) {
  const live = isLive(study);
  const category = categoryById(study.category);

  return (
    <article className={`${styles.card} ${live ? styles.live : styles.soon} ${detailed ? styles.detailed : ""}`}>
      <div className={styles.mediaWrap}>
        <Media
          image={study.image}
          className={styles.media}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          hideCaption
        />
        {!live && <span className={styles.badge}>{ui.comingSoon}</span>}
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{category.label}</p>
        <h3 className={styles.title}>
          {live ? (
            <Link href={caseStudyPath(study.slug)} className={styles.link}>
              {study.title}
            </Link>
          ) : (
            study.title
          )}
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
