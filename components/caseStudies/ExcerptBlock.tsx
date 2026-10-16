import type { Excerpt } from "@/content/types";
import styles from "./ExcerptBlock.module.css";

interface ExcerptBlockProps {
  excerpt: Excerpt;
}

/** A constructed sample, always shown with its label. */
export function ExcerptBlock({ excerpt }: ExcerptBlockProps) {
  const { title, label, items } = excerpt;

  return (
    <aside className={styles.excerpt} aria-labelledby="excerpt-title">
      <p className={styles.label}>{label}</p>
      <h2 id="excerpt-title" className={styles.title}>
        {title}
      </h2>
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </aside>
  );
}
