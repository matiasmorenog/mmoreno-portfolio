import PortfolioPage from "./portfolio-page";

export const dynamic = "force-static";

export default function Page() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matías Moreno",
    jobTitle: "Senior Frontend Engineer",
    url: "https://mmoreno-portfolio.vercel.app",
    email: "mailto:matiasmorenog@gmail.com",
    sameAs: [
      "https://github.com/matiasmorenog",
      "https://www.linkedin.com/in/matias-moreno/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Tecnológica Nacional (UTN)",
    },
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Matías Moreno Portfolio",
    url: "https://mmoreno-portfolio.vercel.app",
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: "Matias Adrian Moreno Gallo",
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
