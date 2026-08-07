"use client";

import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

function ContactItem({ icon, href, label, linkLabel, external = false }) {
  return (
    <Button
      size="small"
      variant="outlined"
      component="a"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={linkLabel ? `${linkLabel}: ${label}` : label}
      startIcon={icon}
      sx={{
        justifyContent: "flex-start",
        textTransform: "none",
        fontWeight: 600,
        py: 0.7,
        px: 1.2,
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {label}
    </Button>
  );
}

function WhatsAppIcon() {
  return (
    <Box
      component="img"
      src="https://cdn.simpleicons.org/whatsapp/25D366"
      alt=""
      aria-hidden
      sx={{ width: 16, height: 16, display: "block" }}
    />
  );
}

export default function PortfolioContact({
  title,
  showTitle = true,
  email,
  emailHref,
  phone,
  whatsappHref,
  openWhatsAppLabel,
}) {
  return (
    <Box>
      {showTitle && title ? (
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
      ) : null}
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
        sx={{ mt: 1 }}
      >
        <ContactItem
          icon={<EmailRoundedIcon sx={{ fontSize: 16 }} />}
          href={emailHref}
          label={email}
        />
        <ContactItem
          icon={<WhatsAppIcon />}
          href={whatsappHref}
          label={phone}
          linkLabel={openWhatsAppLabel}
          external
        />
      </Stack>
    </Box>
  );
}
