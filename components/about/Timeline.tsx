import Image from "next/image";
import type { TimelineEntry, TimelineIcon } from "@/content/types";
import styles from "./Timeline.module.css";

interface TimelineProps {
  items: TimelineEntry[];
  rolesLabel: string;
}

const iconPaths: Record<TimelineIcon, string> = {
  document: "M7 3h7l4 4v14H7z M14 3v4h4 M10 11h5 M10 14h5 M10 17h3",
  building: "M4 21h16 M6 21V5h8v16 M14 9h4v12 M9 8h2 M9 11h2 M9 14h2 M9 17h2",
  code: "M4 5h16v14H4z M10 10l-2 2 2 2 M14 10l2 2-2 2",
  globe: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M3 12h18 M12 3c2.5 2.6 3.5 5.6 3.5 9s-1 6.4-3.5 9 M12 3c-2.5 2.6-3.5 5.6-3.5 9s1 6.4 3.5 9",
  phone: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z M11 18h2",
};

function Icon({ name, className }: { name: TimelineIcon; className: string }) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d={iconPaths[name]} />
      </svg>
    </span>
  );
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
