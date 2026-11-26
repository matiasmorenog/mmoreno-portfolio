export const projectContentById = {
  "rocha-cotizador": {
    en: {
      category: "Commercial / Production",
      statusLabel: "Live",
      productionSince: "In production since Jul 2026",
      demoHint: "Demo access available",
      role: "Independent Software Engineer — commercial production work",
      summary:
        "Production B2B ordering and quotation platform for a multi-location bakery, replacing WhatsApp/Excel wholesale workflows with customer self-service, PDF quotes, web push, and centralized administration.",
      impact: null,
      usage:
        "Public demo uses its own development database with no real customer data. Demo authentication lets you explore customer and administrator accounts with different roles and permissions.",
      caseStudy: {
        problem:
          "Wholesale orders were managed through WhatsApp and Excel, without customer self-service or centralized administration.",
        action:
          "Built the platform end-to-end with Next.js, TypeScript, PostgreSQL, Prisma, and NextAuth, covering authentication, customer-specific pricing, stock, quotations, orders, Excel synchronization, PDF generation (pdfkit), and web push notifications (web-push).",
        result:
          "In daily use by 4 ordering locations; 61 wholesale orders (delivery notes) processed in Nov 2026.",
      },
    },
    es: {
      category: "Comercial / Producción",
      statusLabel: "En producción",
      productionSince: "En producción desde jul 2026",
      demoHint: "Acceso demo disponible",
      role: "Ingeniero de Software Independiente — trabajo comercial en producción",
      summary:
        "Plataforma B2B de pedidos y cotizaciones en producción para una panadería con múltiples sucursales, con autogestión, PDFs, push y administración centralizada.",
      impact: null,
      usage:
        "La demo pública usa su propia base de desarrollo y no contiene datos reales de clientes. Incluye autenticación demo para explorar cuentas de cliente y administrador con distintos roles y permisos.",
      caseStudy: {
        problem:
          "Los pedidos mayoristas se gestionaban por WhatsApp y Excel, sin autogestión para clientes ni administración centralizada.",
        action:
          "Desarrollé la plataforma end-to-end con Next.js, TypeScript, PostgreSQL, Prisma y NextAuth, cubriendo autenticación, precios personalizados por cliente, stock, cotizaciones, pedidos, sincronización con Excel, generación de PDFs (pdfkit) y notificaciones push (web-push).",
        result:
          "En uso diario por 4 sucursales; 61 pedidos mayoristas (remitos) procesados en noviembre 2026.",
      },
    },
  },
  "nexus-web-store": {
    en: {
      category: "Personal SaaS Product",
      statusLabel: "Live Demo",
      role: "Personal SaaS-oriented product (not client work)",
      summary:
        "Production multi-tenant SaaS e-commerce platform with several isolated stores and integrations for Mercado Pago, Stripe, Resend, and Vercel Blob. Includes a navigable demo storefront.",
      impact: null,
      usage:
        "Public demo includes a navigable demo storefront with sample data — not a real paid customer store.",
      caseStudy: {
        problem:
          "Needed a production-shaped multi-tenant e-commerce foundation with storefront, checkout, merchant administration, payments, and reusable SaaS-oriented capabilities.",
        action:
          "Built with Next.js, TypeScript, PostgreSQL, Prisma, and NextAuth, including storefront, checkout, merchant administration, store-level data isolation, and integrations with Mercado Pago, Stripe, Resend, and Vercel Blob.",
        result:
          "Live personal SaaS-oriented platform in production with several isolated stores and a navigable demo storefront.",
      },
    },
    es: {
      category: "Producto SaaS personal",
      statusLabel: "Demo activa",
      role: "Producto personal orientado a SaaS (no es trabajo para un cliente)",
      summary:
        "Plataforma SaaS e-commerce multi-tenant en producción con varias tiendas aisladas e integraciones con Mercado Pago, Stripe, Resend y Vercel Blob. Incluye una tienda demo navegable.",
      impact: null,
      usage:
        "La demo pública incluye una tienda demo navegable con datos de ejemplo; no es una tienda de un cliente pago.",
      caseStudy: {
        problem:
          "Necesitaba una base e-commerce multi-tenant con forma de producción: storefront, checkout, administración comercial, pagos y capacidades reutilizables orientadas a SaaS.",
        action:
          "Desarrollé con Next.js, TypeScript, PostgreSQL, Prisma y NextAuth, incluyendo storefront, checkout, administración comercial, aislamiento de datos por tienda e integraciones con Mercado Pago, Stripe, Resend y Vercel Blob.",
        result:
          "Plataforma personal orientada a SaaS en producción con varias tiendas aisladas y una tienda demo navegable.",
      },
    },
  },
};
