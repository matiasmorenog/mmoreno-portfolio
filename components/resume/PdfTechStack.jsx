import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import PdfTechIcon from "@/components/resume/PdfTechIcon";
import { resolveTechnologyKeys } from "@/data/technologies";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginTop: 3,
  },
  pill: {
    fontSize: 6.5,
    color: "#5a6d7e",
    borderWidth: 1,
    borderColor: "#c9d4de",
    borderRadius: 3,
    paddingVertical: 1,
    paddingHorizontal: 4,
    marginRight: 3,
    marginBottom: 2,
    fontFamily: "Helvetica-Bold",
  },
});

function getUnresolvedLabels(labels = []) {
  return labels.filter((label) => {
    if (label === "Jest & Cypress") return false;
    return resolveTechnologyKeys([label]).length === 0;
  });
}

export default function PdfTechStack({
  labels = [],
  forDarkBackground = false,
  compact = true,
  showLabel = true,
}) {
  const techKeys = resolveTechnologyKeys(labels);
  const unresolvedLabels = getUnresolvedLabels(labels);

  if (techKeys.length === 0 && unresolvedLabels.length === 0) {
    return null;
  }

  return (
    <View style={styles.row}>
      {techKeys.map((techKey) => (
        <PdfTechIcon
          key={techKey}
          techKey={techKey}
          forDarkBackground={forDarkBackground}
          compact={compact}
          showLabel={showLabel}
        />
      ))}
      {unresolvedLabels.map((label) => (
        <Text key={label} style={styles.pill}>
          {label}
        </Text>
      ))}
    </View>
  );
}
