import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects/projects";
import { resolveTechnologyKeys } from "@/data/technologies";

describe("project tech chips", () => {
  it("resolves an icon key for every Rocha and Nexus stack label", () => {
    for (const project of projects) {
      if (project.id !== "rocha-cotizador" && project.id !== "nexus-web-store") {
        continue;
      }

      for (const label of project.stack) {
        const keys = resolveTechnologyKeys([label]);
        expect(keys, `${project.id} → ${label}`).not.toHaveLength(0);
      }
    }
  });
});
