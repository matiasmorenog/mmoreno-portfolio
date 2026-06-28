export const resumeLabels = {
  professionalProfile: "Perfil Profesional",
  workExperience: "Experiencia Laboral",
  technicalSkills: "Habilidades Técnicas",
  softSkills: "Habilidades Blandas",
  education: "Educación",
  certifications: "Certificaciones",
  languages: "Idiomas",
  contact: "Contacto",
};

export const resume = {
  locale: "es",
  labels: resumeLabels,
  contact: {
    name: "Matías Moreno",
    title:
      "Senior Frontend Engineer | React & TypeScript | Sistemas UI Escalables",
    location: "Tigre, Buenos Aires, Argentina",
    phone: "+54 11 6353 7809",
    email: "matiasmorenog@gmail.com",
    linkedinLabel: "linkedin.com/in/matias-moreno",
    linkedinUrl: "https://www.linkedin.com/in/matias-moreno/",
    githubLabel: "github.com/matiasmorenog",
    githubUrl: "https://github.com/matiasmorenog",
    portfolioLabel: "react-skill-showcase.vercel.app",
    portfolioUrl: "https://react-skill-showcase.vercel.app",
    profilePhoto: "/profile-photo.jpg",
  },
  professionalProfile: [
    "Senior Frontend Engineer especializado en React, TypeScript y plataformas SaaS/B2B escalables en los sectores bancario, salud y certificaciones globales.",
    "Entregué interfaces de alto tráfico para más de 50.000 usuarios activos, combinando optimización de performance, testing automatizado y trabajo cross-funcional con equipos de backend y producto.",
    "Busco aportar liderazgo en arquitectura frontend, estándares de calidad de código y ejecución centrada en el usuario en equipos remotos o híbridos.",
  ],
  experience: [
    {
      role: "Frontend Engineer",
      company: "INE",
      period: "2022 – 2025",
      periodDisplay: "Mar 2022 - Jul 2025",
      portfolioSummary:
        "Plataformas SaaS de aprendizaje (ciberseguridad, networking, cloud). React, Vue y TypeScript. 50k+ usuarios. Liderazgo frontend B2B. Buscadores client-side con Web Workers y lazy loading.",
      highlights: [
        "Desarrollé funcionalidades con React, Vue y TypeScript para plataformas de aprendizaje en ciberseguridad, networking y cloud, con más de 50.000 usuarios activos B2C y B2B.",
        "Lideré el frontend de la plataforma SaaS B2B durante un año como contributor individual (sin personas a cargo), impulsando entregas para productos de capacitación enterprise.",
        "Construí buscadores de contenido client-side con filtrado y ordenamiento propios, delegando el procesamiento pesado a un Web Worker para no relentizar el render, junto con lazy loading de listados.",
        "Implementé testing unitario e integración y estándares de code review para mejorar la estabilidad de releases en suscripciones, certificaciones y gestión de usuarios.",
      ],
    },
    {
      role: "Software Engineer (Fullstack)",
      company: "Santander Tecnología Argentina",
      period: "2021 – 2022",
      periodDisplay: "Dic 2021 - Mar 2022",
      portfolioSummary:
        "Procesos bancarios y arquitectura enterprise. Soporte de sistemas legacy, stored procedures en SQL Server y entornos regulados de alta compliance.",
      highlights: [
        "Completé capacitaciones en procesos bancarios, seguridad y arquitectura enterprise mientras daba soporte a sistemas legacy en un entorno financiero regulado.",
        "Resolví incidentes en stored procedures de SQL Server, restaurando operaciones críticas bajo estrictos requisitos de compliance y auditoría.",
        "Contribuí a flujos de mantenimiento de sistemas bancarios de alta seguridad con estándares elevados de confiabilidad y trazabilidad.",
      ],
    },
    {
      role: "Software Engineer (Fullstack)",
      company: "Genetrics",
      period: "2021 – 2021",
      periodDisplay: "Jul 2021 - Sep 2021",
      portfolioSummary:
        "Aplicaciones de salud durante COVID-19. Interfaces React para flujos hospitalarios, sistemas de triaje y integración con APIs gubernamentales.",
      highlights: [
        "Construí interfaces React para flujos hospitalarios durante COVID-19, habilitando triaje de pacientes con mínimo contacto físico en Argentina.",
        "Integré APIs gubernamentales para reporte de casos COVID-19, facilitando el intercambio oportuno de datos de salud pública desde aplicaciones clínicas.",
        "Introduje buenas prácticas de frontend durante una transición tecnológica del equipo, mejorando la consistencia de entregas bajo plazos urgentes.",
      ],
    },
    {
      role: "Software Engineer (Fullstack)",
      company: "Envone",
      period: "2015 – 2021",
      periodDisplay: "Jul 2015 - Jun 2021",
      portfolioSummary:
        "CRM modular amplio para 5+ socios enterprise principales en Latinoamérica. Node.js y Vue.js. Ventas, facturación, automatización, operaciones y usuarios finales.",
      highlights: [
        "Evolucioné un CRM modular amplio con Node.js/Vue.js usado por 5+ socios enterprise principales y sus bases de usuarios finales en Latinoamérica durante 6 años.",
        "Construí y mantuve módulos de cobertura integral: ventas, facturación, automatización y gestión operativa para necesidades de negocio diversas.",
        "Mantuve sistemas productivos de alta criticidad mientras mejoraba performance, estabilidad y UX mediante entregas iterativas en Scrum.",
      ],
    },
  ],
  skills: [
    {
      category: "Frontend",
      items:
        "React.js, Next.js, Vue.js, TypeScript, JavaScript (ES6+), HTML5, CSS3",
    },
    { category: "Backend", items: "Node.js, Nest.js" },
    { category: "Bases de datos", items: "PostgreSQL, MySQL" },
    {
      category: "Testing",
      items: "Mocha.js, Jest, Cypress (Unit & Integration)",
    },
    {
      category: "Otros",
      items:
        "Arquitectura Frontend Escalable, Optimización de Performance, Code Reviews, Metodologías Ágiles (Scrum), Desarrollo de Productos SaaS",
    },
  ],
  softSkills: [
    "Colaboración cross-funcional con equipos de backend, producto y QA en entornos SaaS y enterprise",
    "Code reviews y estándares de calidad frontend en equipos distribuidos",
    "Entrega ágil (Scrum) con releases iterativos orientados a valor",
    "Experiencia en entornos regulados de alta compliance (banca, salud)",
  ],
  education: [
    {
      degree: "Tecnicatura Superior en Programación",
      institution: "Universidad Tecnológica Nacional (UTN)",
      period: "2012 – 2015",
    },
  ],
  certifications: ["Microsoft Office Suite (Avanzado/Intermedio)"],
  languages: [{ name: "Inglés", level: "Profesional — Nivel B2" }],
};

export const portfolioUi = {
  reactPortfolioHub: "Portfolio React",
  availableFor: "Disponible freelance / full-time",
  openToRemote: "Abierto a remoto",
  viewProjects: "Ver proyectos",
  contactMe: "Contactame",
  contactMailSubject: "Contacto desde portfolio",
  contactEmailFallback: "Si no se abre tu cliente de correo, copiá el email de abajo.",
  copyEmail: "Copiar email",
  emailCopied: "Email copiado",
  summary: "Resumen",
  quickLinks: "Enlaces",
  linkedin: "LinkedIn",
  github: "GitHub",
  downloadCv: "Descargar CV completo",
  downloadCvAts: "Versión ATS",
  generating: "Generando…",
  coreSkillsTitle: "Habilidades técnicas",
  softSkillsTitle: "Habilidades blandas",
  experienceHighlights: "Experiencia destacada",
  educationCertifications: "Educación y certificaciones",
  liveDemoProjects: "Proyectos en vivo",
  switchToLight: "Modo claro",
  switchToDark: "Modo oscuro",
  switchLanguage: "Cambiar a inglés",
  languageEn: "EN",
  languageEs: "ES",
  credibilityChips: [
    "10+ años en desarrollo de software",
    "Banca, salud y plataformas SaaS",
    "50.000+ usuarios activos en SaaS",
  ],
  coreSkillChips: [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Jest & Cypress",
    "Optimización de performance",
    "Desarrollo SaaS",
  ],
  softSkillChips: [
    "Colaboración cross-funcional",
    "Code reviews",
    "Agile (Scrum)",
    "Entornos regulados",
  ],
};

export const resumePdfFilename = "Matias_Moreno_CV_Desarrollador_Frontend.pdf";
export const resumePdfAtsFilename = "Matias_Moreno_CV_Desarrollador_Frontend_ATS.pdf";
