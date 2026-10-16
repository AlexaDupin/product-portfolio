import { footer, person, ui } from "@/content/site";
import { SmartLink } from "@/components/ui/SmartLink";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          <strong className={styles.name}>{person.name}</strong>
          <span className={styles.muted}>
            {ui.separator}
            {person.location}
          </span>
        </p>
        <p className={styles.muted}>{person.languages}</p>
        <nav aria-label={footer.linksLabel}>
          <ul className={styles.links}>
            {footer.links.map((link) => (
              <li key={link.href}>
                <SmartLink link={link} className={styles.link} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
