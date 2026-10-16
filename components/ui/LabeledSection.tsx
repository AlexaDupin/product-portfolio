import type { ReactNode } from "react";
import styles from "./LabeledSection.module.css";

interface LabeledSectionProps {
  id: string;
  eyebrow: string;
  headline?: string;
  paragraphs?: string[];
  /** "plain" sits on white; "soft" sits on the soft sand block. */
  variant?: "plain" | "soft";
  children?: ReactNode;
}

/** One part of a page: small accent label, one-line headline, then the detail. */
export function LabeledSection({
  id,
  eyebrow,
  headline,
  paragraphs = [],
  variant = "plain",
  children,
}: LabeledSectionProps) {
  return (
    <section className={`${styles.section} ${styles[variant]}`} aria-labelledby={id}>
      <p className={styles.eyebrow} id={headline ? undefined : id}>
        {eyebrow}
      </p>
      {headline && (
        <h2 id={id} className={styles.headline}>
          {headline}
        </h2>
      )}
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}
      {children}
    </section>
  );
}
