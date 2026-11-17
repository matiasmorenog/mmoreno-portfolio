export const projects = [
  {
    id: "rocha-cotizador",
    title: "Rocha Cotizador",
    category: "Commercial / Production",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    level: "Production",
    status: "Live",
    previewKey: "rocha-cotizador",
    previewImage: "/project-previews/rocha-admin.webp",
    previewImages: [
      {
        src: "/project-previews/rocha-admin.webp",
        alt: "Rocha Cotizador — Admin dashboard with daily KPIs and yearly quote activity chart",
      },
      {
        src: "/project-previews/rocha-cotizador-quote.webp",
        alt: "Rocha Cotizador — Nueva cotización with product lines and totals",
      },
      {
        src: "/project-previews/rocha-remitos.webp",
        alt: "Rocha Cotizador — Admin quotes list with remito numbers, customers, delivery dates and totals",
      },
    ],
    previewAlt:
      "Preview of Rocha Cotizador admin dashboard with KPIs and yearly quote activity chart",
    demoUrl: "https://rocha-cotizador-dev.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/rocha-cotizador",
  },
  {
    id: "nexus-web-store",
    title: "Nexus Web Store",
    category: "Personal SaaS Product",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Mercado Pago",
      "Zustand",
      "Tailwind CSS",
    ],
    level: "Personal product",
    status: "Live Demo",
    previewKey: "nexus-apparel",
    previewImage: "/project-previews/nexus-home.webp",
    previewImages: [
      {
        src: "/project-previews/nexus-home.webp",
        alt: "Nexus Web Store — Goat Indumentaria storefront hero with 2x1 promo carousel",
      },
      {
        src: "/project-previews/nexus-productos.webp",
        alt: "Nexus Web Store — Product catalog with filters and product cards",
      },
      {
        src: "/project-previews/nexus-admin-dashboard.webp",
        alt: "Nexus Web Store — Admin dashboard with attention alerts and best sellers",
      },
      {
        src: "/project-previews/nexus-admin-reportes.webp",
        alt: "Nexus Web Store — Admin reports with revenue KPIs, funnel and top products",
      },
      {
        src: "/project-previews/nexus-admin-pedidos.webp",
        alt: "Nexus Web Store — Admin orders with customer detail, payment and shipping status",
      },
    ],
    previewAlt:
      "Preview of Nexus Web Store Goat Indumentaria demo — storefront and admin",
    demoUrl: "https://nexus-web-store.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/nexus-web-store",
  },
];
