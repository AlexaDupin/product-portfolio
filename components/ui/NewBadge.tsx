import styles from "./NewBadge.module.css";

/** Square yellow label for new work. Kept apart from Pill so it never looks like a category. */
export function NewBadge({ label }: { label: string }) {
  return <span className={styles.badge}>{label}</span>;
}
