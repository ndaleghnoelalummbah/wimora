import { Radius, Spacing, ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (themeColor: ThemePalette) =>
  StyleSheet.create({
    card: {
      borderRadius: Radius.lg,
      borderWidth: 1,
      borderColor: themeColor.border,
      backgroundColor: themeColor.surface,
      padding: Spacing.lg,
      gap: Spacing.md,
    },
    refRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    refPill: {
      paddingHorizontal: Spacing.sm,
      paddingVertical: 3,
      borderRadius: Radius.sm,
      backgroundColor: themeColor.primarySubtle,
    },
    refText: {
      fontWeight: "700",
    },
    divider: {
      height: 1,
      backgroundColor: themeColor.border,
    },
    row: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: Spacing.md,
    },
    rowValue: {
      flex: 1,
      textAlign: "right",
      fontWeight: "600",
    },
    totalRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: Spacing.xs,
    },
    totalAmount: {
      fontWeight: "700",
    },
  });
