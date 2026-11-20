import { FontSize, Radius, Spacing, ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (themeColor: ThemePalette) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      height: 48,
      borderRadius: Radius.md,
      borderWidth: 1,
      borderColor: themeColor.border,
      backgroundColor: themeColor.surface,
      paddingHorizontal: Spacing.md,
      gap: Spacing.sm,
    },
    containerFocused: {
      borderColor: themeColor.focus,
    },
    input: {
      flex: 1,
      fontSize: FontSize.md,
      color: themeColor.text,
      height: "100%",
    },
    clearButton: {
      width: 24,
      height: 24,
      borderRadius: Radius.full,
      backgroundColor: themeColor.surfaceSecondary,
      alignItems: "center",
      justifyContent: "center",
    },
    clearButtonPressed: {
      opacity: 0.7,
    },
  });
