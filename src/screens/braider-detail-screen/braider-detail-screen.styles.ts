import { ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (_themeColor: ThemePalette) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
