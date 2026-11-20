import { Spacing, ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: Spacing.md,
  },
  listContent: {
    paddingTop: Spacing.xs,
    paddingBottom: Spacing["3xl"],
    gap: Spacing.md,
  },
});
