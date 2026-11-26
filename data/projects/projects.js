export const projects = [
  {
    id: "rocha-cotizador",
    title: "Rocha Cotizador",
    category: "Commercial / Production",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    level: "Production",
    status: "Live",
    previewKey: "rocha-cotizador",
    // ?v= busts year-long immutable browser cache when filenames stay stable
    previewImage: "/project-previews/rocha-customer-home.webp?v=20261126",
    previewImages: [
      {
        src: "/project-previews/rocha-customer-home.webp?v=20261126",
        alt: "Rocha Cotizador — Customer home hub with branded backdrop and module cards",
        altEs:
          "Rocha Cotizador — Inicio del cliente con fondo de marca y tarjetas de módulos",
      },
      {
        src: "/project-previews/rocha-admin.webp?v=20261126",
        alt: "Rocha Cotizador — Admin dashboard with KPIs and yearly quote activity chart",
        altEs:
          "Rocha Cotizador — Panel admin con KPIs y gráfico anual de cotizaciones",
      },
      {
        src: "/project-previews/rocha-admin-stock.webp?v=20261126",
        alt: "Rocha Cotizador — Admin stock module with branch waste summary and product table",
        altEs:
          "Rocha Cotizador — Módulo de stock admin con resumen por sucursal y tabla de productos",
      },
      {
        src: "/project-previews/rocha-admin-clientes.webp?v=20261126",
        alt: "Rocha Cotizador — Admin customers with assigned price lists and status",
        altEs:
          "Rocha Cotizador — Clientes admin con listas de precios asignadas y estado",
      },
      {
        src: "/project-previews/rocha-admin-listas.webp?v=20261126",
        alt: "Rocha Cotizador — Admin price lists with products and customers per list",
        altEs:
          "Rocha Cotizador — Listas de precios admin con productos y clientes por lista",
      },
      {
        src: "/project-previews/rocha-admin-cotizaciones.webp?v=20261126",
        alt: "Rocha Cotizador — Admin quotes list with filters, totals, and PDF actions",
        altEs:
          "Rocha Cotizador — Listado de cotizaciones admin con filtros, totales y acciones PDF",
      },
    ],
    previewAlt:
      "Preview of Rocha Cotizador customer home and admin modules from the live demo",
    previewAltEs:
      "Vista previa del inicio de cliente y módulos admin de Rocha Cotizador desde la demo",
    demoUrl: "https://rocha-cotizador-dev.vercel.app/",
    productionUrl: "https://rocha-cotizador.vercel.app/",
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
    previewImage: "/project-previews/nexus-home.webp?v=20261126",
    previewImages: [
      {
        src: "/project-previews/nexus-home.webp?v=20261126",
        alt: "Nexus Web Store — Demo storefront hero with promotional carousel",
        altEs:
          "Nexus Web Store — Hero de la tienda demo con carrusel promocional",
      },
      {
        src: "/project-previews/nexus-productos.webp?v=20261126",
        alt: "Nexus Web Store — Product catalog with filters and product cards",
        altEs:
          "Nexus Web Store — Catálogo de productos con filtros y tarjetas",
      },
      {
        src: "/project-previews/nexus-admin-dashboard.webp?v=20261126",
        alt: "Nexus Web Store — Admin dashboard with attention alerts and best sellers",
        altEs:
          "Nexus Web Store — Dashboard admin con alertas de atención y más vendidos",
      },
      {
        src: "/project-previews/nexus-admin-reportes.webp?v=20261126",
        alt: "Nexus Web Store — Admin reports with revenue KPIs, funnel and top products",
        altEs:
          "Nexus Web Store — Reportes admin con KPIs de ingresos, embudo y top productos",
      },
      {
        src: "/project-previews/nexus-admin-pedidos.webp?v=20261126",
        alt: "Nexus Web Store — Admin orders with customer detail, payment and shipping status",
        altEs:
          "Nexus Web Store — Pedidos admin con detalle de cliente, pago y envío",
      },
    ],
    previewAlt:
      "Preview of Nexus Web Store demo storefront and merchant admin",
    previewAltEs:
      "Vista previa de la tienda demo y el admin comercial de Nexus Web Store",
    demoUrl: "https://nexus-web-store.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/nexus-web-store",
  },
];
