import { ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (_themeColor: ThemePalette) =>
  StyleSheet.create({
    wrapper: {
      width: "100%",
    },
  });
