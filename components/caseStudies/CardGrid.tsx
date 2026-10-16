import type { ReactNode } from "react";
import styles from "./CardGrid.module.css";

export interface CardGridItem {
  key: string;
  node: ReactNode;
}

interface CardGridProps {
  items: CardGridItem[];
}

/** Four cards to a row on desktop, two on tablet, one on phones. */
export function CardGrid({ items }: CardGridProps) {
  return (
    <ul className={styles.grid}>
      {items.map(({ key, node }) => (
        <li key={key}>{node}</li>
      ))}
    </ul>
  );
}
