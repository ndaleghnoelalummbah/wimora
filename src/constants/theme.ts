/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://unistyl.es/), etc.
 */

import "@/globals.css";
import { Platform } from "react-native";

export const palette = {
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",

  neutral: {
    50: "#FAF8F5",
    100: "#F3EFEA",
    200: "#E6DFD7",
    300: "#D2C8BE",
    400: "#A39990",
    500: "#81766E",
    600: "#665C55",
    700: "#504740",
    800: "#39312B",
    900: "#261F1A",
    950: "#17120F",
  },
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cad5e2",
    400: "#90a1b9",
    500: "#62748e",
    600: "#45556c",
    700: "#314158",
    800: "#1d293d",
    900: "#0f172b",
    950: "#020618",
  },

  brand: {
    "50": "#fff7ed",
    "100": "#feedd6",
    "200": "#fdd8ab",
    "300": "#fbbc76",
    "400": "#f8953f",
    "500": "#f5771a",
    "600": "#e65c10",
    "700": "#c0450f",
    "800": "#983714",
    "900": "#7a2f14",
    "950": "#421508",
  },
} as const;

export const Colors = {
  light: {
    // Backgrounds
    background: palette.slate[50],
    surface: palette.white,
    surfaceSecondary: palette.slate[100],

    // Text
    text: palette.slate[900],
    textSecondary: palette.slate[600],
    textTertiary: palette.slate[500],
    textInverse: palette.white,

    // Brand and actions
    primary: palette.brand[600],
    primaryHover: palette.brand[700],
    primarySubtle: palette.brand[50],
    onPrimary: palette.white,
    onPrimarySubtle: palette.brand[800],

    // Borders and interaction
    border: palette.slate[200],
    borderStrong: palette.slate[300],
    focus: palette.brand[600],

    // Accent
    accent: palette.brand[500],

    // Disabled states
    disabled: palette.slate[400],
    disabledText: palette.slate[100],

    // Feedback
    feedbackBackground: palette.brand[50],
    feedbackText: palette.brand[800],

    // Overlay
    overlay: "#00000080",
    error: "#E8000B",
    success: "#0ca943",
  },

  dark: {
    background: palette.slate[950],
    surface: palette.slate[900],
    surfaceSecondary: palette.slate[800],

    text: palette.slate[50],
    textSecondary: palette.slate[300],
    textTertiary: palette.slate[400],
    textInverse: palette.slate[950],

    primary: palette.brand[300],
    primaryHover: palette.brand[200],
    primarySubtle: palette.brand[900],
    onPrimary: palette.slate[950],
    onPrimarySubtle: palette.brand[100],

    border: palette.slate[800],
    borderStrong: palette.slate[700],
    focus: palette.brand[300],

    accent: palette.brand[300],

    // Disabled states
    disabled: palette.slate[500],
    disabledText: palette.slate[800],

    // Feedback
    feedbackBackground: palette.brand[900],
    feedbackText: palette.brand[100],

    // Overlay
    overlay: "#00000099",
    error: "#FF6467",
    success: "#3ca661",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light | keyof typeof Colors.dark;
export type ThemePalette = typeof Colors.light | typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  "4xl": 48,
} as const;

export const FontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 9999,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
