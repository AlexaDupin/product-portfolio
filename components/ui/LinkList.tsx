import type { LinkItem } from "@/content/types";
import { ArrowLink } from "./ArrowLink";
import styles from "./LinkList.module.css";

interface LinkListProps {
  links: LinkItem[];
}

export function LinkList({ links }: LinkListProps) {
  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link.href}>
          <ArrowLink link={link} />
        </li>
      ))}
    </ul>
  );
}
