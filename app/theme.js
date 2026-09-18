import { createTheme } from "@mui/material/styles";

export function createPortfolioTheme(darkMode) {
  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: darkMode ? "#2a9d8f" : "#0f766e" },
      secondary: { main: "#64748b" },
      background: {
        default: darkMode ? "#0f1419" : "#f7f8fa",
        paper: darkMode ? "rgba(22, 28, 36, 0.92)" : "rgba(255, 255, 255, 0.92)",
      },
    },
    shape: { borderRadius: 10 },
    typography: {
      fontFamily: "Space Grotesk, Avenir Next, Segoe UI, sans-serif",
      h3: { fontWeight: 700 },
      h6: { fontWeight: 700 },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            borderColor: darkMode ? "rgba(255,255,255,0.10)" : "rgba(15,20,25,0.10)",
            boxShadow: darkMode
              ? "0 4px 16px rgba(0,0,0,0.22)"
              : "0 2px 10px rgba(15,20,25,0.06)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            borderColor: darkMode ? "rgba(255,255,255,0.10)" : "rgba(15,20,25,0.10)",
            boxShadow: darkMode
              ? "0 4px 14px rgba(0,0,0,0.2)"
              : "0 2px 8px rgba(15,20,25,0.05)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 600,
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: darkMode ? "#5eead4" : "#0f766e",
              outlineOffset: 2,
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: darkMode ? "#5eead4" : "#0f766e",
              outlineOffset: 2,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: 2,
            },
          },
        },
      },
    },
  });
}
