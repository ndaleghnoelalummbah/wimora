import { FontSize, Radius, Spacing, ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (themeColor: ThemePalette) =>
  StyleSheet.create({
    fieldGroup: {
      gap: Spacing.xs + 2,
    },
    label: {
      fontWeight: "600",
    },
    inputRow: {
      flexDirection: "row",
      alignItems: "center",
      height: 50,
      borderRadius: Radius.md,
      borderWidth: 1,
      borderColor: themeColor.border,
      backgroundColor: themeColor.surface,
      paddingHorizontal: Spacing.md,
      gap: Spacing.sm,
    },
    inputRowFocused: {
      borderColor: themeColor.focus,
    },
    inputRowError: {
      borderColor: themeColor.error,
    },
    input: {
      flex: 1,
      height: "100%",
      fontSize: FontSize.md,
      color: themeColor.text,
    },
  });
