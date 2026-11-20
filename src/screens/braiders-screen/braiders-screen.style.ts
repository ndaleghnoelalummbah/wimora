import { Spacing, ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (_themeColor: ThemePalette) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      paddingBottom: Spacing.md,
      gap: Spacing.md,
    },
    eyebrow: {
      fontWeight: "700",
      letterSpacing: 0.8,
    },
    // listContent: {
    //   paddingTop: Spacing.xs,
    //   paddingBottom: Spacing["3xl"],
    //   gap: Spacing.md,
    // },
  });
