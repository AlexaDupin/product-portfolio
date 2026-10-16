import type { ReactNode } from "react";
import type { DeviceType } from "@/content/types";
import styles from "./DeviceFrame.module.css";

interface DeviceFrameProps {
  device: DeviceType;
  children: ReactNode;
  className?: string;
}

/** A laptop or phone drawn in CSS around a real screenshot. */
export function DeviceFrame({ device, children, className }: DeviceFrameProps) {
  const frameClass = [styles[device], className].filter(Boolean).join(" ");

  if (device === "phone") {
    return (
      <div className={frameClass}>
        <div className={styles.phoneScreen}>{children}</div>
      </div>
    );
  }

  return (
    <div className={frameClass}>
      <div className={styles.laptopLid}>
        <div className={styles.laptopScreen}>{children}</div>
      </div>
      <div className={styles.laptopBase} aria-hidden="true" />
    </div>
  );
}
