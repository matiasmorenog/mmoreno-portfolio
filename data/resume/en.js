export const resumeLabels = {
  professionalProfile: "Professional Profile",
  workExperience: "Work Experience",
  technicalSkills: "Technical Skills",
  softSkills: "Soft Skills",
  education: "Education",
  certifications: "Certifications",
  languages: "Languages",
  contact: "Contact",
};

export const resume = {
  locale: "en",
  labels: resumeLabels,
  contact: {
    name: "Matías Moreno",
    title: "Senior Frontend Engineer | React & TypeScript | Scalable UI Systems",
    location: "Tigre, Buenos Aires, Argentina",
    phone: "+54 11 6353 7809",
    email: "matiasmorenog@gmail.com",
    linkedinLabel: "linkedin.com/in/matias-moreno",
    linkedinUrl: "https://www.linkedin.com/in/matias-moreno/",
    githubLabel: "github.com/matiasmorenog",
    githubUrl: "https://github.com/matiasmorenog",
    portfolioLabel: "mmoreno-portfolio.vercel.app",
    portfolioUrl: "https://mmoreno-portfolio.vercel.app",
    profilePhoto: "/profile-photo.jpg",
  },
  professionalProfile: [
    "Senior Frontend Engineer specialized in React, TypeScript, and scalable SaaS/B2B platforms across banking, healthcare, and global certification products.",
    "Delivered high-traffic interfaces for 50,000+ active users, combining performance optimization, automated testing, and cross-functional delivery with backend and product teams.",
    "Seeking to contribute frontend architecture leadership, code quality standards, and user-centered product execution in remote or hybrid engineering teams.",
  ],
  experience: [
    {
      role: "Frontend Engineer",
      company: "INE",
      period: "2022 – 2025",
      periodDisplay: "Mar 2022 - Jul 2025",
      portfolioSummary:
        "SaaS learning platforms (cybersecurity, networking, cloud). React, Vue & TypeScript. 50k+ users. B2B platform lead. Client-side search with Web Workers and lazy loading.",
      highlights: [
        "Delivered React, Vue, and TypeScript features for cybersecurity, networking, and cloud learning platforms serving 50,000+ active B2C and B2B users.",
        "Led frontend ownership of the B2B SaaS platform for one year as an individual contributor (no direct reports), driving feature delivery for enterprise learning products.",
        "Built client-side content search with custom filtering and sorting logic, using a Web Worker to offload heavy processing and keep rendering responsive, plus lazy loading for content lists.",
        "Implemented unit and integration testing plus code-review standards to improve release stability across subscription, certification, and user-management flows.",
      ],
    },
    {
      role: "Software Engineer (Fullstack)",
      company: "Santander Tecnología Argentina",
      period: "2021 – 2022",
      periodDisplay: "Dec 2021 - Mar 2022",
      portfolioSummary:
        "Banking processes and enterprise architecture. Legacy systems support, SQL Server stored procedures, and regulated high-compliance environments.",
      highlights: [
        "Completed banking, security, and enterprise-architecture training while supporting legacy systems in a regulated financial environment.",
        "Resolved production incidents in SQL Server stored procedures, restoring critical operations under strict compliance and audit requirements.",
        "Contributed to maintenance workflows for high-security banking systems with elevated reliability and traceability standards.",
      ],
    },
    {
      role: "Software Engineer (Fullstack)",
      company: "Genetrics",
      period: "2021 – 2021",
      periodDisplay: "Jul 2021 - Sep 2021",
      portfolioSummary:
        "Healthcare applications during COVID-19. React interfaces for hospital workflows, patient screening systems, and government API integration.",
      highlights: [
        "Built React interfaces for hospital workflows during COVID-19, enabling low-contact patient screening for healthcare providers in Argentina.",
        "Integrated government APIs for COVID-19 case reporting, supporting timely public-health data exchange from clinical applications.",
        "Introduced frontend best practices during a team technology transition, improving delivery consistency under urgent pandemic timelines.",
      ],
    },
    {
      role: "Software Engineer (Fullstack)",
      company: "Envone",
      period: "2015 – 2021",
      periodDisplay: "Jul 2015 - Jun 2021",
      portfolioSummary:
        "Broad modular CRM for 5+ main enterprise partners in Latin America. Node.js & Vue.js. Sales, billing, automation, operations, and end-user workflows.",
      highlights: [
        "Evolved a broad modular Node.js/Vue.js CRM used by 5+ main enterprise partners and their end-user bases across Latin America over 6 years.",
        "Built and maintained full-coverage CRM modules spanning sales, billing, automation, and operational management for diverse business needs.",
        "Maintained business-critical production systems while improving performance, stability, and UX through iterative Scrum deliveries.",
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
  certifications: ["Microsoft Office Suite (Advanced/Intermediate)"],
  languages: [{ name: "English", level: "Professional — B2 Level" }],
};

export const portfolioUi = {
  reactPortfolioHub: "React Portfolio Hub",
  availableFor: "Available for freelance / full-time",
  openToRemote: "Open to remote work",
  viewProjects: "View Projects",
  contactMe: "Contact Me",
  contactMailSubject: "Contact from portfolio",
  contactEmailFallback: "If no mail app opens, copy the email below.",
  copyEmail: "Copy email",
  emailCopied: "Email copied",
  summary: "Summary",
  quickLinks: "Quick Links",
  linkedin: "LinkedIn",
  github: "GitHub",
  downloadCv: "Download full resume",
  downloadCvAts: "ATS version",
  generating: "Generating…",
  coreSkillsTitle: "Core Skills",
  softSkillsTitle: "Soft Skills",
  experienceHighlights: "Experience Highlights",
  educationCertifications: "Education & Certifications",
  liveDemoProjects: "Live demo projects",
  switchToLight: "Switch to light mode",
  switchToDark: "Switch to dark mode",
  switchLanguage: "Switch to Spanish",
  languageEn: "EN",
  languageEs: "ES",
  credibilityChips: [
    "10+ years in software development",
    "Banking, healthcare & SaaS platforms",
    "50,000+ active SaaS users",
  ],
  coreSkillChips: [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Jest & Cypress",
    "Performance Optimization",
    "SaaS Product Development",
  ],
  softSkillChips: [
    "Cross-functional collaboration",
    "Code reviews",
    "Agile (Scrum)",
    "Regulated environments",
  ],
};

export const resumePdfFilename = "Matias_Moreno_CV_Frontend_Engineer.pdf";
export const resumePdfAtsFilename = "Matias_Moreno_CV_Frontend_Engineer_ATS.pdf";
