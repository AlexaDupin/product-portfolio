import Link from "next/link";
import { backToProjects } from "@/content/projects";
import { ui } from "@/content/site";
import styles from "./BackLink.module.css";

/** Page-header eyebrow on a project page: back to the What I build menu. */
export function BackLink() {
  return (
    <Link href={backToProjects.href} className={styles.back}>
      <span aria-hidden="true">{ui.backArrow} </span>
      {backToProjects.label}
    </Link>
  );
}
