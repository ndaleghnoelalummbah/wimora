import type { LucideIcon } from "lucide-react-native";
import { useMemo } from "react";
import { Pressable, View } from "react-native";

import { useTheme } from "@/hooks/use-theme";
import { createStyles } from "./empty-or-error-container.styles";
import { ThemedText } from "@/components/themed-text/themed-text";

interface EmptyOrErrorContainerProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyOrErrorContainer({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyOrErrorContainerProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);

  return (
    <View style={styles.card}>
      <View style={styles.iconCircle}>
        <Icon size={24} color={themeColor.primary} strokeWidth={2} />
      </View>

      <ThemedText type="headline" textColor="text" style={styles.centerText}>
        {title}
      </ThemedText>

      <ThemedText
        type="small"
        textColor="textSecondary"
        style={styles.centerText}
      >
        {description}
      </ThemedText>

      {actionLabel && onAction && (
        <Pressable
          onPress={onAction}
          accessibilityRole="button"
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <ThemedText
            type="small"
            textColor="onPrimary"
            style={styles.buttonText}
          >
            {actionLabel}
          </ThemedText>
        </Pressable>
      )}
    </View>
  );
}
