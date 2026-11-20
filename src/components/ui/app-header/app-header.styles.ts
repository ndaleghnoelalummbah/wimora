import { ThemePalette } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = (themeColor: ThemePalette) =>
  StyleSheet.create({
    container: {
      backgroundColor: themeColor.primary,
    },

    header: {
      height: 80,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
    },

    side: {
      width: 40,
      alignItems: "flex-start",
      justifyContent: "center",
    },

    backButton: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
