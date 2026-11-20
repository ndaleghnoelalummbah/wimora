import { Calendar } from "lucide-react-native";
import React, { memo, useMemo } from "react";
import { Pressable } from "react-native";

import { useTheme } from "@/hooks/use-theme";
import { createStyles } from "./time-slot-chip.styles";
import { ThemedText } from "@/components/themed-text/themed-text";

export interface TimeSlotChipProps {
  slot: string;
  selected?: boolean;
  onPress?: (slot: string) => void;
}

function TimeSlotChipComponent({
  slot,
  selected = false,
  onPress,
}: TimeSlotChipProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);

  return (
    <Pressable
      onPress={onPress ? () => onPress(slot) : undefined}
      disabled={!onPress}
      accessibilityRole={onPress ? "button" : "text"}
      accessibilityState={onPress ? { selected } : undefined}
      accessibilityLabel={`Time slot ${slot}`}
      style={({ pressed }) => [
        styles.chip,
        selected && styles.chipSelected,
        pressed && onPress && styles.chipPressed,
      ]}
    >
      <Calendar
        size={13}
        color={selected ? themeColor.onPrimary : themeColor.textTertiary}
        strokeWidth={2}
      />
      <ThemedText
        type="small"
        textColor={selected ? "onPrimary" : "text"}
        style={styles.label}
      >
        {slot}
      </ThemedText>
    </Pressable>
  );
}

export const TimeSlotChip = memo(TimeSlotChipComponent);
