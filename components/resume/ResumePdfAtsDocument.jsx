import React from "react";
import { Document, Page, View, Text, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#1a1a1a",
    lineHeight: 1.4,
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 11,
    marginBottom: 8,
    color: "#333333",
  },
  contactRow: {
    fontSize: 9,
    color: "#444444",
    marginBottom: 16,
    lineHeight: 1.5,
  },
  link: {
    color: "#1a1a1a",
    textDecoration: "none",
  },
  section: {
    marginBottom: 11,
  },
  sectionHeading: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.5,
    marginBottom: 6,
    textAlign: "justify",
  },
  jobBlock: {
    marginBottom: 8,
  },
  jobRole: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    marginBottom: 1,
  },
  jobCompany: {
    fontSize: 9.5,
    marginBottom: 1,
    color: "#333333",
  },
  jobPeriod: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  projectTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    marginBottom: 1,
  },
  projectMeta: {
    fontSize: 9.5,
    marginBottom: 4,
    color: "#333333",
  },
  bulletText: {
    fontSize: 9.5,
    lineHeight: 1.4,
    color: "#333333",
    textAlign: "justify",
    marginBottom: 3,
  },
  skillLine: {
    fontSize: 9.5,
    marginBottom: 4,
    lineHeight: 1.45,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
  },
  listItem: {
    fontSize: 9.5,
    marginBottom: 3,
    lineHeight: 1.45,
  },
});

function BulletList({ items }) {
  return (
    <Text style={styles.bulletText}>{items.map((item) => `• ${item}`).join("\n")}</Text>
  );
}

function JobBlock({ job }) {
  return (
    <View style={styles.jobBlock}>
      <View wrap={false}>
        <Text style={styles.jobRole}>{job.role}</Text>
        <Text style={styles.jobCompany}>{job.company}</Text>
        <Text style={styles.jobPeriod}>{job.periodDisplay}</Text>
      </View>
      <BulletList items={job.highlights} />
    </View>
  );
}

export default function ResumePdfAtsDocument({ resume }) {
  const {
    contact,
    labels,
    professionalProfile,
    experience,
    skills,
    selectedProject,
    education,
    certifications,
    languages,
  } = resume;

  return (
    <Document
      title={`${contact.name} — Resume (ATS)`}
      author={contact.name}
      subject="Resume"
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.title}>{contact.title}</Text>
        <Text style={styles.contactRow}>
          {contact.location} | {contact.phone} | {contact.email}
          {"\n"}
          <Link src={contact.linkedinUrl} style={styles.link}>
            {contact.linkedinLabel}
          </Link>
          {" | "}
          <Link src={contact.githubUrl} style={styles.link}>
            {contact.githubLabel}
          </Link>
          {" | "}
          <Link src={contact.portfolioUrl} style={styles.link}>
            {contact.portfolioLabel}
          </Link>
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>{labels.professionalProfile}</Text>
          <Text style={styles.paragraph}>{professionalProfile.join("\n\n")}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>{labels.workExperience}</Text>
          {experience.map((job) => (
            <JobBlock key={job.id || `${job.company}-${job.period}`} job={job} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>{labels.technicalSkills}</Text>
          {skills.map((group) => (
            <Text key={group.category} style={styles.skillLine}>
              <Text style={styles.skillLabel}>{group.category}: </Text>
              {group.items}
            </Text>
          ))}
        </View>

        {selectedProject ? (
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>{labels.selectedProject}</Text>
            <Text style={styles.projectTitle}>
              {selectedProject.name} — {selectedProject.subtitle} |{" "}
              {selectedProject.periodDisplay}
            </Text>
            <BulletList items={selectedProject.highlights} />
          </View>
        ) : null}

        <View wrap={false}>
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>{labels.education}</Text>
            <Text style={styles.listItem}>
              {education
                .map((item) => `${item.degree} | ${item.institution} | ${item.period}`)
                .join("\n")}
            </Text>
          </View>

          {certifications.length > 0 ? (
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>{labels.certifications}</Text>
              <Text style={styles.listItem}>
                {certifications.map((item) => `• ${item}`).join("\n")}
              </Text>
            </View>
          ) : null}

          <View style={styles.section}>
            <Text style={styles.sectionHeading}>{labels.languages}</Text>
            <Text style={styles.listItem}>
              {languages.map((lang) => `${lang.name} — ${lang.level}`).join("\n")}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
