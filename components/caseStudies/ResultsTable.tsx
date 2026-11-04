import styles from "./BeforeAfterTable.module.css";

interface ResultsTableProps {
  /** Names the table for screen readers. */
  label: string;
  columns: string[];
  rows: string[][];
}

/** A plain data table, styled like the before/after table and stacked the same way on phones. */
export function ResultsTable({ label, columns, rows }: ResultsTableProps) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table} aria-label={label}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td key={columns[index]} data-label={columns[index]}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
