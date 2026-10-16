import type { CaseStudyHeader } from "@/content/types";
import { caseStudyLabels } from "@/content/caseStudies";
import styles from "./CaseStudyDetails.module.css";

interface CaseStudyDetailsProps {
  header: CaseStudyHeader;
}

const fields = ["role", "context", "timeline", "tools"] as const;

/** Role · Context · Timeline · Tools, showing only the fields that exist. */
export function CaseStudyDetails({ header }: CaseStudyDetailsProps) {
  const present = fields.filter((field) => header[field]);

  return (
    <dl className={styles.details} aria-label={caseStudyLabels.details}>
      {present.map((field) => (
        <div key={field} className={styles.item}>
          <dt className={styles.term}>{caseStudyLabels[field]}</dt>
          <dd>{header[field]}</dd>
        </div>
      ))}
    </dl>
  );
}
