import { describe, expect, it } from "vitest";
import { pdf, Document, Page, Image } from "@react-pdf/renderer";
import React from "react";
import {
  contactIconKeys,
  getContactPdfIconUrl,
  getTechnologyPdfIconUrl,
} from "@/data/resume/pdf-icon-urls";
import { portfolioSkillKeys } from "@/data/technologies";

describe("getTechnologyPdfIconUrl", () => {
  it("returns embedded PNG data URLs for portfolio skills", () => {
    for (const techKey of portfolioSkillKeys) {
      const iconUrl = getTechnologyPdfIconUrl(techKey, { forDarkBackground: true });
      expect(iconUrl).toMatch(/^data:image\/png;base64,/);
    }
  });

  it("returns embedded PNG data URLs for contact icons", () => {
    for (const iconKey of contactIconKeys) {
      const iconUrl = getContactPdfIconUrl(iconKey);
      expect(iconUrl).toMatch(/^data:image\/png;base64,/);
    }
  });

  it("renders icons in react-pdf without network fetches", async () => {
    const iconUrl = getTechnologyPdfIconUrl("react", { forDarkBackground: true });

    const blob = await pdf(
      <Document>
        <Page>
          <Image src={iconUrl} style={{ width: 24, height: 24 }} />
        </Page>
      </Document>,
    ).toBlob();

    expect(blob.size).toBeGreaterThan(1000);
  });
});
