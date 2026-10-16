import Image from "next/image";
import type { LogoLink } from "@/content/projects";
import { LineIcon } from "@/components/ui/LineIcon";
import { SmartLink } from "@/components/ui/SmartLink";
import styles from "./AppLinks.module.css";

interface AppLinksProps {
  links: LogoLink[];
}

/** Where to find the product and its code: one card per destination, with its logo. */
export function AppLinks({ links }: AppLinksProps) {
  return (
    <ul className={styles.grid}>
      {links.map((link) => (
        <li key={link.href}>
          <SmartLink link={link} className={styles.card}>
            <span className={`${styles.logo} ${link.logoFill ? styles.fill : ""}`}>
              <Image src={link.logo} alt="" width={44} height={44} />
            </span>
            <span className={styles.text}>
              <span className={styles.label}>{link.label}</span>
              <span className={styles.detail}>{link.detail}</span>
            </span>
            <LineIcon name="arrow" className={styles.arrow} />
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}
