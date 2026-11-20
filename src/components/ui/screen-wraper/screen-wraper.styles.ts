import { StyleSheet } from "react-native";

import { Spacing, ThemePalette } from "@/constants/theme";

export const createStyles = (themeColor: ThemePalette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: Spacing.xl,
      gap: Spacing.xs,
      backgroundColor: themeColor.background,
    },
  });
