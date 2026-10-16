import { hero } from "@/content/home";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 id="hero-title" className={styles.title}>
          {hero.title}
        </h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
        <div className={styles.actions}>
          <ButtonLink link={hero.primaryCta} variant="primary" />
          <ButtonLink link={hero.secondaryCta} variant="outlineLight" />
        </div>
      </div>
    </section>
  );
}
