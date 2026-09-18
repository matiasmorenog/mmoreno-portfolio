export const projectContentById = {
  "rocha-cotizador": {
    en: {
      category: "Commercial / Production",
      statusLabel: "Live",
      role: "Independent Software Engineer — commercial production work",
      summary:
        "Production B2B ordering and quotation platform for a multi-location bakery, replacing WhatsApp/Excel wholesale workflows with customer self-service and centralized administration.",
      impact: null,
      usage:
        "Public demo uses its own development database with no real customer data. Demo authentication lets you explore customer and administrator accounts with different roles and permissions.",
      caseStudy: {
        problem:
          "Wholesale orders were managed through WhatsApp and Excel, without customer self-service or centralized administration.",
        action:
          "Built the platform end-to-end with Next.js, TypeScript, PostgreSQL, Prisma, and NextAuth, covering authentication, customer-specific pricing, stock, quotations, orders, and Excel synchronization.",
        result:
          "Production platform supporting recurring wholesale ordering across multiple locations and maintained as a paid software service.",
      },
    },
    es: {
      category: "Comercial / Producción",
      statusLabel: "En producción",
      role: "Ingeniero de Software Independiente — trabajo comercial en producción",
      summary:
        "Plataforma B2B de pedidos y cotizaciones en producción para una panadería con múltiples sucursales, reemplazando el flujo mayorista por WhatsApp/Excel con autogestión para clientes y administración centralizada.",
      impact: null,
      usage:
        "La demo pública usa su propia base de desarrollo y no contiene datos reales de clientes. Incluye autenticación demo para explorar cuentas de cliente y administrador con distintos roles y permisos.",
      caseStudy: {
        problem:
          "Los pedidos mayoristas se gestionaban por WhatsApp y Excel, sin autogestión para clientes ni administración centralizada.",
        action:
          "Desarrollé la plataforma end-to-end con Next.js, TypeScript, PostgreSQL, Prisma y NextAuth, cubriendo autenticación, precios personalizados por cliente, stock, cotizaciones, pedidos y sincronización con Excel.",
        result:
          "Plataforma en producción que soporta pedidos mayoristas recurrentes en múltiples sucursales y se mantiene como servicio de software pago.",
      },
    },
  },
  "nexus-web-store": {
    en: {
      category: "Personal SaaS Product",
      statusLabel: "Live Demo",
      role: "Personal SaaS-oriented product (not client work)",
      summary:
        "Personal multi-tenant e-commerce platform evolved from a storefront prototype into a reusable SaaS-oriented architecture.",
      impact: null,
      usage:
        "Public demo uses Goat Indumentaria as a fictional demo storefront with sample data — not a real customer.",
      caseStudy: {
        problem:
          "Needed a production-shaped multi-tenant e-commerce foundation with storefront, checkout, merchant administration, and reusable SaaS-oriented capabilities.",
        action:
          "Built with Next.js 16, TypeScript, PostgreSQL, Prisma, NextAuth, Zustand, and Tailwind CSS, including storefront, checkout, merchant administration, products, variants, orders, inventory, dashboards, configurable modules, store-level data isolation, and layered Next.js caching.",
        result:
          "Live personal SaaS-oriented demo showcasing the complete product through a fictional Goat Indumentaria storefront.",
      },
    },
    es: {
      category: "Producto SaaS personal",
      statusLabel: "Demo activa",
      role: "Producto personal orientado a SaaS (no es trabajo para un cliente)",
      summary:
        "Plataforma e-commerce multi-tenant personal, evolucionada de un prototipo de tienda a una arquitectura reutilizable orientada a SaaS.",
      impact: null,
      usage:
        "La demo pública utiliza Goat Indumentaria como storefront ficticio con datos de ejemplo; no es un cliente real.",
      caseStudy: {
        problem:
          "Necesitaba una base e-commerce multi-tenant con forma de producción: storefront, checkout, administración comercial y capacidades reutilizables orientadas a SaaS.",
        action:
          "Desarrollé con Next.js 16, TypeScript, PostgreSQL, Prisma, NextAuth, Zustand y Tailwind CSS, incluyendo storefront, checkout, administración comercial, productos, variantes, pedidos, inventario, dashboards, módulos configurables, aislamiento de datos por tienda y caché por capas en Next.js.",
        result:
          "Demo personal orientada a SaaS que muestra el producto completo a través de un storefront ficticio de Goat Indumentaria con datos de ejemplo.",
      },
    },
  },
};
