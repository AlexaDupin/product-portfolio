import styles from "./DefinitionCards.module.css";

interface DefinitionCardsProps {
  items: { term: string; description: string }[];
}

/** Term and description pairs shown as small bordered cards. */
export function DefinitionCards({ items }: DefinitionCardsProps) {
  return (
    <dl className={styles.list}>
      {items.map(({ term, description }) => (
        <div key={term} className={styles.item}>
          <dt className={styles.term}>{term}</dt>
          <dd className={styles.description}>{description}</dd>
        </div>
      ))}
    </dl>
  );
}
