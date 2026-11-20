import { FontSize } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  hero: {
    fontSize: FontSize["4xl"],
    lineHeight: 44,
    fontWeight: "700",
  },
  title: {
    fontSize: FontSize["2xl"],
    lineHeight: 32,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: FontSize.xl,
    lineHeight: 28,
    fontWeight: "600",
  },
  headline: {
    fontSize: FontSize.lg,
    lineHeight: 24,
    fontWeight: "600",
  },
  default: {
    fontSize: FontSize.md,
    lineHeight: 24,
    fontWeight: "400",
  },
  small: {
    fontSize: FontSize.sm,
    lineHeight: 20,
    fontWeight: "400",
  },
  caption: {
    fontSize: FontSize.xs,
    lineHeight: 16,
    fontWeight: "500",
  },
  link: {
    fontSize: FontSize.sm,
    lineHeight: 20,
    fontWeight: "600",
  },
});
