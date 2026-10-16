import { ui } from "@/content/site";
import type { LinkItem } from "@/content/types";
import { SmartLink } from "./SmartLink";
import styles from "./ArrowLink.module.css";

interface ArrowLinkProps {
  link: LinkItem;
  onDark?: boolean;
  /** Replaces the default underlined link style. */
  className?: string;
}

export function ArrowLink({ link, onDark = false, className }: ArrowLinkProps) {
  const linkClass = className ?? `${styles.link} ${onDark ? styles.onDark : ""}`;

  return (
    <SmartLink link={link} className={linkClass}>
      {link.label}
      <span aria-hidden="true"> {ui.arrow}</span>
    </SmartLink>
  );
}
