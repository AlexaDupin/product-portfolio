import type { Step } from "@/content/types";
import { ArrowLink } from "./ArrowLink";
import styles from "./Steps.module.css";

interface StepsProps {
  steps: Step[];
}

const stepNumber = (index: number) => String(index + 1).padStart(2, "0");

export function Steps({ steps }: StepsProps) {
  return (
    <ol className={styles.steps}>
      {steps.map(({ title, text, link }, index) => (
        <li key={title} className={styles.step}>
          <span className={styles.number} aria-hidden="true">
            {stepNumber(index)}
          </span>
          <div className={styles.body}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            {link && (
              <p className={styles.link}>
                <ArrowLink link={link} />
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
