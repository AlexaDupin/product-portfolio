import type { LinkItem } from "@/content/types";
import { ArrowLink } from "./ArrowLink";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  id: string;
  title: string;
  lead?: string;
  action?: LinkItem;
}

/** Home section heading: short accent bar, large title, optional lead and a link on the right. */
export function SectionHeading({ id, title, lead, action }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <div className={styles.text}>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
      {action && <ArrowLink link={action} />}
    </div>
  );
}
