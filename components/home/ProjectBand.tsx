import { projectBand } from "@/content/home";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { DeviceShowcase } from "@/components/ui/DeviceShowcase";
import { Metrics } from "@/components/ui/Metrics";
import styles from "./ProjectBand.module.css";

export function ProjectBand() {
  return (
    <section className={styles.band} aria-labelledby="project-title">
      <div className={`container ${styles.inner}`}>
        <DeviceShowcase laptop={projectBand.laptopImage} phone={projectBand.phoneImage} />
        <div className={styles.body}>
          <p className={styles.eyebrow}>{projectBand.eyebrow}</p>
          <h2 id="project-title" className={styles.title}>
            {projectBand.title}
          </h2>
          <p className={styles.text}>{projectBand.text}</p>
          <Metrics items={projectBand.metrics} label={projectBand.metricsLabel} variant="inline" />
          <ArrowLink link={projectBand.link} onDark />
        </div>
      </div>
    </section>
  );
}
