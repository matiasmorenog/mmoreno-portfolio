import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import PdfTechIcon from "@/components/resume/PdfTechIcon";
import { portfolioSkillKeys } from "@/data/technologies";

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default function PdfSkillsIconGrid() {
  return (
    <View style={styles.grid}>
      {portfolioSkillKeys.map((techKey) => (
        <PdfTechIcon
          key={techKey}
          techKey={techKey}
          forDarkBackground
          sidebarGrid
        />
      ))}
    </View>
  );
}
