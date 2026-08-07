export const projectContentById = {
  "rocha-cotizador": {
    en: {
      role: "Full-stack developer (client project)",
      summary:
        "B2B wholesale quoting platform where authenticated customers build quotes with hidden per-client discounts; admins manage products, customers, Excel sync, and printable delivery notes (remitos).",
      impact:
        "Next.js 16 App Router, Prisma/PostgreSQL, dual NextAuth credential flows (admin + customer code/password), and Excel import/export for bulk catalog and customer operations.",
      usage:
        "Portfolio demo on the development environment — customer login at /login, admin panel at /admin.",
      caseStudy: {
        problem:
          "A wholesale business needed to replace phone and spreadsheet quoting with a digital flow — per-client pricing rules without exposing discounts to buyers.",
        action:
          "Built a Next.js B2B portal with role-separated auth, quote builder, printable remitos, admin CRUD, and Excel import/export for products and customers.",
        result:
          "Production-deployed cotizador with hidden discount logic, self-service quoting for clients, and ops-friendly Excel sync for catalog updates.",
      },
    },
    es: {
      role: "Desarrollador full stack (proyecto cliente)",
      summary:
        "Cotizador B2B mayorista donde clientes autenticados arman cotizaciones con descuentos ocultos por cliente; admin gestiona productos, clientes, sync Excel y remitos imprimibles.",
      impact:
        "Next.js 16 App Router, Prisma/PostgreSQL, doble flujo NextAuth por credenciales (admin + código/contraseña de cliente) e import/export Excel para catálogo y clientes.",
      usage:
        "Demo del portfolio en entorno de desarrollo — login cliente en /login, panel admin en /admin.",
      caseStudy: {
        problem:
          "Un negocio mayorista necesitaba reemplazar cotizaciones por teléfono y planillas con un flujo digital — precios por cliente sin mostrar descuentos al comprador.",
        action:
          "Construí un portal B2B con Next.js: auth por rol, armado de cotizaciones, remitos imprimibles, CRUD admin e import/export Excel de productos y clientes.",
        result:
          "Cotizador desplegado en producción con lógica de descuentos ocultos, autocotización para clientes y sync Excel operativo para actualizar catálogo.",
      },
    },
  },
  "nexus-web-store": {
    en: {
      role: "Full-stack developer (solo project)",
      summary:
        "Full-stack sports apparel e-commerce with client-side catalog filtering, product variants, persistent cart, Mercado Pago checkout, transactional emails, and a protected admin panel with KPIs and order management.",
      impact:
        "Layered caching (ISR + unstable_cache), multi-tenant-ready Prisma schema, Vercel Blob image uploads, and Neon PostgreSQL tuned for serverless — deployable as a real storefront (demo branded as Goat).",
      usage: "Live portfolio demo on Vercel with seeded catalog, checkout demo mode, and admin at /admin.",
      caseStudy: {
        problem:
          "Demonstrate end-to-end product ownership with a deployable e-commerce flow — catalog, cart, payments, and admin — not just a static UI mockup.",
        action:
          "Built a Next.js App Router storefront with Prisma/PostgreSQL, Mercado Pago checkout, ISR + server caching, auth-gated admin, and Vercel Blob for product images.",
        result:
          "Live demo with seeded catalog, checkout demo mode, and admin KPIs — a production-shaped portfolio project recruiters can click through in minutes.",
      },
    },
    es: {
      role: "Desarrollador full stack (proyecto personal)",
      summary:
        "E-commerce full stack de indumentaria deportiva con filtrado client-side, variantes de producto, carrito persistente, checkout con Mercado Pago, emails transaccionales y panel admin con KPIs y gestión de pedidos.",
      impact:
        "Caching en capas (ISR + unstable_cache), schema Prisma multi-tenant, uploads con Vercel Blob y Neon PostgreSQL optimizado para serverless — desplegable como tienda real (demo con marca Goat).",
      usage: "Demo live en Vercel con catálogo seed, checkout en modo demo y admin en /admin.",
      caseStudy: {
        problem:
          "Demostrar ownership end-to-end con un flujo e-commerce desplegable — catálogo, carrito, pagos y admin — no solo un mockup estático.",
        action:
          "Construí un storefront con Next.js App Router, Prisma/PostgreSQL, checkout Mercado Pago, ISR + cache server, admin con auth y Vercel Blob para imágenes.",
        result:
          "Demo live con catálogo seed, checkout demo y KPIs en admin — un proyecto con forma de producción que un reclutador puede recorrer en minutos.",
      },
    },
  },
};
