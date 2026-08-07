import React from "react";
import { View, Text, Image, Link, StyleSheet } from "@react-pdf/renderer";
import { getContactPdfIconUrl } from "@/data/resume/pdf-icon-urls";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  icon: {
    width: 9,
    height: 9,
    flexShrink: 0,
    marginRight: 5,
  },
  text: {
    fontSize: 8,
    color: "#8fa8bc",
    lineHeight: 1.35,
    flex: 1,
  },
  linkText: {
    fontSize: 8,
    color: "#7de2db",
    lineHeight: 1.35,
    flex: 1,
    textDecoration: "none",
  },
});

export default function PdfContactItem({ iconKey, label, href, isLink = false }) {
  const iconUrl = getContactPdfIconUrl(iconKey);
  const textStyle = isLink ? styles.linkText : styles.text;

  const row = (
    <View style={styles.row} wrap={false}>
      {iconUrl ? <Image src={iconUrl} style={styles.icon} /> : null}
      <Text style={textStyle}>{label}</Text>
    </View>
  );

  if (href) {
    return (
      <Link src={href} style={{ textDecoration: "none" }}>
        {row}
      </Link>
    );
  }

  return row;
}
