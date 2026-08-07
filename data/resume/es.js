import { canonicalProfile, experienceJobs, professionalProfileEs } from "@/data/resume/canonical";
import { experienceContentById } from "@/data/resume/experience-content.es";

export const resumeLabels = {
  professionalProfile: "Perfil Profesional",
  workExperience: "Experiencia Laboral",
  technicalSkills: "Habilidades Técnicas",
  softSkills: "Habilidades Blandas",
  education: "Educación",
  certifications: "Certificaciones",
  languages: "Idiomas",
  keywords: "Palabras clave",
  contact: "Contacto",
};

const experience = experienceJobs.map((job) => ({
  ...job,
  ...experienceContentById[job.id],
}));

export const resume = {
  locale: "es",
  labels: resumeLabels,
  contact: {
    ...canonicalProfile,
    title: canonicalProfile.headline,
  },
  professionalProfile: professionalProfileEs,
  experience,
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
  certifications: [],
  languages: [{ name: "Inglés", level: "Profesional — Nivel B2" }],
  atsKeywords: [
    "Senior Frontend Engineer",
    "Ingeniero Frontend Senior",
    "React",
    "TypeScript",
    "Vue.js",
    "Next.js",
    "Node.js",
    "Nest.js",
    "JavaScript",
    "Arquitectura Frontend",
    "Optimización de Performance",
    "Sistemas UI Escalables",
    "SaaS",
    "B2B",
    "Jest",
    "Cypress",
    "Testing Automatizado",
    "PostgreSQL",
    "APIs REST",
    "Agile",
    "Scrum",
    "Code Reviews",
    "Colaboración Cross-funcional",
  ],
};

export const portfolioUi = {
  reactPortfolioHub: "Portfolio React",
  elevatorPitch:
    "UIs de producción para flujos B2B complejos — rápidas, bien testeadas y pensadas para escalar con el producto y el equipo.",
  availableFor: "Disponible freelance / full-time",
  openToRemote: "Abierto a remoto",
  viewProjects: "Ver proyectos",
  contactMe: "Contactame",
  contactTitle: "Contacto",
  contactMailSubject: "Contacto desde portfolio",
  copyEmail: "Copiar email",
  emailCopied: "Email copiado",
  openWhatsApp: "Abrir chat de WhatsApp",
  copyPhone: "Copiar teléfono",
  phoneCopied: "Teléfono copiado",
  summary: "Resumen",
  quickLinks: "Enlaces",
  linkedin: "LinkedIn",
  github: "GitHub",
  downloadCv: "Descargar CV completo",
  downloadCvAts: "Versión ATS",
  generating: "Generando…",
  coreSkillsTitle: "Habilidades técnicas",
  skillsSubtitle: "Herramientas y frameworks con los que trabajo día a día",
  softSkillsTitle: "Habilidades blandas",
  experienceHighlights: "Experiencia destacada",
  educationCertifications: "Educación y certificaciones",
  liveDemoProjects: "Portfolio",
  portfolioSubtitle: "Mirá algunos de mis trabajos abajo",
  switchToLight: "Modo claro",
  switchToDark: "Modo oscuro",
  switchLanguage: "Cambiar a inglés",
  languageEn: "EN",
  languageEs: "ES",
  heroChips: [
    "10+ años en desarrollo de software",
    "Banca, salud y plataformas SaaS",
    "50.000+ usuarios activos",
  ],
  caseStudyProblem: "Problema",
  caseStudyAction: "Acción",
  caseStudyResult: "Resultado",
  softSkillChips: [
    "Colaboración cross-funcional",
    "Code reviews",
    "Agile (Scrum)",
    "Entornos regulados",
  ],
};

export const resumePdfFilename = "Matias_Moreno_CV.pdf";
export const resumePdfAtsFilename = "Matias_Moreno_CV_ATS.pdf";
