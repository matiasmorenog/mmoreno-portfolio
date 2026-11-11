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
    previewImage: "/project-previews/nexus-web-store.webp",
    previewAlt: "Preview of e-commerce storefront with product catalog and cart",
    demoUrl: "https://nexus-web-store.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/nexus-web-store",
  },
];
