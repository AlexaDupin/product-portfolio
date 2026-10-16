import styles from "./Timeline.module.css";

interface TimelineProps {
  items: { period: string; role: string; text: string }[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className={styles.timeline}>
      {items.map(({ period, role, text }) => (
        <li key={role} className={styles.item}>
          <p className={styles.period}>{period}</p>
          <h3 className={styles.role}>{role}</h3>
          <p className={styles.text}>{text}</p>
        </li>
      ))}
    </ol>
  );
}
