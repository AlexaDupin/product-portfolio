import Link from "next/link";
import type { ImageSpec, LinkItem, Metric } from "@/content/types";
import type { NewProject } from "@/content/projects";
import { ui } from "@/content/site";
import { DeviceShowcase } from "@/components/ui/DeviceShowcase";
import { NewBadge } from "@/components/ui/NewBadge";
import { TagList } from "@/components/ui/TagList";
import styles from "./ProjectMenu.module.css";

interface MainProject {
  eyebrow: string;
  title: string;
  tagline: string;
  laptopImage: ImageSpec;
  phoneImage: ImageSpec;
  metrics: Metric[];
  cardTags: string[];
  card: LinkItem;
}

interface ProjectMenuProps {
  id: string;
  /** Read by screen readers only. */
  title: string;
  main: MainProject;
  others: { title: string; intro: string; items: NewProject[] };
}

/**
 * The What I build menu: the main project as a big card on the left, newer projects stacked on the right.
 * Each card is one link (the title), stretched over the whole card.
 */
export function ProjectMenu({ id, title, main, others }: ProjectMenuProps) {
  return (
    <section aria-labelledby={id} className={styles.menu}>
      <h2 id={id} className="visually-hidden">
        {title}
      </h2>

      <article className={`${styles.card} ${styles.main}`}>
        <div className={styles.media}>
          <DeviceShowcase laptop={main.laptopImage} phone={main.phoneImage} />
        </div>
        <div className={styles.body}>
          <p className={styles.eyebrow}>{main.eyebrow}</p>
          <h3 className={styles.mainTitle}>
            <Link href={main.card.href} className={styles.stretched}>
              {main.title}
            </Link>
          </h3>
          <p className={styles.text}>{main.tagline}</p>
          <dl className={styles.metrics}>
            {main.metrics.slice(0, 3).map(({ value, label }) => (
              <div key={label}>
                <dt className="visually-hidden">{label}</dt>
                <dd className={styles.value}>{value}</dd>
                <dd className={styles.label} aria-hidden="true">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
          <TagList tags={main.cardTags} label={`${main.title}: skills`} size="small" />
          <p className={styles.more} aria-hidden="true">
            {main.card.label} {ui.arrow}
          </p>
        </div>
      </article>

      <div className={styles.side}>
        <div className={styles.sideIntro}>
          <p className={styles.eyebrow}>{others.title}</p>
          <p className={styles.text}>{others.intro}</p>
        </div>
        {others.items.map(({ badge, title: name, text, tags, link }) => (
          <article key={name} className={styles.card}>
            <div className={styles.body}>
              <p>
                <NewBadge label={badge} />
              </p>
              <h3 className={styles.name}>
                <Link href={link.href} className={styles.stretched}>
                  {name}
                </Link>
              </h3>
              <p className={styles.text}>{text}</p>
              <TagList tags={tags} label={`${name}: skills`} size="small" />
              <p className={styles.more} aria-hidden="true">
                {link.label} {ui.arrow}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
