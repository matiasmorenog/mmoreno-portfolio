import { describe, expect, it } from "vitest";
import { getResume, getResumePdfFilenames } from "@/data/resume";

describe("CV download filenames and locale data", () => {
  it("maps locale + variant to distinct download filenames", () => {
    expect(getResumePdfFilenames("en")).toEqual({
      designed: "Matias_Moreno_CV_EN.pdf",
      ats: "Matias_Moreno_CV_ATS_EN.pdf",
    });
    expect(getResumePdfFilenames("es")).toEqual({
      designed: "Matias_Moreno_CV_ES.pdf",
      ats: "Matias_Moreno_CV_ATS_ES.pdf",
    });
  });

  it("uses distinct EN/ES content from the same data model", () => {
    const en = getResume("en");
    const es = getResume("es");

    expect(en.contact.title).toContain("Software Engineer");
    expect(es.contact.title).toContain("Ingeniero de Software");
    expect(en.experience.map((job) => job.id)).toEqual(
      es.experience.map((job) => job.id)
    );
    expect(en.experience[0].role).not.toEqual(es.experience[0].role);
    expect(en.professionalProfile[0]).not.toEqual(es.professionalProfile[0]);
  });

  it("includes selected project and omits soft skills / keyword stuffing", () => {
    const en = getResume("en");
    const es = getResume("es");

    expect(en.selectedProject.name).toBe("Nexus Web Store");
    expect(es.selectedProject.name).toBe("Nexus Web Store");
    expect(en.selectedProject.subtitle).toBe("Personal SaaS Product");
    expect(es.selectedProject.subtitle).toBe("Producto SaaS Personal");
    expect(en.labels.selectedProject).toBe("Selected Project");
    expect(es.labels.selectedProject).toBe("Proyecto Destacado");
    expect(en.softSkills).toBeUndefined();
    expect(es.softSkills).toBeUndefined();
    expect(en.atsKeywords).toBeUndefined();
    expect(es.atsKeywords).toBeUndefined();
    expect(en.labels.softSkills).toBeUndefined();
    expect(en.labels.keywords).toBeUndefined();
  });
});
