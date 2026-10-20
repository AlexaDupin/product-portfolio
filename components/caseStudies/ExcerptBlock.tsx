import type { Excerpt } from "@/content/types";
import { LineIcon } from "@/components/ui/LineIcon";
import styles from "./ExcerptBlock.module.css";

interface ExcerptBlockProps {
  excerpt: Excerpt;
}

/** An example of real or sample guidance, shown as a message card with numbered steps. */
export function ExcerptBlock({ excerpt }: ExcerptBlockProps) {
  const { title, label, icon, items } = excerpt;

  return (
    <aside className={styles.card} aria-labelledby="excerpt-title">
      <div className={styles.header}>
        <LineIcon name={icon} className={styles.icon} />
        <h2 id="excerpt-title" className={styles.title}>
          {title}
        </h2>
      </div>
      <div className={styles.body}>
        {label && <p className={styles.label}>{label}</p>}
        <ol className={styles.list}>
          {items.map((item) => {
            const { text, example } = typeof item === "string" ? { text: item, example: undefined } : item;
            return (
              <li key={text} className={styles.item}>
                {text}
                {example && <span className={styles.example}>{example}</span>}
              </li>
            );
          })}
        </ol>
      </div>
    </aside>
  );
}
