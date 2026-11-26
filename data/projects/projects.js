export const projects = [
  {
    id: "rocha-cotizador",
    title: "Rocha Cotizador",
    category: "Commercial / Production",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    level: "Production",
    status: "Live",
    previewKey: "rocha-cotizador",
    previewImage: "/project-previews/rocha-customer-home.webp",
    previewImages: [
      {
        src: "/project-previews/rocha-customer-home.webp",
        alt: "Rocha Cotizador — Customer home hub with branded backdrop and module cards",
      },
      {
        src: "/project-previews/rocha-admin.webp",
        alt: "Rocha Cotizador — Admin dashboard with KPIs and yearly quote activity chart",
      },
      {
        src: "/project-previews/rocha-admin-stock.webp",
        alt: "Rocha Cotizador — Admin stock module with branch waste summary and product table",
      },
      {
        src: "/project-previews/rocha-admin-clientes.webp",
        alt: "Rocha Cotizador — Admin customers with assigned price lists and status",
      },
      {
        src: "/project-previews/rocha-admin-listas.webp",
        alt: "Rocha Cotizador — Admin price lists with products and customers per list",
      },
    ],
    previewAlt:
      "Preview of Rocha Cotizador customer home and admin modules from the live demo",
    demoUrl: "https://rocha-cotizador.vercel.app/",
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
      "Stripe",
      "Resend",
      "Vercel Blob",
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
        alt: "Nexus Web Store — Demo storefront hero with promotional carousel",
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
      "Preview of Nexus Web Store demo storefront and merchant admin",
    demoUrl: "https://nexus-web-store.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/nexus-web-store",
  },
];
