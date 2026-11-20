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
    topRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: Spacing.md,
    },
    avatar: {
      width: 60,
      height: 60,
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
      gap: Spacing.xs,
    },
    metaRow: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      gap: Spacing.sm,
    },
    specialtyChip: {
      paddingHorizontal: Spacing.sm,
      paddingVertical: 3,
      borderRadius: Radius.sm,
      backgroundColor: themeColor.surfaceSecondary,
    },
    specialtyText: {
      fontWeight: "600",
    },
    locationBadge: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    divider: {
      height: 1,
      backgroundColor: themeColor.border,
    },
    statsRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    statItem: {
      gap: 2,
    },
    ratingRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: Spacing.xs,
    },
    statValue: {
      fontWeight: "700",
    },
  });
