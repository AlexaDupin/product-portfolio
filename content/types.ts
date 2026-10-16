export type CategoryId =
  | "understand-users"
  | "resolve-issues"
  | "prevent-repeats"
  | "enable-users";

export type PillTone = "pink" | "sand";

export type ImageTone = "pink" | "sand";

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
}

export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Metric {
  value: string;
  label: string;
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
  problem: string[];
  responsibility: string[];
  whatIDid: string[];
  outcome: string[];
  approach: string[];
  metrics?: Metric[];
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
