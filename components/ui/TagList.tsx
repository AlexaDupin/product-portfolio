import styles from "./TagList.module.css";

interface TagListProps {
  tags: string[];
  label: string;
  size?: "small" | "regular";
  /** Shows the label above the tags instead of only to screen readers. */
  showLabel?: boolean;
}

export function TagList({ tags, label, size = "regular", showLabel = false }: TagListProps) {
  const list = (
    <ul className={`${styles.list} ${styles[size]}`} aria-label={showLabel ? undefined : label}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );

  if (!showLabel) {
    return list;
  }

  return (
    <div className={styles.labelled}>
      <p className={styles.label}>{label}</p>
      {list}
    </div>
  );
}
