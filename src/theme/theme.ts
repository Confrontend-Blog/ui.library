import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";
import { colors } from "./shades";
import { customTypography } from "./typography";

declare module "@mui/material/styles" {
  interface PaletteActionOptions {
    active: string;
    disabled: string;
    focus: string;
    hover: string;
    selected: string;
  }

  interface TypographyStyleOptions {
    fontSize: string;
    lineHeight: number;
  }
}

const shadows = {
  elevationLow: "0 2px 8px 0 rgba(0, 0, 0, 0.08)",
  elevationMid: "0 4px 20px 0 rgba(0, 0, 0, 0.12)",
  elevationHigh: "0 16px 32px 0 rgba(0, 0, 0, 0.12)",
};

const appTheme = {
  palette: {
    action: {
      active: colors.grey[900],
      disabled: colors.grey[600],
      focus: colors.grey[900],
      hover: colors.blue[500],
      selected: colors.grey[900],
    },
    background: {
      default: colors.grey[200],
      paper: colors.white,
    },
    divider: colors.grey[600],
    error: { main: colors.red[500] },
    info: { main: colors.blue[500] },
    primary: { main: colors.grey[200] },
    secondary: { dark: colors.grey[200], main: colors.grey[900] },
    success: { main: colors.green[500] },
    text: {
      disabled: colors.grey[600],
      primary: colors.grey[900],
      secondary: colors.grey[200],
    },
    warning: { main: colors.orange[300] },
  },
  typography: {
    // body1 is typically used for longer text elements, such as paragraphs or articles,
    body1: {
      fontSize: customTypography.sizes.body1,
      lineHeight: customTypography.lineHeights.large,
    },
    // body2 is used for shorter text elements, such as captions or subheaders.
    body2: {
      fontSize: customTypography.sizes.body2,
      lineHeight: customTypography.lineHeights.medium,
    },
    button: {
      fontSize: customTypography.sizes.button,
      fontWeight: customTypography.weights.medium,
      lineHeight: customTypography.lineHeights.medium,
    },
    caption: {
      fontSize: customTypography.sizes.caption,
      lineHeight: customTypography.lineHeights.medium,
    },
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: customTypography.sizes.h1,
      fontWeight: customTypography.weights.medium,
      lineHeight: customTypography.lineHeights.small,
    },
    h2: {
      fontSize: customTypography.sizes.h2,
      fontWeight: customTypography.weights.medium,
      lineHeight: customTypography.lineHeights.small,
    },
    h3: {
      fontSize: customTypography.sizes.h3,
      fontWeight: customTypography.weights.medium,
      lineHeight: customTypography.lineHeights.small,
    },
    subtitle1: {
      fontSize: customTypography.sizes.subtitle1,
      fontWeight: customTypography.weights.light,
    },
  },
  shadows: [
    "none",
    shadows.elevationLow,
    shadows.elevationMid,
    shadows.elevationHigh,
  ] as any,
};

export const lightTheme = createTheme(appTheme);

console.log(lightTheme);

export type AppTheme = typeof lightTheme;
