import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { notFound } from "next/navigation";
import {
  CANONICAL_SITE_URL,
  canonicalProfile,
  professionalProfileEs,
  siteDescription,
  siteKeywords,
} from "@/data/resume/canonical";
import {
  defaultLocale,
  getLocaleLanguageAlternates,
  getLocalePath,
  parseLocale,
  supportedLocales,
} from "@/data/resume/index";

function siteTitleForLocale(locale) {
  if (locale === "es") {
    return `${canonicalProfile.name} | Ingeniero de Software — React, TypeScript, Next.js y Node.js`;
  }
  return `${canonicalProfile.name} | ${canonicalProfile.headline.replace(/\s*\|\s*/g, " — ")}`;
}

function descriptionForLocale(locale) {
  if (locale === "es") {
    return professionalProfileEs[0];
  }
  return siteDescription;
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale: rawLocale } = await params;
  const locale = parseLocale(rawLocale);
  if (!supportedLocales.includes(rawLocale)) {
    return {};
  }

  const title = siteTitleForLocale(locale);
  const description = descriptionForLocale(locale);
  const canonical = getLocalePath(locale);

  return {
    metadataBase: new URL(CANONICAL_SITE_URL),
    title,
    description,
    keywords: siteKeywords,
    alternates: {
      canonical,
      languages: getLocaleLanguageAlternates(),
    },
    openGraph: {
      title,
      description,
      url: `${CANONICAL_SITE_URL}${canonical === "/" ? "" : canonical}`,
      siteName: "Matías Moreno Portfolio",
      locale: locale === "es" ? "es_AR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og",
          width: 1200,
          height: 630,
          alt: "Matías Moreno — Software Engineer portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale: rawLocale } = await params;
  if (!supportedLocales.includes(rawLocale)) {
    notFound();
  }
  const locale = parseLocale(rawLocale);

  return (
    <html lang={locale}>
      <body>
        <style>{`
          .skip-link {
            position: absolute;
            left: -9999px;
            top: 8px;
            z-index: 2000;
            padding: 8px 12px;
            border-radius: 8px;
            background: #0a7f78;
            color: #ffffff;
            font-family: sans-serif;
            font-size: 14px;
            text-decoration: none;
          }
          .skip-link:focus {
            left: 8px;
          }
          .reveal {
            opacity: 1;
            transform: none;
          }
          @media (prefers-reduced-motion: no-preference) {
            .reveal[data-reveal]:not([data-reveal-visible]) {
              opacity: 0;
              transform: translateY(12px);
              transition: opacity 0.45s ease, transform 0.45s ease;
            }
            .reveal[data-reveal-visible] {
              opacity: 1;
              transform: none;
            }
          }
        `}</style>
        <a href="#main-content" className="skip-link">
          {locale === "es" ? "Saltar al contenido" : "Skip to main content"}
        </a>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}

export { defaultLocale };
