import type { LinkItem } from "@/content/types";
import { SmartLink } from "./SmartLink";
import styles from "./ButtonLink.module.css";

type Variant = "primary" | "white" | "dark";

interface ButtonLinkProps {
  link: LinkItem;
  variant?: Variant;
  className?: string;
}

export function ButtonLink({ link, variant = "primary", className }: ButtonLinkProps) {
  return (
    <SmartLink
      link={link}
      className={[styles.button, styles[variant], className].filter(Boolean).join(" ")}
    />
  );
}
