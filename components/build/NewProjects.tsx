import { ui } from "@/content/site";
import type { NewProject } from "@/content/projects";
import { Pill } from "@/components/ui/Pill";
import { SmartLink } from "@/components/ui/SmartLink";
import styles from "./NewProjects.module.css";

interface NewProjectsProps {
  id: string;
  /** Read by screen readers only; the cards speak for themselves on screen. */
  title: string;
  items: NewProject[];
}

/** A compact row of newer projects, each card a link to its section or case study. */
export function NewProjects({ id, title, items }: NewProjectsProps) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="visually-hidden">
        {title}
      </h2>
      <ul className={styles.grid}>
        {items.map(({ badge, title: name, text, link }) => (
          <li key={name}>
            <SmartLink link={link} className={styles.card}>
              <Pill label={badge} tone="pink" size="small" />
              <span className={styles.body}>
                <span className={styles.name}>{name}</span>
                <span className={styles.text}>{text}</span>
                <span className="visually-hidden">{link.label}</span>
              </span>
              <span className={styles.arrow} aria-hidden="true">
                {link.href.startsWith("#") ? ui.downArrow : ui.arrow}
              </span>
            </SmartLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
