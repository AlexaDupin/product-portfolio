import type { Metric } from "@/content/types";
import { Metrics } from "@/components/ui/Metrics";
import styles from "./ResultBand.module.css";

interface ResultBandProps {
  title: string;
  metrics: Metric[];
}

/** A single headline number gets a wide band; several numbers use the metrics grid. */
export function ResultBand({ title, metrics }: ResultBandProps) {
  const [only] = metrics;

  if (metrics.length > 1 || !only) {
    return (
      <section className={styles.multi} aria-label={title}>
        <p className={styles.eyebrow}>{title}</p>
        <Metrics items={metrics} label={title} variant="band" />
      </section>
    );
  }

  return (
    <section className={styles.band} aria-label={title}>
      <p className={styles.eyebrow}>{title}</p>
      <p className={styles.value}>{only.value}</p>
      <div className={styles.label}>
        <p>{only.label}</p>
        {only.note && <p className={styles.note}>{only.note}</p>}
      </div>
    </section>
  );
}
