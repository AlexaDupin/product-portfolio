import styles from "./StatCards.module.css";

interface StatCardsProps {
  items: { value: string; title: string; text: string }[];
}

/** A grid of cards, each led by one number in ink, then a title and one line of context. */
export function StatCards({ items }: StatCardsProps) {
  return (
    <ul className={styles.grid}>
      {items.map(({ value, title, text }) => (
        <li key={title} className={styles.card}>
          <p className={styles.value}>{value}</p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </li>
      ))}
    </ul>
  );
}
