import { Search, X } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import { Pressable, TextInput, View } from "react-native";

import { useTheme } from "@/hooks/use-theme";
import { createStyles } from "./search-bar.styles";

export interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChangeText,
  placeholder = "Search by name or specialty...",
}: SearchBarProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        (isFocused || value.length > 0) && styles.containerFocused,
      ]}
    >
      <Search size={18} color={themeColor.textTertiary} strokeWidth={2} />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor={themeColor.textTertiary}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        accessibilityLabel="Search braiders by name or specialty"
        style={styles.input}
      />

      {value.length > 0 && (
        <Pressable
          onPress={() => onChangeText("")}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Clear search query"
          style={({ pressed }) => [
            styles.clearButton,
            pressed && styles.clearButtonPressed,
          ]}
        >
          <X size={14} color={themeColor.textSecondary} strokeWidth={2.25} />
        </Pressable>
      )}
    </View>
  );
}
