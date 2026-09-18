import React from "react";
import { Document, Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import PdfContactItem from "@/components/resume/PdfContactItem";
import PdfSkillsIconGrid from "@/components/resume/PdfSkillsIconGrid";
import PdfTechStack from "@/components/resume/PdfTechStack";

const colors = {
  primary: "#0a7f78",
  sidebar: "#0e1320",
  sidebarMuted: "#8fa8bc",
  body: "#1e2d3d",
  muted: "#5a6d7e",
  white: "#ffffff",
  accent: "#7de2db",
};

/** Page 1: Rocha → Santander. Page 2: Genetrics + Envone + Nexus (balanced fill). */
const PAGE1_JOB_IDS = ["rocha", "ine", "santander"];
const PAGE2_JOB_IDS = ["genetrics", "envone"];

const styles = StyleSheet.create({
  page: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingRight: 22,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: colors.body,
    backgroundColor: colors.white,
  },
  pageFull: {
    paddingTop: 22,
    paddingBottom: 28,
    paddingHorizontal: 28,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: colors.body,
    backgroundColor: colors.white,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "30%",
    backgroundColor: colors.sidebar,
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 18,
  },
  main: {
    marginLeft: "30%",
    paddingLeft: 22,
  },
  photo: {
    width: 78,
    height: 78,
    borderRadius: 39,
    marginBottom: 8,
    alignSelf: "center",
  },
  name: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    letterSpacing: 0.3,
    marginBottom: 4,
  },
  title: {
    fontSize: 7.5,
    color: colors.accent,
    lineHeight: 1.35,
    marginBottom: 12,
  },
  sidebarSection: {
    marginBottom: 12,
  },
  sidebarHeading: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: colors.accent,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 5,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(125, 226, 219, 0.35)",
  },
  educationItem: {
    marginBottom: 6,
  },
  educationDegree: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    lineHeight: 1.3,
  },
  educationMeta: {
    fontSize: 7.5,
    color: colors.sidebarMuted,
    lineHeight: 1.35,
    marginTop: 1,
  },
  listItem: {
    fontSize: 7.5,
    color: colors.sidebarMuted,
    lineHeight: 1.35,
    marginBottom: 2,
  },
  sectionHeading: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginBottom: 6,
    marginTop: 4,
    paddingBottom: 3,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.primary,
  },
  paragraph: {
    fontSize: 9,
    lineHeight: 1.42,
    color: colors.body,
    marginBottom: 5,
    textAlign: "justify",
  },
  jobBlock: {
    marginBottom: 9,
  },
  jobRole: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: colors.body,
    lineHeight: 1.3,
    marginBottom: 1,
  },
  jobCompany: {
    fontSize: 8.5,
    color: colors.muted,
    lineHeight: 1.35,
    marginBottom: 1,
  },
  jobPeriod: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 3,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 2,
    paddingRight: 2,
  },
  bulletDot: {
    width: 9,
    fontSize: 8.5,
    color: colors.primary,
    lineHeight: 1.4,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    lineHeight: 1.4,
    color: colors.muted,
    textAlign: "justify",
  },
  page2Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 18,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  page2Name: {
    fontSize: 15,
    fontFamily: "Helvetica-Bold",
    color: colors.body,
  },
  page2Title: {
    fontSize: 8.5,
    color: colors.primary,
    marginTop: 2,
  },
  page2Meta: {
    fontSize: 8,
    color: colors.muted,
    textAlign: "right",
    lineHeight: 1.45,
  },
  page2SectionHeading: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginBottom: 8,
    marginTop: 6,
    paddingBottom: 4,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.primary,
  },
  page2JobBlock: {
    marginBottom: 14,
  },
  page2JobRole: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: colors.body,
    lineHeight: 1.3,
    marginBottom: 2,
  },
  page2JobCompany: {
    fontSize: 9,
    color: colors.muted,
    lineHeight: 1.35,
    marginBottom: 2,
  },
  page2JobPeriod: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 5,
  },
  page2BulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 3,
    paddingRight: 2,
  },
  page2BulletDot: {
    width: 10,
    fontSize: 9,
    color: colors.primary,
    lineHeight: 1.45,
  },
  page2BulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.45,
    color: colors.muted,
    textAlign: "justify",
  },
  page2ProjectTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: colors.body,
    lineHeight: 1.3,
    marginBottom: 2,
  },
  page2ProjectMeta: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 5,
  },
  projectTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: colors.body,
    lineHeight: 1.3,
    marginBottom: 1,
  },
  projectMeta: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 4,
  },
});

function SidebarSection({ title, children }) {
  return (
    <View style={styles.sidebarSection}>
      <Text style={styles.sidebarHeading}>{title}</Text>
      {children}
    </View>
  );
}

function BulletList({ items, dense = true }) {
  const rowStyle = dense ? styles.bulletRow : styles.page2BulletRow;
  const dotStyle = dense ? styles.bulletDot : styles.page2BulletDot;
  const textStyle = dense ? styles.bulletText : styles.page2BulletText;

  return (
    <>
      {items.map((item) => (
        <View key={item} style={rowStyle} wrap={false}>
          <Text style={dotStyle}>•</Text>
          <Text style={textStyle}>{item}</Text>
        </View>
      ))}
    </>
  );
}

function JobBlock({ job, spacious = false }) {
  return (
    <View style={spacious ? styles.page2JobBlock : styles.jobBlock}>
      <View wrap={false}>
        <Text style={spacious ? styles.page2JobRole : styles.jobRole}>{job.role}</Text>
        <Text style={spacious ? styles.page2JobCompany : styles.jobCompany}>
          {job.company}
        </Text>
        <Text style={spacious ? styles.page2JobPeriod : styles.jobPeriod}>
          {job.periodDisplay}
        </Text>
      </View>
      <BulletList items={job.highlights} dense={!spacious} />
      <PdfTechStack labels={job.stack} compact showLabel />
    </View>
  );
}

function SelectedProjectBlock({ labels, project }) {
  if (!project) return null;

  return (
    <View style={styles.page2JobBlock}>
      <Text style={styles.page2SectionHeading}>{labels.selectedProject}</Text>
      <View wrap={false}>
        <Text style={styles.page2ProjectTitle}>
          {project.name} — {project.subtitle}
        </Text>
        <Text style={styles.page2ProjectMeta}>{project.periodDisplay}</Text>
      </View>
      <BulletList items={project.highlights} dense={false} />
    </View>
  );
}

function jobsByIds(experience, ids) {
  return ids.map((id) => experience.find((job) => job.id === id)).filter(Boolean);
}

export default function ResumePdfDocument({ resume }) {
  const {
    contact,
    labels,
    professionalProfile,
    experience,
    selectedProject,
    education,
    certifications,
    languages,
  } = resume;

  const page1Jobs = jobsByIds(experience, PAGE1_JOB_IDS);
  const page2Jobs = jobsByIds(experience, PAGE2_JOB_IDS);

  return (
    <Document title={`${contact.name} — Resume`} author={contact.name} subject="Resume">
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebar}>
          {contact.photoUrl ? (
            <Image src={contact.photoUrl} style={styles.photo} />
          ) : null}
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.title}>{contact.title}</Text>

          <SidebarSection title={labels.contact}>
            <PdfContactItem iconKey="location" label={contact.location} />
            {contact.whatsappUrl ? (
              <PdfContactItem
                iconKey="whatsapp"
                label={contact.phone}
                href={contact.whatsappUrl}
                isLink
              />
            ) : (
              <PdfContactItem iconKey="phone" label={contact.phone} />
            )}
            <PdfContactItem
              iconKey="email"
              label={contact.email}
              href={`mailto:${contact.email}`}
              isLink
            />
            <PdfContactItem
              iconKey="linkedin"
              label={contact.linkedinLabel}
              href={contact.linkedinUrl}
              isLink
            />
            <PdfContactItem
              iconKey="github"
              label={contact.githubLabel}
              href={contact.githubUrl}
              isLink
            />
            <PdfContactItem
              iconKey="portfolio"
              label={contact.portfolioLabel}
              href={contact.portfolioUrl}
              isLink
            />
          </SidebarSection>

          <SidebarSection title={labels.technicalSkills}>
            <PdfSkillsIconGrid />
          </SidebarSection>

          <SidebarSection title={labels.education}>
            {education.map((item) => (
              <View
                key={`${item.degree}-${item.institution}`}
                style={styles.educationItem}
              >
                <Text style={styles.educationDegree}>{item.degree}</Text>
                <Text style={styles.educationMeta}>
                  {item.institution} · {item.period}
                </Text>
              </View>
            ))}
          </SidebarSection>

          {certifications.length > 0 ? (
            <SidebarSection title={labels.certifications}>
              {certifications.map((item) => (
                <Text key={item} style={styles.listItem}>
                  • {item}
                </Text>
              ))}
            </SidebarSection>
          ) : null}

          <SidebarSection title={labels.languages}>
            {languages.map((lang) => (
              <Text key={lang.name} style={styles.listItem}>
                {lang.name} — {lang.level}
              </Text>
            ))}
          </SidebarSection>
        </View>

        <View style={styles.main}>
          <Text style={styles.sectionHeading}>{labels.professionalProfile}</Text>
          {professionalProfile.map((paragraph) => (
            <Text key={paragraph} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}

          <Text style={styles.sectionHeading}>{labels.workExperience}</Text>
          {page1Jobs.map((job) => (
            <JobBlock key={job.id} job={job} />
          ))}
        </View>
      </Page>

      <Page size="A4" style={styles.pageFull}>
        <View style={styles.page2Header} wrap={false}>
          <View>
            <Text style={styles.page2Name}>{contact.name}</Text>
            <Text style={styles.page2Title}>{contact.title}</Text>
          </View>
          <Text style={styles.page2Meta}>
            {contact.email}
            {"\n"}
            {contact.portfolioLabel}
          </Text>
        </View>

        <Text style={styles.page2SectionHeading}>{labels.workExperience}</Text>
        {page2Jobs.map((job) => (
          <JobBlock key={job.id} job={job} spacious />
        ))}

        <SelectedProjectBlock labels={labels} project={selectedProject} />
      </Page>
    </Document>
  );
}
