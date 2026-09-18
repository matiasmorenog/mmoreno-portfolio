import React from "react";
import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import { getTechnologyPdfIconUrl } from "@/data/resume/pdf-icon-urls";
import { technologies } from "@/data/technologies";

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    marginRight: 5,
    marginBottom: 5,
    width: 34,
  },
  itemCompact: {
    alignItems: "center",
    marginRight: 4,
    marginBottom: 4,
    width: 30,
  },
  itemSidebarGrid: {
    alignItems: "center",
    marginBottom: 4,
    width: "25%",
  },
  iconWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  iconWrapCompact: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 1,
  },
  icon: {
    width: 14,
    height: 14,
  },
  iconCompact: {
    width: 11,
    height: 11,
  },
  iconSidebarGrid: {
    width: 12,
    height: 12,
  },
  label: {
    fontSize: 5.5,
    color: "#8fa8bc",
    textAlign: "center",
    lineHeight: 1.15,
    fontFamily: "Helvetica-Bold",
  },
  labelLight: {
    fontSize: 5,
    color: "#5a6d7e",
    textAlign: "center",
    lineHeight: 1.15,
    fontFamily: "Helvetica-Bold",
  },
});

export default function PdfTechIcon({
  techKey,
  forDarkBackground = false,
  compact = false,
  sidebarGrid = false,
  showLabel = true,
}) {
  const tech = technologies[techKey];
  const iconUrl = getTechnologyPdfIconUrl(techKey, { forDarkBackground });

  if (!tech || !iconUrl) return null;

  const itemStyle = sidebarGrid
    ? styles.itemSidebarGrid
    : compact
      ? styles.itemCompact
      : styles.item;
  const iconWrapStyle = sidebarGrid || compact ? styles.iconWrapCompact : styles.iconWrap;
  const iconStyle = sidebarGrid
    ? styles.iconSidebarGrid
    : compact
      ? styles.iconCompact
      : styles.icon;

  return (
    <View style={itemStyle}>
      <View style={iconWrapStyle}>
        <Image src={iconUrl} style={iconStyle} />
      </View>
      {showLabel ? (
        <Text style={forDarkBackground ? styles.label : styles.labelLight}>
          {tech.label}
        </Text>
      ) : null}
    </View>
  );
}
