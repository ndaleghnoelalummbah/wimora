import { Radius, Spacing, ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (themeColor: ThemePalette) =>
  StyleSheet.create({
    card: {
      alignItems: "center",
      backgroundColor: themeColor.surface,
      borderColor: themeColor.border,
      borderWidth: 1,
      borderRadius: Radius.lg,
      padding: Spacing["2xl"],
      gap: Spacing.sm,
      marginTop: Spacing.lg,
    },
    iconCircle: {
      width: 48,
      height: 48,
      borderRadius: Radius.full,
      backgroundColor: themeColor.primarySubtle,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: Spacing.xs,
    },
    centerText: {
      textAlign: "center",
    },
    button: {
      marginTop: Spacing.md,
      paddingHorizontal: Spacing.xl,
      paddingVertical: Spacing.sm + 2,
      borderRadius: Radius.full,
      backgroundColor: themeColor.primary,
    },
    buttonPressed: {
      backgroundColor: themeColor.primaryHover,
    },
    buttonText: {
      fontWeight: "600",
    },
  });
