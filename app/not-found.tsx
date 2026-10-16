import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { notFoundPage } from "@/content/site";

export const metadata: Metadata = {
  title: notFoundPage.meta.title,
  description: notFoundPage.meta.description,
};

export default function NotFound() {
  return (
    <PageHeader eyebrow={notFoundPage.eyebrow} title={notFoundPage.title} lead={notFoundPage.lead}>
      <div>
        <ButtonLink link={notFoundPage.cta} variant="dark" />
      </div>
    </PageHeader>
  );
}
