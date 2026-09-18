/** Compact Selected Project block for dynamic CV generation (EN/ES). */
export const selectedProjectByLocale = {
  en: {
    name: "Nexus Web Store",
    subtitle: "Personal SaaS Product",
    periodDisplay: "Jun 2026 – Jul 2026",
    highlights: [
      "Built a multi-tenant e-commerce platform using Next.js 16, TypeScript, PostgreSQL, Prisma, NextAuth, Zustand, and Tailwind CSS.",
      "Developed storefront, checkout, merchant administration, products, variants, orders, inventory, dashboards, and configurable SaaS-oriented modules.",
      "Implemented store-level data isolation and layered Next.js caching using ISR, unstable_cache, dynamic rendering, and tag-based invalidation.",
    ],
  },
  es: {
    name: "Nexus Web Store",
    subtitle: "Producto SaaS Personal",
    periodDisplay: "Jun 2026 – Jul 2026",
    highlights: [
      "Desarrollé una plataforma e-commerce multi-tenant utilizando Next.js 16, TypeScript, PostgreSQL, Prisma, NextAuth, Zustand y Tailwind CSS.",
      "Desarrollé storefront, checkout y administración comercial, incluyendo productos, variantes, pedidos, inventario, dashboards y módulos configurables orientados a SaaS.",
      "Implementé aislamiento de datos por tienda y una estrategia de caché por capas en Next.js utilizando ISR, unstable_cache, renderizado dinámico e invalidación por tags.",
    ],
  },
};
