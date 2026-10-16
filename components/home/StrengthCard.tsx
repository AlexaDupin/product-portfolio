import type { Strength } from "@/content/home";
import { Pill } from "@/components/ui/Pill";
import { Media } from "@/components/ui/Media";
import { ArrowLink } from "@/components/ui/ArrowLink";
import styles from "./StrengthCard.module.css";

interface StrengthCardProps {
  strength: Strength;
  featured?: boolean;
}

export function StrengthCard({ strength, featured = false }: StrengthCardProps) {
  const { pill, tone, title, text, links, image } = strength;

  return (
    <article className={`${styles.card} ${featured ? styles.featured : styles.compact}`}>
      <div className={styles.body}>
        <Pill label={pill} tone={tone} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <ArrowLink link={link} className={featured ? styles.chip : undefined} />
            </li>
          ))}
        </ul>
      </div>
      <Media
        image={image}
        className={styles.media}
        sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "200px"}
      />
    </article>
  );
}
