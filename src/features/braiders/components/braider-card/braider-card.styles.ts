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
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.04,
      shadowRadius: 8,
      elevation: 2,
    },
    cardPressed: {
      borderColor: themeColor.borderStrong,
      transform: [{ scale: 0.99 }],
    },
    topRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: Spacing.md,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: Radius.full,
      backgroundColor: themeColor.primarySubtle,
      alignItems: "center",
      justifyContent: "center",
    },
    avatarText: {
      fontWeight: "700",
    },
    identity: {
      flex: 1,
      alignItems: "flex-start",
      gap: Spacing.xs,
    },
    specialtyChip: {
      paddingHorizontal: Spacing.sm,
      paddingVertical: 2,
      borderRadius: Radius.sm,
      backgroundColor: themeColor.surfaceSecondary,
    },
    specialtyText: {
      fontWeight: "600",
    },
    ratingBadge: {
      flexDirection: "row",
      alignItems: "center",
      gap: Spacing.xs,
      paddingHorizontal: Spacing.sm,
      paddingVertical: Spacing.xs,
      borderRadius: Radius.full,
      backgroundColor: themeColor.primarySubtle,
    },
    ratingText: {
      fontWeight: "700",
    },
    divider: {
      height: 1,
      width: "100%",
      backgroundColor: themeColor.border,
    },
    footerRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    priceGroup: {
      flexDirection: "row",
      alignItems: "baseline",
      gap: Spacing.xs + 2,
    },
    price: {
      fontWeight: "700",
    },
    actionCircle: {
      width: 32,
      height: 32,
      borderRadius: Radius.full,
      backgroundColor: themeColor.primary,
      alignItems: "center",
      justifyContent: "center",
    },
  });
