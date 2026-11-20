import { useTheme } from "@/hooks/use-theme";
import type { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStyles } from "./screen-wraper.styles";

export default function ScreenWrapper({ children }: PropsWithChildren) {
  const themeColor = useTheme();
  const styles = createStyles(themeColor as Parameters<typeof createStyles>[0]);
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}
