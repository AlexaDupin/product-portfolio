import Image from "next/image";
import type { ImageSpec } from "@/content/types";
import { DeviceFrame } from "./DeviceFrame";
import styles from "./DeviceShowcase.module.css";

interface DeviceShowcaseProps {
  laptop: ImageSpec;
  phone: ImageSpec;
}

const toImage = ({ src = "", alt, width = 1600, height = 1000 }: ImageSpec, sizes: string) => (
  <Image src={src} alt={alt} width={width} height={height} sizes={sizes} />
);

/** Web on a laptop with the mobile app on a phone overlapping its front corner. */
export function DeviceShowcase({ laptop, phone }: DeviceShowcaseProps) {
  return (
    <div className={styles.showcase}>
      <DeviceFrame device="laptop" className={styles.laptop}>
        {toImage(laptop, "(min-width: 1024px) 45vw, 90vw")}
      </DeviceFrame>
      <DeviceFrame device="phone" className={styles.phone}>
        {toImage(phone, "(min-width: 1024px) 12vw, 25vw")}
      </DeviceFrame>
    </div>
  );
}
