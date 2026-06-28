import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

export const metadata = {
  metadataBase: new URL("https://mmoreno-portfolio.vercel.app"),
  title: "Matías Moreno | Senior Frontend Engineer — React & TypeScript",
  description:
    "Senior Frontend Engineer specializing in React, TypeScript, and scalable UI systems. Experience in SaaS platforms, banking, healthcare, and B2B solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Matías Moreno | Senior Frontend Engineer — React & TypeScript",
    description:
      "Portfolio focused on React, TypeScript, scalable frontend architecture, performance optimization, and real project demos.",
    url: "https://mmoreno-portfolio.vercel.app",
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
    title: "Matías Moreno | Senior Frontend Engineer — React & TypeScript",
    description:
      "Portfolio focused on React, TypeScript, scalable frontend architecture, performance optimization, and real project demos.",
    images: ["/og"],
  },
};

export default function RootLayout({ children }) {
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
