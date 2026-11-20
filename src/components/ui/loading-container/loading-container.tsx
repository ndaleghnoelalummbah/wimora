import { useMemo } from "react";
import { ActivityIndicator, View } from "react-native";

import { ThemedText } from "@/components/themed-text/themed-text";
import { useTheme } from "@/hooks/use-theme";
import { createStyles } from "./loading-container.styles";

interface LoadingContainerProps {
  message?: string;
}

export function LoadingContainer({
  message = "Finding top braiders...",
}: LoadingContainerProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);

  return (
    <View style={styles.centered} accessibilityRole="progressbar">
      <ActivityIndicator size="large" color={themeColor.primary} />
      <ThemedText type="small" textColor="textSecondary">
        {message}
      </ThemedText>
    </View>
  );
}
