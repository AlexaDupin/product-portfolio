import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { KeyAchievements } from "@/components/home/KeyAchievements";
import { StrengthGrid } from "@/components/home/StrengthGrid";
import { ProjectBand } from "@/components/home/ProjectBand";
import { Metrics } from "@/components/ui/Metrics";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardGrid } from "@/components/caseStudies/CardGrid";
import { homeCaseStudies, homeMeta, homeMetrics } from "@/content/home";
import { featuredCaseStudies } from "@/lib/caseStudies";
import { toCardItems } from "@/lib/caseStudyCards";

export const metadata: Metadata = {
  title: { absolute: homeMeta.title },
  description: homeMeta.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container">
        <Metrics items={homeMetrics.items} label={homeMetrics.label} variant="strip" />
      </div>
      <KeyAchievements />
      <StrengthGrid />
      <section className="section" aria-labelledby="home-case-studies-title">
        <div className="container">
          <SectionHeading
            id="home-case-studies-title"
            title={homeCaseStudies.title}
            action={homeCaseStudies.seeAll}
          />
          <CardGrid items={toCardItems(featuredCaseStudies())} />
        </div>
      </section>
      <ProjectBand />
    </>
  );
}
