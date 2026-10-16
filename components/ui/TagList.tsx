import styles from "./TagList.module.css";

interface TagListProps {
  tags: string[];
  label: string;
  size?: "small" | "regular";
  /** White tags, for use on the soft sand blocks where the default sand tags would disappear. */
  onSoft?: boolean;
  /** Shows the label above the tags instead of only to screen readers. */
  showLabel?: boolean;
}

export function TagList({ tags, label, size = "regular", onSoft = false, showLabel = false }: TagListProps) {
  const list = (
    <ul
      className={`${styles.list} ${styles[size]} ${onSoft ? styles.onSoft : ""}`}
      aria-label={showLabel ? undefined : label}
    >
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
