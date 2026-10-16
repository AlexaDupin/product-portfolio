import Image from "next/image";
import type { ImageSpec } from "@/content/types";
import { DeviceFrame } from "./DeviceFrame";
import styles from "./Media.module.css";

interface MediaProps {
  image: ImageSpec;
  className?: string;
  onDark?: boolean;
  sizes?: string;
  /** Cards omit captions; the placeholder label already names the source. */
  hideCaption?: boolean;
}

/**
 * Shows the screenshot when `src` is set (inside a laptop or phone frame when `device` is set),
 * otherwise a clearly labeled placeholder.
 */
export function Media({ image, className, onDark = false, sizes = "100vw", hideCaption = false }: MediaProps) {
  const { src, alt, label, tone, caption, device, width = 1600, height = 1000 } = image;
  const frameClass = [styles.frame, className].filter(Boolean).join(" ");
  const backdrop = onDark ? styles.dark : styles[tone];

  let visual;
  if (src && device) {
    visual = (
      <div className={`${frameClass} ${styles.stage} ${backdrop}`}>
        <DeviceFrame device={device} className={styles[device]}>
          <Image src={src} alt={alt} width={width} height={height} sizes={sizes} />
        </DeviceFrame>
      </div>
    );
  } else if (src) {
    visual = <Image src={src} alt={alt} width={width} height={height} sizes={sizes} className={frameClass} />;
  } else {
    visual = (
      <div role="img" aria-label={alt} className={`${frameClass} ${styles.placeholder} ${backdrop}`}>
        <span className={styles.label}>{label}</span>
      </div>
    );
  }

  if (!caption || hideCaption) {
    return visual;
  }

  return (
    <figure className={styles.figure}>
      {visual}
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
