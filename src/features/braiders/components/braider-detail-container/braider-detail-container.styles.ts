import { Radius, Spacing, ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (themeColor: ThemePalette) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContent: {
      paddingTop: Spacing.sm,
      paddingBottom: Spacing["4xl"],
      gap: Spacing.xl,
    },
    section: {
      gap: Spacing.md,
    },
    sectionHeader: {
      gap: 2,
    },
    servicesList: {
      gap: Spacing.sm + 2,
    },
    slotsWrap: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: Spacing.sm,
    },
    footer: {
      paddingTop: Spacing.md,
      paddingBottom: Spacing.md,
      backgroundColor: themeColor.background,
    },
    ctaButton: {
      height: 52,
      borderRadius: Radius.full,
      backgroundColor: themeColor.primary,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: Spacing.sm,
    },
    ctaButtonPressed: {
      backgroundColor: themeColor.primaryHover,
    },
    ctaText: {
      fontWeight: "700",
    },
  });
