import PortfolioPage from "./portfolio-page";
import {
  CANONICAL_SITE_URL,
  canonicalProfile,
  jsonLdAddress,
  jsonLdJobTitle,
  jsonLdKnowsAbout,
  jsonLdKnowsLanguage,
  jsonLdPersonDescription,
  siteDescription,
} from "@/data/resume/canonical";

export const dynamic = "force-static";

export default function Page() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: canonicalProfile.name,
    alternateName: canonicalProfile.legalName,
    jobTitle: jsonLdJobTitle,
    description: jsonLdPersonDescription,
    url: CANONICAL_SITE_URL,
    email: canonicalProfile.email,
    telephone: canonicalProfile.phone,
    address: jsonLdAddress,
    knowsAbout: jsonLdKnowsAbout,
    knowsLanguage: jsonLdKnowsLanguage,
    sameAs: [canonicalProfile.githubUrl, canonicalProfile.linkedinUrl],
    hasOccupation: {
      "@type": "Occupation",
      name: jsonLdJobTitle,
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
    description: siteDescription,
    url: CANONICAL_SITE_URL,
    inLanguage: "en",
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
      <PortfolioPage />
    </>
  );
}
