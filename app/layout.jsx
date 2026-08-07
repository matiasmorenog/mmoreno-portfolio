import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import {
  CANONICAL_SITE_URL,
  canonicalProfile,
  siteDescription,
  siteKeywords,
} from "@/data/resume/canonical";
import { getLocaleLanguageAlternates } from "@/data/resume/index";

const siteTitle = `${canonicalProfile.name} | ${canonicalProfile.headline.replace(/\s*\|\s*/g, " — ")}`;

export const metadata = {
  metadataBase: new URL(CANONICAL_SITE_URL),
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  alternates: {
    canonical: "/",
    languages: getLocaleLanguageAlternates(),
  },
  openGraph: {
    title: siteTitle,
    description:
      "Portfolio focused on React, TypeScript, scalable frontend architecture, performance optimization, and real project demos.",
    url: CANONICAL_SITE_URL,
    siteName: "Matías Moreno Portfolio",
    type: "website",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Matías Moreno — Senior Frontend Engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "Portfolio focused on React, TypeScript, scalable frontend architecture, performance optimization, and real project demos.",
    images: ["/og"],
  },
};

export default function RootLayout({ children }) {
  // Default EN; portfolio-page.jsx sets document.documentElement.lang for ?lang=es.
  return (
    <html lang="en">
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
        `}</style>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
