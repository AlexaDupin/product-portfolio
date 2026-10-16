import styles from "./BulletList.module.css";

interface BulletListProps {
  items: string[];
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
