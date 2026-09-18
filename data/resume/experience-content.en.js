export const experienceContentById = {
  rocha: {
    role: "Independent Software Engineer",
    company: "Freelance · Rocha B2B Ordering & Quotation Platform",
    periodDisplay: "Jul 2026 – Present",
    portfolioSummary:
      "Production B2B ordering and quotation platform for a multi-location bakery, replacing WhatsApp/Excel wholesale workflows with customer self-service and centralized admin.",
    highlights: [
      "Built and deployed a production B2B ordering and quotation platform for a multi-location bakery business, replacing a WhatsApp- and Excel-based wholesale workflow with customer self-service and centralized administration.",
      "Developed the application end-to-end using Next.js, TypeScript, PostgreSQL, Prisma, and NextAuth, including authentication, customer-specific pricing, product and stock management, quotations, orders, and Excel synchronization.",
      "Took the product from requirements discovery to production within weeks, working directly with the business owner and expanding functionality based on real operational needs.",
      "Continue to maintain and evolve the platform as a paid software service, supporting recurring wholesale ordering across multiple business locations.",
    ],
  },
  ine: {
    role: "Frontend Developer",
    company: "INE",
    periodDisplay: "Mar 2022 – Jul 2025",
    portfolioSummary:
      "Production React, Vue.js, and TypeScript apps for an online learning platform with 150,000+ users, including B2B frontend work and a Web Worker filtering/sorting engine.",
    highlights: [
      "Developed production web applications using React, Vue.js, TypeScript, and JavaScript for an online learning platform serving 150,000+ users, collaborating with backend, QA, design, and product teams.",
      "Implemented frontend features for INE's B2B platform for approximately one year, building responsive interfaces and integrating REST APIs.",
      "Built a Web Worker-based filtering and sorting engine for approximately 14,000 records, keeping the dataset in worker memory and moving processing off the browser's main thread to maintain responsive interactions.",
      "Achieved 98% test coverage for the Web Worker filtering and sorting logic.",
      "Applied frontend performance techniques including lazy loading, code splitting, memoization, request optimization, and rendering optimization, while participating in regular code reviews and refactoring.",
    ],
    technicalHighlight: {
      title: "Web Worker filtering & sorting",
      metrics: [
        { label: "Records", value: "~14,000" },
        { label: "Technique", value: "Web Worker" },
        { label: "Focus", value: "Off main thread" },
        { label: "Coverage", value: "98% worker logic" },
      ],
      description:
        "Kept the dataset in worker memory and moved filtering and sorting off the browser's main thread to keep interactions responsive.",
    },
  },
  envone: {
    role: "Full-Stack Developer",
    company: "Envone",
    periodDisplay: "Jul 2015 – Jun 2021",
    portfolioSummary:
      "Six years building and maintaining a multi-module B2B platform for industrial machinery — Vue.js, Node.js, Express, Sequelize, MySQL, and later PostgreSQL.",
    highlights: [
      "Developed and maintained a multi-module B2B platform for the industrial machinery sector, working end-to-end across Vue.js, Vuex, Node.js, Express, Sequelize, MySQL, and later PostgreSQL.",
      "Built frontend functionality, REST APIs, database models, migrations, and business logic supporting workflows between machinery manufacturers, suppliers, and customers.",
      "Designed and implemented, together with the technical lead, a role- and record-based permissions system controlling read, edit, and sharing capabilities between users.",
      "Developed functionality for inventory, machinery, spare parts, services, task automation, and event-driven notifications.",
      "Contributed to the migration from Ember.js to Vue.js 2 and developed integration tests with Mocha and Cypress within a pull-request and code-review workflow.",
    ],
  },
  genetrics: {
    role: "Software Developer",
    company: "Genetrics",
    periodDisplay: "Jul 2021 – Sep 2021",
    portfolioSummary:
      "React and Material UI healthcare apps from scratch, including patient registration with Argentine DNI/barcode scanning and a Hospital Austral COVID-19 reporting frontend.",
    highlights: [
      "Built and delivered React and Material UI healthcare applications from scratch with a high degree of autonomy.",
      "Developed a production medical workflow using Argentine DNI identification and barcode scanning to register patients and associate blood samples with patient records.",
      "Developed the frontend for a Hospital Austral COVID-19 reporting application, consuming hospital services and integrating with a government API for patient reporting.",
      "Introduced Git-based version control and project structure for the new applications while collaborating with another developer adopting the React stack.",
    ],
  },
  santander: {
    role: "Software Developer",
    company: "Santander",
    periodDisplay: "Dec 2021 – Mar 2022",
    portfolioSummary:
      "Supported SQL stored-procedure maintenance while completing technical onboarding and training in Santander's development environment.",
    highlights: [
      "Supported maintenance tasks involving SQL stored procedures while completing technical onboarding and training within Santander's development environment.",
    ],
  },
};
