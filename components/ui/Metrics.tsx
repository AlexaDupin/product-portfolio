import type { Metric } from "@/content/types";
import styles from "./Metrics.module.css";

interface MetricsProps {
  items: Metric[];
  label: string;
  variant?: "strip" | "band" | "inline" | "row";
}

/**
 * strip: full-width row with dividers and glass figures (home).
 * row: centred row with dividers, plain ink figures.
 * band: bordered grid inside a page.
 * inline: compact pair on dark backgrounds.
 */
export function Metrics({ items, label, variant = "band" }: MetricsProps) {
  return (
    <dl className={`${styles.list} ${styles[variant]}`} aria-label={label}>
      {items.map(({ value, label: itemLabel, note }) => (
        <div key={itemLabel} className={styles.item}>
          <dt className={styles.label}>{itemLabel}</dt>
          <dd className={styles.value}>{value}</dd>
          {note && <dd className={styles.note}>{note}</dd>}
        </div>
      ))}
    </dl>
  );
}
