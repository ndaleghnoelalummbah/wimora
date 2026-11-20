import { Text, type TextProps } from "react-native";

import { ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { styles } from "./themed-text.styles";

export type ThemedTextProps = TextProps & {
  type?:
    | "hero"
    | "title"
    | "subtitle"
    | "headline"
    | "default"
    | "small"
    | "caption"
    | "link"
    | "subtitle"
    | "link";
  textColor?: ThemeColor;
};

export function ThemedText({
  style,
  type = "default",
  textColor = "text",
  ...rest
}: ThemedTextProps) {
  const themeColor = useTheme();

  return (
    <Text
      style={[{ color: themeColor[textColor] }, styles[type], style]}
      {...rest}
    />
  );
}
