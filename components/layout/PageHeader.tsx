import Image from "next/image";
import type { ReactNode } from "react";
import type { ImageSpec } from "@/content/types";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  eyebrow: ReactNode;
  title: string;
  lead?: string;
  /** When it has a `src`, the image fills the header under a dark overlay. */
  background?: ImageSpec;
  children?: ReactNode;
}

/** Inner page top: the home hero gradient, or an image top when a background is given. */
export function PageHeader({ eyebrow, title, lead, background, children }: PageHeaderProps) {
  const backgroundSrc = background?.src;
  // Screenshots carry their own text, so they're blurred to keep the headline readable.
  const imageClass = `${styles.backgroundImage} ${background?.device ? styles.blurred : ""}`;

  return (
    <header className={`${styles.header} ${backgroundSrc ? styles.withImage : ""}`}>
      {backgroundSrc && (
        <Image src={backgroundSrc} alt="" fill priority sizes="100vw" className={imageClass} />
      )}
      <div className={`container ${styles.inner}`}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
        {children}
      </div>
    </header>
  );
}
