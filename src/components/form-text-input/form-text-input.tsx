import type { LucideIcon } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";

import { useTheme } from "@/hooks/use-theme";
import { createStyles } from "./form-text-input.styles";
import { ThemedText } from "../themed-text/themed-text";

export interface FormTextInputProps extends Omit<TextInputProps, "style"> {
  label: string;
  icon?: LucideIcon;
  error?: string;
}

export function FormTextInput({
  label,
  icon: Icon,
  error,
  onFocus,
  onBlur,
  ...textInputProps
}: FormTextInputProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);
  const [isFocused, setIsFocused] = useState(false);

  const iconColor = error
    ? themeColor.error
    : isFocused
      ? themeColor.primary
      : themeColor.textTertiary;

  return (
    <View style={styles.fieldGroup}>
      <ThemedText type="small" textColor="text" style={styles.label}>
        {label}
      </ThemedText>

      <View
        style={[
          styles.inputRow,
          isFocused && styles.inputRowFocused,
          Boolean(error) && styles.inputRowError,
        ]}
      >
        {Icon && <Icon size={18} color={iconColor} strokeWidth={2} />}

        <TextInput
          {...textInputProps}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          placeholderTextColor={themeColor.textTertiary}
          accessibilityLabel={textInputProps.accessibilityLabel ?? label}
          style={styles.input}
        />
      </View>

      {Boolean(error) && (
        <ThemedText type="caption" textColor="error">
          {error}
        </ThemedText>
      )}
    </View>
  );
}
