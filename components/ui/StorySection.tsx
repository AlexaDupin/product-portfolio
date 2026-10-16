import type { ReactNode } from "react";
import styles from "./StorySection.module.css";

interface StorySectionProps {
  id: string;
  title: string;
  paragraphs?: string[];
  highlight?: boolean;
  children?: ReactNode;
}

/** One titled part of a case study: paragraphs plus any extra blocks. */
export function StorySection({ id, title, paragraphs = [], highlight = false, children }: StorySectionProps) {
  return (
    <section className={`${styles.section} ${highlight ? styles.highlight : ""}`} aria-labelledby={id}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}
      {children}
    </section>
  );
}
