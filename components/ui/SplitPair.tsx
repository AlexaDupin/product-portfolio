import type { ReactNode } from "react";
import styles from "./SplitPair.module.css";

interface SplitPairProps {
  children: ReactNode;
}

/** Two blocks side by side on wider screens, split by a thin line; stacked on phones. */
export function SplitPair({ children }: SplitPairProps) {
  return <div className={styles.pair}>{children}</div>;
}
