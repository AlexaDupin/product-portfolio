import { intro } from "@/content/home";
import { Pill } from "@/components/ui/Pill";
import styles from "./IntroCards.module.css";

export function IntroCards() {
  return (
    <section className="section" aria-labelledby="intro-title">
      <div className="container">
        <h2 id="intro-title" className={styles.title}>
          {intro.title}
        </h2>
        <div className={styles.grid}>
          {intro.cards.map(({ pill, tone, text }) => (
            <article key={pill} className={styles.card}>
              <Pill label={pill} tone={tone} />
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
