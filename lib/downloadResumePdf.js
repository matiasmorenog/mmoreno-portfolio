import React from "react";
import { pdf } from "@react-pdf/renderer";
import ResumePdfDocument from "@/components/resume/ResumePdfDocument";
import ResumePdfAtsDocument from "@/components/resume/ResumePdfAtsDocument";
import { getResumePdfFilenames } from "@/data/resume";
import { getResumeForPdf } from "@/lib/getResumeForPdf";

async function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);

  try {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  } finally {
    URL.revokeObjectURL(url);
  }
}

export async function downloadResumePdf(locale = "en") {
  const resumeData = getResumeForPdf(locale);
  const { designed } = getResumePdfFilenames(locale);
  const blob = await pdf(<ResumePdfDocument resume={resumeData} />).toBlob();
  await triggerDownload(blob, designed);
}

export async function downloadResumePdfAts(locale = "en") {
  const resumeData = getResumeForPdf(locale);
  const { ats } = getResumePdfFilenames(locale);
  const blob = await pdf(<ResumePdfAtsDocument resume={resumeData} />).toBlob();
  await triggerDownload(blob, ats);
}
