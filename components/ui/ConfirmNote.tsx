import { ui } from "@/content/site";
import styles from "./ConfirmNote.module.css";

interface ConfirmNoteProps {
  items: string[];
}

/** Visibly marks facts that still need the owner's confirmation. */
export function ConfirmNote({ items }: ConfirmNoteProps) {
  return (
    <aside className={styles.note} aria-label={ui.confirmLabel}>
      <p className={styles.title}>{ui.confirmLabel}</p>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>
            [{ui.confirmPrefix}: {item}]
          </li>
        ))}
      </ul>
    </aside>
  );
}
