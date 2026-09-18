export const experienceContentById = {
  rocha: {
    role: "Ingeniero de Software Independiente",
    company: "Freelance · Rocha — Plataforma B2B de Pedidos y Cotizaciones",
    periodDisplay: "Jul 2026 – Actualidad",
    portfolioSummary:
      "Plataforma B2B de pedidos y cotizaciones en producción para una panadería con múltiples sucursales, reemplazando un flujo mayorista basado en WhatsApp y Excel.",
    highlights: [
      "Desarrollé y desplegué una plataforma B2B de pedidos y cotizaciones en producción para una empresa de panadería con múltiples sucursales, reemplazando un flujo mayorista basado en WhatsApp y Excel por autogestión para clientes y administración centralizada.",
      "Desarrollé la aplicación end-to-end utilizando Next.js, TypeScript, PostgreSQL, Prisma y NextAuth, incluyendo autenticación, precios personalizados por cliente, gestión de productos y stock, cotizaciones, pedidos y sincronización con Excel.",
      "Llevé el producto desde el relevamiento de requerimientos hasta producción en pocas semanas, trabajando directamente con el dueño del negocio y ampliando funcionalidades en función de necesidades operativas reales.",
      "Actualmente mantengo y continúo desarrollando la plataforma como un servicio de software pago, dando soporte a pedidos mayoristas recurrentes de múltiples sucursales.",
    ],
  },
  ine: {
    role: "Desarrollador Frontend",
    company: "INE",
    periodDisplay: "Mar 2022 – Jul 2025",
    portfolioSummary:
      "Aplicaciones web en producción con React, Vue.js y TypeScript para una plataforma de formación online con más de 150.000 usuarios, incluyendo trabajo frontend B2B y un motor de filtrado/ordenamiento con Web Workers.",
    highlights: [
      "Desarrollé aplicaciones web en producción utilizando React, Vue.js, TypeScript y JavaScript para una plataforma de formación online con más de 150.000 usuarios, colaborando con equipos de backend, QA, diseño y producto.",
      "Implementé funcionalidades frontend para la plataforma B2B de INE durante aproximadamente un año, desarrollando interfaces responsive e integrando APIs REST.",
      "Desarrollé un motor de filtrado y ordenamiento basado en Web Workers para aproximadamente 14.000 registros, manteniendo el dataset en memoria dentro del Worker y trasladando el procesamiento fuera del hilo principal del navegador para conservar una interacción fluida.",
      "Alcancé 98% de cobertura de tests sobre la lógica de filtrado y ordenamiento del Web Worker.",
      "Apliqué técnicas de rendimiento frontend como lazy loading, code splitting, memoization y optimizaciones de requests y renderizado, además de participar regularmente en code reviews y refactorizaciones.",
    ],
    technicalHighlight: {
      title: "Filtrado y ordenamiento con Web Worker",
      metrics: [
        { label: "Registros", value: "~14.000" },
        { label: "Técnica", value: "Web Worker" },
        { label: "Enfoque", value: "Fuera del hilo principal" },
        { label: "Cobertura", value: "98% de la lógica del worker" },
      ],
      description:
        "Dataset mantenido en memoria dentro del Worker, ejecutando filtrado y ordenamiento fuera del hilo principal del navegador para conservar una interacción fluida.",
    },
  },
  envone: {
    role: "Desarrollador Full-Stack",
    company: "Envone",
    periodDisplay: "Jul 2015 – Jun 2021",
    portfolioSummary:
      "Seis años desarrollando y manteniendo una plataforma B2B multi-módulo para maquinaria industrial — Vue.js, Node.js, Express, Sequelize, MySQL y posteriormente PostgreSQL.",
    highlights: [
      "Desarrollé y mantuve una plataforma B2B multi-módulo para el sector de maquinaria industrial, trabajando end-to-end con Vue.js, Vuex, Node.js, Express, Sequelize, MySQL y posteriormente PostgreSQL.",
      "Desarrollé funcionalidades frontend, APIs REST, modelos de base de datos, migraciones y lógica de negocio para flujos entre fabricantes de maquinaria, proveedores y clientes.",
      "Diseñé e implementé, junto con el líder técnico, un sistema de permisos basado en roles y registros que controlaba las capacidades de lectura, edición y compartición entre usuarios.",
      "Desarrollé funcionalidades para inventario, maquinaria, repuestos, servicios, automatización de tareas y notificaciones basadas en eventos.",
      "Participé en la migración de Ember.js a Vue.js 2 y desarrollé tests de integración con Mocha y Cypress dentro de un flujo de pull requests y code reviews.",
    ],
  },
  genetrics: {
    role: "Desarrollador de Software",
    company: "Genetrics",
    periodDisplay: "Jul 2021 – Sep 2021",
    portfolioSummary:
      "Aplicaciones de salud con React y Material UI desde cero, incluyendo registro de pacientes con DNI/código de barras y el frontend de reporte COVID-19 de Hospital Austral.",
    highlights: [
      "Desarrollé y entregué aplicaciones de salud con React y Material UI desde cero, trabajando con un alto grado de autonomía.",
      "Desarrollé un flujo médico en producción utilizando identificación mediante DNI argentino y lectura de códigos de barras para registrar pacientes y asociar muestras de sangre con sus registros.",
      "Desarrollé el frontend de una aplicación de reporte de COVID-19 para Hospital Austral, consumiendo servicios del hospital e integrando una API gubernamental para el envío de datos de pacientes.",
      "Introduje control de versiones con Git y la estructura inicial de los proyectos, colaborando con otro desarrollador que estaba adoptando React.",
    ],
  },
  santander: {
    role: "Desarrollador de Software",
    company: "Santander",
    periodDisplay: "Dic 2021 – Mar 2022",
    portfolioSummary:
      "Tareas de mantenimiento sobre stored procedures SQL mientras completaba el onboarding técnico y las capacitaciones en el entorno de desarrollo de Santander.",
    highlights: [
      "Realicé tareas de mantenimiento sobre stored procedures SQL mientras completaba el onboarding técnico y las capacitaciones dentro del entorno de desarrollo de Santander.",
    ],
  },
};
