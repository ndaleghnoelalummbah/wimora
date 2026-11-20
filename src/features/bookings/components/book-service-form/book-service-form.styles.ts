import { Radius, Spacing, ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (themeColor: ThemePalette) =>
  StyleSheet.create({
    flex: {
      flex: 1,
    },
    scrollContent: {
      paddingTop: Spacing.sm,
      paddingBottom: Spacing["4xl"],
      gap: Spacing.xl,
    },
    braiderBanner: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: Spacing.md,
      borderRadius: Radius.md,
      borderWidth: 1,
      borderColor: themeColor.border,
      backgroundColor: themeColor.surface,
    },
    bannerInfo: {
      gap: 2,
    },
    section: {
      gap: Spacing.md,
    },
    sectionHeader: {
      gap: 2,
    },
    servicesList: {
      gap: Spacing.sm + 2,
    },
    slotsWrap: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: Spacing.sm,
    },
    inputsGroup: {
      gap: Spacing.md,
    },
    footer: {
      paddingTop: Spacing.md,
      paddingBottom: Spacing.md,
      borderTopWidth: 1,
      borderTopColor: themeColor.border,
      backgroundColor: themeColor.background,
      gap: Spacing.sm,
    },
    totalRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    totalPrice: {
      fontWeight: "700",
    },
    submitButton: {
      height: 52,
      borderRadius: Radius.full,
      backgroundColor: themeColor.primary,
      alignItems: "center",
      justifyContent: "center",
    },
    submitButtonPressed: {
      backgroundColor: themeColor.primaryHover,
    },
    submitButtonDisabled: {
      opacity: 0.6,
    },
    submitText: {
      fontWeight: "700",
    },
  });
