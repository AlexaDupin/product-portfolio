import Link from "next/link";
import type { ReactNode } from "react";
import { ui } from "@/content/site";
import type { LinkItem } from "@/content/types";

interface SmartLinkProps {
  link: LinkItem;
  className?: string;
  children?: ReactNode;
}

/** Internal links use next/link; external ones open safely in a new tab. */
export function SmartLink({ link, className, children }: SmartLinkProps) {
  const content = children ?? link.label;

  if (link.external) {
    return (
      <a href={link.href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
        <span className="visually-hidden"> {ui.newTabHint}</span>
      </a>
    );
  }

  if (link.href.startsWith("#")) {
    return (
      <a href={link.href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}
