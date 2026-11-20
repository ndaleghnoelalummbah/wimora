import { Radius, Spacing, ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (themeColor: ThemePalette) =>
  StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: Radius.md,
      borderWidth: 1,
      borderColor: themeColor.border,
      backgroundColor: themeColor.surface,
      padding: Spacing.lg,
      gap: Spacing.md,
    },
    cardSelected: {
      borderColor: themeColor.primary,
      backgroundColor: themeColor.primarySubtle,
    },
    cardPressed: {
      opacity: 0.92,
    },
    info: {
      flex: 1,
      gap: Spacing.xs,
    },
    durationRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: Spacing.xs,
    },
    price: {
      fontWeight: "700",
    },
  });
