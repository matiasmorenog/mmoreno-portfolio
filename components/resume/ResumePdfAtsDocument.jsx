import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 42,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#1a1a1a",
    lineHeight: 1.45,
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
    marginBottom: 14,
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
    marginBottom: 10,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    flexGrow: 1,
  },
  jobPeriod: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    flexShrink: 0,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  bulletDot: {
    width: 10,
    fontSize: 10,
    lineHeight: 1.45,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    lineHeight: 1.45,
    color: "#333333",
    textAlign: "justify",
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
    <>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

export default function ResumePdfAtsDocument({ resume }) {
  const {
    contact,
    labels,
    professionalProfile,
    experience,
    skills,
    softSkills,
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
          {professionalProfile.map((paragraph) => (
            <Text key={paragraph} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>{labels.workExperience}</Text>
          {experience.map((job) => (
            <View key={`${job.company}-${job.period}`} style={styles.jobBlock}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobTitle}>
                  {job.role} | {job.company}
                </Text>
                <Text style={styles.jobPeriod}>{job.period}</Text>
              </View>
              <BulletList items={job.highlights} />
            </View>
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

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>{labels.softSkills}</Text>
          {softSkills.map((item) => (
            <Text key={item} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>{labels.education}</Text>
          {education.map((item) => (
            <Text key={`${item.degree}-${item.institution}`} style={styles.listItem}>
              {item.degree} | {item.institution} | {item.period}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>{labels.certifications}</Text>
          {certifications.map((item) => (
            <Text key={item} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>{labels.languages}</Text>
          {languages.map((lang) => (
            <Text key={lang.name} style={styles.listItem}>
              {lang.name} — {lang.level}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}
