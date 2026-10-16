import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  eyebrow: ReactNode;
  title: string;
  lead?: string;
  children?: ReactNode;
}

/** Flat pale pink top used on every page except Home. */
export function PageHeader({ eyebrow, title, lead, children }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
        {children}
      </div>
    </header>
  );
}
