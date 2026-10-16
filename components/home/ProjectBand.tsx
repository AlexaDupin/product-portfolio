import { projectBand } from "@/content/home";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { Metrics } from "@/components/ui/Metrics";
import styles from "./ProjectBand.module.css";

export function ProjectBand() {
  return (
    <section className={styles.band} aria-labelledby="project-title">
      <div className={`container ${styles.inner}`}>
        <Media image={projectBand.image} onDark className={styles.media} sizes="(min-width: 1024px) 50vw, 100vw" />
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
