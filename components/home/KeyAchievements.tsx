import { achievements } from "@/content/home";
import { ArrowLink } from "@/components/ui/ArrowLink";
import styles from "./KeyAchievements.module.css";

/** Four results at a glance, each linking to the case study that backs it up. */
export function KeyAchievements() {
  return (
    <section className="section" aria-labelledby="achievements-title">
      <div className="container">
        <h2 id="achievements-title" className={styles.title}>
          {achievements.title}
        </h2>
        <ul className={styles.grid}>
          {achievements.items.map(({ title, text, link }) => (
            <li key={title} className={styles.card}>
              <h3 className={styles.headline}>{title}</h3>
              <p className={styles.text}>{text}</p>
              <p className={styles.link}>
                <ArrowLink link={link} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
