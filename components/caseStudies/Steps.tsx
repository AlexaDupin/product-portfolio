import type { Step } from "@/content/types";
import styles from "./Steps.module.css";

interface StepsProps {
  steps: Step[];
}

export function Steps({ steps }: StepsProps) {
  return (
    <ol className={styles.steps}>
      {steps.map(({ title, text }, index) => (
        <li key={title} className={styles.step}>
          <span className={styles.number} aria-hidden="true">
            {index + 1}
          </span>
          <div className={styles.body}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
