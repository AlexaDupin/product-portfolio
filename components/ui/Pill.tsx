import type { PillTone } from "@/content/types";
import styles from "./Pill.module.css";

interface PillProps {
  label: string;
  tone: PillTone;
  /** Smaller pill for use inside a label line. */
  size?: "small" | "regular";
}

export function Pill({ label, tone, size = "regular" }: PillProps) {
  return <span className={`${styles.pill} ${styles[tone]} ${size === "small" ? styles.small : ""}`}>{label}</span>;
}
