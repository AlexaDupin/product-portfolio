"use client";

import { useState } from "react";
import type { CategoryId } from "@/content/types";
import type { CaseStudyCardItem } from "@/lib/caseStudyCards";
import { CardGrid } from "./CardGrid";
import styles from "./CaseStudyFilter.module.css";

type Filter = CategoryId | "all";

export interface FilterSection {
  id: string;
  title: string;
  description?: string;
  items: CaseStudyCardItem[];
}

interface CaseStudyFilterProps {
  label: string;
  allLabel: string;
  options: { id: CategoryId; label: string }[];
  sections: FilterSection[];
}

export function CaseStudyFilter({ label, allLabel, options, sections }: CaseStudyFilterProps) {
  const [active, setActive] = useState<Filter>("all");
  const choices: { id: Filter; label: string }[] = [{ id: "all", label: allLabel }, ...options];

  const visibleSections = sections
    .map((section) => ({
      ...section,
      items: active === "all" ? section.items : section.items.filter((item) => item.category === active),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <>
      <div role="group" aria-label={label} className={styles.filters}>
        {choices.map((choice) => (
          <button
            key={choice.id}
            type="button"
            className={styles.option}
            aria-pressed={active === choice.id}
            onClick={() => setActive(choice.id)}
          >
            {choice.label}
          </button>
        ))}
      </div>

      {visibleSections.map((section) => (
        <section key={section.id} className={styles.section} aria-labelledby={`${section.id}-title`}>
          <div className={styles.heading}>
            <h2 id={`${section.id}-title`} className={styles.title}>
              {section.title}
            </h2>
            {section.description && <p className={styles.description}>{section.description}</p>}
          </div>
          <CardGrid items={section.items} />
        </section>
      ))}
    </>
  );
}
