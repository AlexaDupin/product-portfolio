import Image from "next/image";
import type { TimelineEntry } from "@/content/types";
import { LineIcon as Icon } from "@/components/ui/LineIcon";
import styles from "./Timeline.module.css";

interface TimelineProps {
  items: TimelineEntry[];
  rolesLabel: string;
}

export function Timeline({ items, rolesLabel }: TimelineProps) {
  return (
    <ol className={styles.timeline}>
      {items.map(({ period, title, icon, text, logo, roles }) => (
        <li key={title} className={styles.item}>
          {logo ? (
            <Image src={logo.src} alt="" width={logo.width} height={logo.height} className={styles.logo} />
          ) : (
            <Icon name={icon} className={styles.icon} />
          )}
          <div className={styles.body}>
            <p className={styles.period}>{period}</p>
            <h3 className={styles.title}>{title}</h3>
            {text && <p className={styles.text}>{text}</p>}
            {roles && (
              <ul className={styles.roles} aria-label={`${rolesLabel}: ${title}`}>
                {roles.map((role) => (
                  <li key={role.role} className={styles.role}>
                    <Icon name={role.icon} className={styles.roleIcon} />
                    <div>
                      <h4 className={styles.roleTitle}>{role.role}</h4>
                      <p className={styles.period}>{role.period}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
