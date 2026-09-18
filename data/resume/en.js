import {
  canonicalProfile,
  experienceJobs,
  professionalProfileEn,
} from "@/data/resume/canonical";
import { experienceContentById } from "@/data/resume/experience-content.en";
import { selectedProjectByLocale } from "@/data/resume/selected-project";

export const resumeLabels = {
  professionalProfile: "Professional Profile",
  workExperience: "Work Experience",
  technicalSkills: "Technical Skills",
  education: "Education",
  certifications: "Certifications",
  languages: "Languages",
  contact: "Contact",
  selectedProject: "Selected Project",
};

const experience = experienceJobs.map((job) => ({
  ...job,
  ...experienceContentById[job.id],
}));

export const resume = {
  locale: "en",
  labels: resumeLabels,
  contact: {
    ...canonicalProfile,
    title: "Software Engineer | React, TypeScript, Next.js & Node.js",
  },
  professionalProfile: professionalProfileEn,
  experience,
  skills: [
    {
      category: "Frontend",
      items:
        "React, Next.js, Vue.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Sass, Material UI, Zustand, Redux, Vuex",
    },
    {
      category: "Backend",
      items: "Node.js, Express, REST APIs, Prisma, Sequelize",
    },
    { category: "Databases", items: "PostgreSQL, MySQL, SQL" },
    { category: "Testing", items: "Jest, Mocha, Cypress" },
    {
      category: "Tools / Practices",
      items:
        "Git, GitHub, Code Review, Agile / Scrum, Vercel, AI-assisted Development, Cursor, Codex",
    },
  ],
  selectedProject: selectedProjectByLocale.en,
  education: [
    {
      degree: "Advanced Technician Degree in Programming",
      institution: "Universidad Tecnológica Nacional (UTN)",
      period: "2012–2015",
    },
  ],
  certifications: [],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "B2 — Professional Working Proficiency" },
  ],
};

export const portfolioUi = {
  reactPortfolioHub: "Portfolio",
  elevatorPitch:
    "I build production web applications with a strong frontend focus and full-stack experience across SaaS, B2B, and modern web products.",
  availableFor: "Available for freelance / full-time",
  openToRemote: "Open to remote work",
  viewProjects: "View Projects",
  contactMe: "Contact",
  contactTitle: "Contact",
  contactMailSubject: "Contact from portfolio",
  copyEmail: "Copy email",
  emailCopied: "Email copied",
  openWhatsApp: "Open WhatsApp chat",
  copyPhone: "Copy phone",
  phoneCopied: "Phone copied",
  summary: "Summary",
  quickLinks: "Quick Links",
  linkedin: "LinkedIn",
  github: "GitHub",
  downloadCv: "Download CV",
  downloadCvAts: "Download ATS CV",
  generating: "Generating…",
  coreSkillsTitle: "Technical Skills",
  skillsSubtitle: "Frontend-strong stack with full-stack delivery experience",
  experienceHighlights: "Experience",
  educationCertifications: "Education & Languages",
  liveDemoProjects: "Projects",
  portfolioSubtitle: "Recent production and personal product work",
  switchToLight: "Switch to light mode",
  switchToDark: "Switch to dark mode",
  switchLanguage: "Switch to Spanish",
  languageEn: "EN",
  languageEs: "ES",
  heroChips: ["10+ years of experience", "Frontend-focused · Full-stack experienced"],
  caseStudyProblem: "Problem",
  caseStudyAction: "Action",
  caseStudyResult: "Result",
  technicalHighlightLabel: "Technical highlight",
  projectLiveDemo: "Live Demo",
  projectSourceCode: "Source Code",
  projectDemoSoon: "Demo Soon",
  projectRoleLabel: "Role",
};

export const resumePdfFilename = "Matias_Moreno_CV_EN.pdf";
export const resumePdfAtsFilename = "Matias_Moreno_CV_ATS_EN.pdf";
