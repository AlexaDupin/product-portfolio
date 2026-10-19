import styles from "./ProcessFlow.module.css";

interface ProcessFlowProps {
  /** Names the list for screen readers, e.g. "The new reporting flow, step by step". */
  label: string;
  nodes: { title: string; detail: string }[];
}

/** A process as boxes joined by arrows, top to bottom. The last box is the end result. Built in CSS. */
export function ProcessFlow({ label, nodes }: ProcessFlowProps) {
  return (
    <ol className={styles.flow} aria-label={label}>
      {nodes.map(({ title, detail }) => (
        <li key={title} className={styles.node}>
          <span className={styles.title}>{title}</span>
          <span className={styles.detail}>{detail}</span>
        </li>
      ))}
    </ol>
  );
}
