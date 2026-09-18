import {
  canonicalProfile,
  experienceJobs,
  professionalProfileEs,
} from "@/data/resume/canonical";
import { experienceContentById } from "@/data/resume/experience-content.es";
import { selectedProjectByLocale } from "@/data/resume/selected-project";

export const resumeLabels = {
  professionalProfile: "Perfil Profesional",
  workExperience: "Experiencia Laboral",
  technicalSkills: "Habilidades Técnicas",
  education: "Educación",
  certifications: "Certificaciones",
  languages: "Idiomas",
  contact: "Contacto",
  selectedProject: "Proyecto Destacado",
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
    title: "Ingeniero de Software | React, TypeScript, Next.js & Node.js",
  },
  professionalProfile: professionalProfileEs,
  experience,
  skills: [
    {
      category: "Frontend",
      items:
        "React, Next.js, Vue.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Sass, Material UI, Zustand, Redux, Vuex",
    },
    {
      category: "Backend",
      items: "Node.js, Express, APIs REST, Prisma, Sequelize",
    },
    { category: "Bases de datos", items: "PostgreSQL, MySQL, SQL" },
    { category: "Testing", items: "Jest, Mocha, Cypress" },
    {
      category: "Herramientas / Prácticas",
      items:
        "Git, GitHub, Code Review, Agile / Scrum, Vercel, Desarrollo asistido por IA, Cursor, Codex",
    },
  ],
  selectedProject: selectedProjectByLocale.es,
  education: [
    {
      degree: "Tecnicatura Superior en Programación",
      institution: "Universidad Tecnológica Nacional (UTN)",
      period: "2012–2015",
    },
  ],
  certifications: [],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B2 — Competencia profesional" },
  ],
};

export const portfolioUi = {
  reactPortfolioHub: "Portfolio",
  elevatorPitch:
    "Desarrollo aplicaciones web en producción con una fuerte especialización frontend y experiencia full-stack en productos SaaS, B2B y aplicaciones web modernas.",
  availableFor: "Disponible freelance / full-time",
  openToRemote: "Abierto a remoto",
  viewProjects: "Ver proyectos",
  contactMe: "Contacto",
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
  downloadCv: "Descargar CV",
  downloadCvAts: "Descargar CV ATS",
  generating: "Generando…",
  coreSkillsTitle: "Habilidades técnicas",
  skillsSubtitle: "Stack con foco frontend y experiencia full-stack",
  experienceHighlights: "Experiencia",
  educationCertifications: "Educación e idiomas",
  liveDemoProjects: "Proyectos",
  portfolioSubtitle: "Trabajo reciente en producción y productos personales",
  switchToLight: "Modo claro",
  switchToDark: "Modo oscuro",
  switchLanguage: "Cambiar a inglés",
  languageEn: "EN",
  languageEs: "ES",
  heroChips: ["Más de 10 años de experiencia", "Foco frontend · Experiencia full-stack"],
  caseStudyProblem: "Problema",
  caseStudyAction: "Acción",
  caseStudyResult: "Resultado",
  technicalHighlightLabel: "Highlight técnico",
  projectLiveDemo: "Ver demo",
  projectSourceCode: "Código fuente",
  projectDemoSoon: "Demo pronto",
  projectRoleLabel: "Rol",
};

export const resumePdfFilename = "Matias_Moreno_CV_ES.pdf";
export const resumePdfAtsFilename = "Matias_Moreno_CV_ATS_ES.pdf";
