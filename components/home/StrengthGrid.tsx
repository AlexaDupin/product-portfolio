import { strengths } from "@/content/home";
import { anchors } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StrengthCard } from "./StrengthCard";
import styles from "./StrengthGrid.module.css";

export function StrengthGrid() {
  return (
    <section id={anchors.whatIDoBest} className={`section ${styles.band}`} aria-labelledby="strengths-title">
      <div className="container">
        <SectionHeading id="strengths-title" title={strengths.title} lead={strengths.lead} />
        <div className={styles.grid}>
          <StrengthCard strength={strengths.featured} featured />
          <div className={styles.stack}>
            {strengths.others.map((strength) => (
              <StrengthCard key={strength.pill} strength={strength} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
