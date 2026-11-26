import PortfolioPage from "./portfolio-page";
import {
  CANONICAL_SITE_URL,
  canonicalProfile,
  jsonLdAddress,
  jsonLdJobTitle,
  jsonLdKnowsAbout,
  jsonLdKnowsLanguage,
  jsonLdPersonDescription,
  professionalProfileEs,
  siteDescription,
} from "@/data/resume/canonical";
import { parseLocale, supportedLocales } from "@/data/resume/index";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function Page({ params }) {
  const { locale: rawLocale } = await params;
  if (!supportedLocales.includes(rawLocale)) {
    notFound();
  }
  const locale = parseLocale(rawLocale);
  const description =
    locale === "es" ? professionalProfileEs[0] : jsonLdPersonDescription;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: canonicalProfile.name,
    alternateName: canonicalProfile.legalName,
    jobTitle:
      locale === "es" ? "Ingeniero de Software" : jsonLdJobTitle,
    description,
    url: CANONICAL_SITE_URL,
    email: canonicalProfile.email,
    telephone: canonicalProfile.phone,
    address: jsonLdAddress,
    knowsAbout: jsonLdKnowsAbout,
    knowsLanguage: jsonLdKnowsLanguage,
    sameAs: [canonicalProfile.githubUrl, canonicalProfile.linkedinUrl],
    hasOccupation: {
      "@type": "Occupation",
      name: locale === "es" ? "Ingeniero de Software" : jsonLdJobTitle,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Tecnológica Nacional (UTN)",
    },
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Matías Moreno Portfolio",
    description: locale === "es" ? professionalProfileEs[0] : siteDescription,
    url: CANONICAL_SITE_URL,
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: canonicalProfile.legalName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <PortfolioPage initialLocale={locale} />
    </>
  );
}
