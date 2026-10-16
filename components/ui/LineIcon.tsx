export type LineIconName = "document" | "building" | "code" | "globe" | "phone" | "arrow";

const paths: Record<LineIconName, string> = {
  document: "M7 3h7l4 4v14H7z M14 3v4h4 M10 11h5 M10 14h5 M10 17h3",
  building: "M4 21h16 M6 21V5h8v16 M14 9h4v12 M9 8h2 M9 11h2 M9 14h2 M9 17h2",
  code: "M4 5h16v14H4z M10 10l-2 2 2 2 M14 10l2 2-2 2",
  globe: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M3 12h18 M12 3c2.5 2.6 3.5 5.6 3.5 9s-1 6.4-3.5 9 M12 3c-2.5 2.6-3.5 5.6-3.5 9s1 6.4 3.5 9",
  phone: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z M11 18h2",
  arrow: "M5 12h14 M13 6l6 6-6 6",
};

interface LineIconProps {
  name: LineIconName;
  className?: string;
}

/** Simple outline icons drawn inline, so no icon package is needed. */
export function LineIcon({ name, className }: LineIconProps) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d={paths[name]} />
      </svg>
    </span>
  );
}
