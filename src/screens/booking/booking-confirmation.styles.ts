import { Radius, Spacing, ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (themeColor: ThemePalette) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContent: {
      paddingTop: Spacing.xl,
      paddingBottom: Spacing["3xl"],
      gap: Spacing.xl,
    },
    hero: {
      alignItems: "center",
      gap: Spacing.sm,
    },
    badgeCircle: {
      width: 64,
      height: 64,
      borderRadius: Radius.full,
      backgroundColor: themeColor.primarySubtle,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: Spacing.xs,
    },
    centeredText: {
      textAlign: "center",
    },
    footer: {
      paddingTop: Spacing.md,
      paddingBottom: Spacing.md,
      backgroundColor: themeColor.background,
    },
    doneButton: {
      height: 52,
      borderRadius: Radius.full,
      backgroundColor: themeColor.primary,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: Spacing.sm,
    },
    doneButtonPressed: {
      backgroundColor: themeColor.primaryHover,
    },
    doneText: {
      fontWeight: "700",
    },
  });
