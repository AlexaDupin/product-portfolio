import { aboutIntro } from "@/content/home";
import { ArrowLink } from "@/components/ui/ArrowLink";
import styles from "./AboutIntro.module.css";

/** A short, personal introduction between the metrics strip and Key achievements. */
export function AboutIntro() {
  return (
    <section className={styles.section} aria-label={aboutIntro.label}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            {aboutIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p>
            <ArrowLink link={aboutIntro.link} />
          </p>
        </div>
      </div>
    </section>
  );
}
