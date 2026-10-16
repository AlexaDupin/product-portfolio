import styles from "./CaseStudyFallback.module.css";

interface CaseStudyFallbackProps {
  label: string;
}

/** Plain page-top band shown for the instant before a case study renders on client navigation. */
export function CaseStudyFallback({ label }: CaseStudyFallbackProps) {
  return (
    <div className={styles.fallback} role="status">
      <span className="visually-hidden">{label}</span>
    </div>
  );
}
