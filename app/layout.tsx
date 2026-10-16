import type { Metadata } from "next";
import { Public_Sans, Schibsted_Grotesk } from "next/font/google";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactSection } from "@/components/layout/ContactSection";
import { anchors, defaultMeta, nav, person, siteUrl, titleTemplate } from "@/content/site";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["700", "800"],
  style: "normal",
  display: "swap",
});

// The whole site must be prerendered: no request-time rendering anywhere.
export const ensureStatic = "navigation";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultMeta.title, template: titleTemplate },
  description: defaultMeta.description,
  authors: [{ name: person.name }],
  openGraph: {
    type: "website",
    siteName: person.name,
    title: defaultMeta.title,
    description: defaultMeta.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${publicSans.variable} ${schibsted.variable}`}>
      <body>
        <a href={`#${anchors.main}`} className="skip-link">
          {nav.skipLink}
        </a>
        <SiteNav />
        <main id={anchors.main} tabIndex={-1}>
          {children}
          <ContactSection />
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
