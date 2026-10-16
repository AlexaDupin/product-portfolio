export type CategoryId =
  | "understand-users"
  | "resolve-issues"
  | "prevent-repeats"
  | "enable-users";

export type PillTone = "pink" | "sand";

export type ImageTone = "pink" | "sand";

export type DeviceType = "laptop" | "phone";

export interface Category {
  id: CategoryId;
  label: string;
  tone: PillTone;
  description: string;
}

/** A screenshot slot. Without `src`, a labeled placeholder is shown. */
export interface ImageSpec {
  label: string;
  alt: string;
  tone: ImageTone;
  caption?: string;
  src?: string;
  width?: number;
  height?: number;
  /** Shows the screenshot inside a CSS laptop or phone frame. */
  device?: DeviceType;
}

export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Metric {
  value: string;
  label: string;
  /** A short qualifier shown under the label, e.g. what the number does not count. */
  note?: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface Step {
  title: string;
  text: string;
}

export interface BeforeAfter {
  beforeLabel: string;
  afterLabel: string;
  rows: { before: string; after: string }[];
}

export interface TextBlock {
  title: string;
  paragraphs: string[];
}

export interface Excerpt {
  title: string;
  label: string;
  items: string[];
}

export type TimelineIcon = "document" | "building" | "code" | "globe" | "phone";
export interface TimelineRole {
  role: string;
  period: string;
  icon: TimelineIcon;
}

export interface TimelineEntry {
  period: string;
  title: string;
  icon: TimelineIcon;
  text?: string;
  /** A company's own logo image, shown instead of the icon. Decorative: the title names the company. */
  logo?: { src: string; width: number; height: number };
  /** Roles held at this company, shown branching off the entry. */
  roles?: TimelineRole[];
}

export interface CaseStudyHeader {
  role?: string;
  context?: string;
  timeline?: string;
  tools?: string;
}

interface CaseStudyBase {
  slug: string;
  category: CategoryId;
  title: string;
  summary: string;
  tags: string[];
  image: ImageSpec;
}

export interface LiveCaseStudy extends CaseStudyBase {
  status: "live";
  meta: PageMeta;
  header: CaseStudyHeader;
  /** One-line headline for each section, written only from facts on the page. */
  headlines: { problem: string; responsibility: string; whatIDid: string; outcome: string };
  problem: string[];
  responsibility: string[];
  outcome: string[];
  approach: string[];
  metrics?: Metric[];
  /** Label for the metrics block; defaults to the shared "In numbers" label. */
  metricsTitle?: string;
  beforeAfter?: BeforeAfter;
  steps?: Step[];
  communication?: TextBlock;
  excerpt?: Excerpt;
  deepDive?: LinkItem;
  confirm?: string[];
}

export interface ComingSoonCaseStudy extends CaseStudyBase {
  status: "coming-soon";
}

export type CaseStudy = LiveCaseStudy | ComingSoonCaseStudy;
