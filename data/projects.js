export const projects = [
  {
    id: 1,
    title: "Nexus Web Store",
    category: "E-commerce",
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
    level: "Advanced",
    score: 95,
    scoreLabel: "Self-assessment",
    status: "Live",
    previewImage: "/project-nexus-store-preview.svg",
    previewAlt: "Preview of Nexus Web Store storefront with product catalog and cart",
    demoUrl: "https://nexus-web-store.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/nexus-web-store",
    role: "Full-stack developer (solo project)",
    summary:
      "Full-stack sports apparel e-commerce with client-side catalog filtering, product variants, persistent cart, Mercado Pago checkout, transactional emails, and a protected admin panel with KPIs and order management.",
    impact:
      "Layered caching (ISR + unstable_cache), multi-tenant-ready Prisma schema, Vercel Blob image uploads, and Neon PostgreSQL tuned for serverless — deployable as a real storefront (demo branded as Goat).",
    usage: "Live portfolio demo on Vercel with seeded catalog, checkout demo mode, and admin at /admin.",
  },
];
