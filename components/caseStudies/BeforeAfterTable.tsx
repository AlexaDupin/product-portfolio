import type { BeforeAfter } from "@/content/types";
import styles from "./BeforeAfterTable.module.css";

interface BeforeAfterTableProps {
  data: BeforeAfter;
}

export function BeforeAfterTable({ data }: BeforeAfterTableProps) {
  const { beforeLabel, afterLabel, rows } = data;

  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">{beforeLabel}</th>
            <th scope="col">{afterLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ before, after }) => (
            <tr key={before}>
              <td data-label={beforeLabel}>{before}</td>
              <td data-label={afterLabel}>{after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
