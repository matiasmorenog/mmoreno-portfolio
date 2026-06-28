import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Link,
  Image,
} from "@react-pdf/renderer";

const colors = {
  primary: "#0a7f78",
  sidebar: "#0e1320",
  sidebarMuted: "#8fa8bc",
  body: "#1e2d3d",
  muted: "#5a6d7e",
  white: "#ffffff",
  accent: "#7de2db",
};

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
    width: 64,
    height: 64,
    borderRadius: 32,
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
    fontSize: 8,
    color: colors.accent,
    lineHeight: 1.4,
    marginBottom: 12,
  },
  sidebarSection: {
    marginBottom: 10,
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
  contactItem: {
    fontSize: 8,
    color: colors.sidebarMuted,
    lineHeight: 1.4,
    marginBottom: 3,
  },
  contactLink: {
    color: colors.accent,
    textDecoration: "none",
  },
  skillBlock: {
    marginBottom: 5,
  },
  skillCategory: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    marginBottom: 1,
  },
  skillItems: {
    fontSize: 7.5,
    color: colors.sidebarMuted,
    lineHeight: 1.35,
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
    lineHeight: 1.45,
    color: colors.body,
    marginBottom: 5,
    textAlign: "justify",
  },
  jobBlock: {
    marginBottom: 8,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: colors.body,
    flexGrow: 1,
    lineHeight: 1.3,
  },
  jobPeriod: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    flexShrink: 0,
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
});

function SidebarSection({ title, children }) {
  return (
    <View style={styles.sidebarSection}>
      <Text style={styles.sidebarHeading}>{title}</Text>
      {children}
    </View>
  );
}

function BulletList({ items }) {
  return (
    <>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow} wrap={false}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

export default function ResumePdfDocument({ resume }) {
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
      title={`${contact.name} — Resume`}
      author={contact.name}
      subject="Resume"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebar} fixed>
          {contact.photoUrl ? (
            <Image src={contact.photoUrl} style={styles.photo} />
          ) : null}
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.title}>{contact.title}</Text>

          <SidebarSection title={labels.contact}>
            <Text style={styles.contactItem}>{contact.location}</Text>
            <Text style={styles.contactItem}>{contact.phone}</Text>
            <Text style={styles.contactItem}>{contact.email}</Text>
            <Link src={contact.linkedinUrl} style={styles.contactLink}>
              <Text style={styles.contactItem}>{contact.linkedinLabel}</Text>
            </Link>
            <Link src={contact.githubUrl} style={styles.contactLink}>
              <Text style={styles.contactItem}>{contact.githubLabel}</Text>
            </Link>
            <Link src={contact.portfolioUrl} style={styles.contactLink}>
              <Text style={styles.contactItem}>{contact.portfolioLabel}</Text>
            </Link>
          </SidebarSection>

          <SidebarSection title={labels.technicalSkills}>
            {skills.map((group) => (
              <View key={group.category} style={styles.skillBlock}>
                <Text style={styles.skillCategory}>{group.category}</Text>
                <Text style={styles.skillItems}>{group.items}</Text>
              </View>
            ))}
          </SidebarSection>

          <SidebarSection title={labels.softSkills}>
            {softSkills.map((item) => (
              <Text key={item} style={styles.listItem}>
                • {item}
              </Text>
            ))}
          </SidebarSection>

          <SidebarSection title={labels.education}>
            {education.map((item) => (
              <View key={`${item.degree}-${item.institution}`} style={styles.educationItem}>
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
          {experience.map((job) => (
            <View key={`${job.company}-${job.period}`} style={styles.jobBlock}>
              <View style={styles.jobHeader} wrap={false}>
                <Text style={styles.jobTitle}>
                  {job.role} | {job.company}
                </Text>
                <Text style={styles.jobPeriod}>{job.period}</Text>
              </View>
              <BulletList items={job.highlights} />
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
