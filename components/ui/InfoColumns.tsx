import styles from "./InfoColumns.module.css";

interface InfoColumnsProps {
  items: { title: string; text: string }[];
}

/** Short titled points side by side, split by thin lines; stacked on phones. */
export function InfoColumns({ items }: InfoColumnsProps) {
  return (
    <ul className={styles.columns}>
      {items.map(({ title, text }) => (
        <li key={title} className={styles.column}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </li>
      ))}
    </ul>
  );
}
