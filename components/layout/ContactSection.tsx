import { anchors, contact } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section id={anchors.contact} className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className={styles.block}>
          <h2 id="contact-title" className={styles.title}>
            {contact.title}
          </h2>
          <p className={styles.text}>{contact.text}</p>
          <ButtonLink link={contact.cta} variant="dark" />
        </div>
      </div>
    </section>
  );
}
