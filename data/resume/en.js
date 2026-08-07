import { canonicalProfile, experienceJobs, professionalProfileEn } from "@/data/resume/canonical";
import { experienceContentById } from "@/data/resume/experience-content.en";

export const resumeLabels = {
  professionalProfile: "Professional Profile",
  workExperience: "Work Experience",
  technicalSkills: "Technical Skills",
  softSkills: "Soft Skills",
  education: "Education",
  certifications: "Certifications",
  languages: "Languages",
  keywords: "Keywords",
  contact: "Contact",
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
    title: canonicalProfile.headline,
  },
  professionalProfile: professionalProfileEn,
  experience,
  skills: [
    {
      category: "Frontend",
      items:
        "React.js, Next.js, Vue.js, TypeScript, JavaScript (ES6+), HTML5, CSS3",
    },
    { category: "Backend", items: "Node.js, Nest.js" },
    { category: "Databases", items: "PostgreSQL, MySQL" },
    {
      category: "Testing",
      items: "Mocha.js, Jest, Cypress (Unit & Integration)",
    },
    {
      category: "Other",
      items:
        "Scalable Frontend Architecture, Performance Optimization, Code Reviews, Agile Methodologies (Scrum), SaaS Product Development",
    },
  ],
  softSkills: [
    "Cross-functional collaboration with backend, product, and QA teams in SaaS and enterprise environments",
    "Code reviews and frontend quality standards in distributed engineering teams",
    "Agile delivery (Scrum) with iterative, value-focused releases",
    "Experience in regulated, high-compliance environments (banking, healthcare)",
  ],
  education: [
    {
      degree: "Higher Technical Degree in Programming",
      institution: "Universidad Tecnológica Nacional (UTN)",
      period: "2012 – 2015",
    },
  ],
  certifications: [],
  languages: [{ name: "English", level: "Professional — B2 Level" }],
  atsKeywords: [
    "Senior Frontend Engineer",
    "React",
    "TypeScript",
    "Vue.js",
    "Next.js",
    "Node.js",
    "Nest.js",
    "JavaScript",
    "Frontend Architecture",
    "Performance Optimization",
    "Scalable UI Systems",
    "SaaS",
    "B2B",
    "Jest",
    "Cypress",
    "Automated Testing",
    "PostgreSQL",
    "REST APIs",
    "Agile",
    "Scrum",
    "Code Reviews",
    "Cross-functional Collaboration",
  ],
};

export const portfolioUi = {
  reactPortfolioHub: "React Portfolio Hub",
  elevatorPitch:
    "Production UIs for complex B2B workflows — fast, well-tested, and built to scale as products and teams grow.",
  availableFor: "Available for freelance / full-time",
  openToRemote: "Open to remote work",
  viewProjects: "View Projects",
  contactMe: "Contact Me",
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
  downloadCv: "Download full resume",
  downloadCvAts: "ATS version",
  generating: "Generating…",
  coreSkillsTitle: "Core Skills",
  skillsSubtitle: "Tools and frameworks I work with daily",
  softSkillsTitle: "Soft Skills",
  experienceHighlights: "Experience Highlights",
  educationCertifications: "Education & Certifications",
  liveDemoProjects: "Portfolio",
  portfolioSubtitle: "Check out some of my work below",
  switchToLight: "Switch to light mode",
  switchToDark: "Switch to dark mode",
  switchLanguage: "Switch to Spanish",
  languageEn: "EN",
  languageEs: "ES",
  heroChips: [
    "10+ years in software development",
    "Banking, healthcare & SaaS platforms",
    "50,000+ active users",
  ],
  caseStudyProblem: "Problem",
  caseStudyAction: "Action",
  caseStudyResult: "Result",
  softSkillChips: [
    "Cross-functional collaboration",
    "Code reviews",
    "Agile (Scrum)",
    "Regulated environments",
  ],
};

export const resumePdfFilename = "Matias_Moreno_Resume.pdf";
export const resumePdfAtsFilename = "Matias_Moreno_Resume_ATS.pdf";
