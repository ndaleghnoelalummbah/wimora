import { Clock } from "lucide-react-native";
import { memo, useMemo } from "react";
import { Pressable, View } from "react-native";

import { BraiderService } from "@/features/braiders/types";
import { useTheme } from "@/hooks/use-theme";
import { formatDuration, formatPrice } from "@/utils/formatters";
import { ThemedText } from "@/components/themed-text/themed-text";
import { createStyles } from "./braider-service-card.styles";

export interface BraiderServiceCardProps {
  service: BraiderService;
  selected?: boolean;
  onPress?: (service: BraiderService) => void;
}

function BraiderServiceCardComponent({
  service,
  selected = false,
  onPress,
}: BraiderServiceCardProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);

  return (
    <Pressable
      onPress={onPress ? () => onPress(service) : undefined}
      disabled={!onPress}
      accessibilityRole={onPress ? "button" : "text"}
      accessibilityState={onPress ? { selected } : undefined}
      accessibilityLabel={`${service.name}, ${formatDuration(service.minutes)}, ${formatPrice(service.price)}`}
      style={({ pressed }) => [
        styles.card,
        selected && styles.cardSelected,
        pressed && onPress && styles.cardPressed,
      ]}
    >
      <View style={styles.info}>
        <ThemedText
          type="headline"
          textColor={selected ? "onPrimarySubtle" : "text"}
        >
          {service.name}
        </ThemedText>

        <View style={styles.durationRow}>
          <Clock
            size={13}
            color={
              selected ? themeColor.onPrimarySubtle : themeColor.textTertiary
            }
            strokeWidth={2}
          />
          <ThemedText
            type="caption"
            textColor={selected ? "onPrimarySubtle" : "textSecondary"}
          >
            {formatDuration(service.minutes)}
          </ThemedText>
        </View>
      </View>

      <ThemedText
        type="headline"
        textColor={selected ? "onPrimarySubtle" : "primary"}
        style={styles.price}
      >
        {formatPrice(service.price)}
      </ThemedText>
    </Pressable>
  );
}

export const BraiderServiceCard = memo(BraiderServiceCardComponent);
