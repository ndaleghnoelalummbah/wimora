import { Radius, Spacing, ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (themeColor: ThemePalette) =>
  StyleSheet.create({
    chip: {
      flexDirection: "row",
      alignItems: "center",
      gap: Spacing.xs + 2,
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.sm + 2,
      borderRadius: Radius.full,
      borderWidth: 1,
      borderColor: themeColor.border,
      backgroundColor: themeColor.surface,
    },
    chipSelected: {
      borderColor: themeColor.primary,
      backgroundColor: themeColor.primary,
    },
    chipPressed: {
      opacity: 0.88,
    },
    label: {
      fontWeight: "600",
    },
  });
