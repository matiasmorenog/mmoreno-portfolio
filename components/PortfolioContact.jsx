"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
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

function EmailContactItem({ email, copyLabel, copiedLabel }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tooltip title={copied ? copiedLabel : copyLabel}>
      <Button
        size="small"
        variant="outlined"
        onClick={handleCopyEmail}
        aria-label={copyLabel}
        startIcon={<EmailRoundedIcon sx={{ fontSize: 16 }} />}
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
        {email}
      </Button>
    </Tooltip>
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
  copyEmailLabel,
  emailCopiedLabel,
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
        <EmailContactItem
          email={email}
          copyLabel={copyEmailLabel}
          copiedLabel={emailCopiedLabel}
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
