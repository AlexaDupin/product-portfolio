import type { BeforeAfter } from "@/content/types";
import styles from "./BeforeAfterTable.module.css";

interface BeforeAfterTableProps {
  data: BeforeAfter;
}

export function BeforeAfterTable({ data }: BeforeAfterTableProps) {
  const { beforeLabel, afterLabel, priorityLabel, rows } = data;

  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {priorityLabel && (
              <th scope="col" className={styles.priorityColumn}>
                {priorityLabel}
              </th>
            )}
            <th scope="col">{beforeLabel}</th>
            <th scope="col">{afterLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ before, after, priority }) => (
            <tr key={before}>
              {priorityLabel && (
                <td data-label={priorityLabel}>
                  {priority && <span className={`${styles.priority} ${styles[priority.level]}`}>{priority.label}</span>}
                </td>
              )}
              <td data-label={beforeLabel}>{before}</td>
              <td data-label={afterLabel}>{after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
