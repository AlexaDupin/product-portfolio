import type { PillTone } from "@/content/types";
import styles from "./Pill.module.css";

interface PillProps {
  label: string;
  tone: PillTone;
}

export function Pill({ label, tone }: PillProps) {
  return <span className={`${styles.pill} ${styles[tone]}`}>{label}</span>;
}
