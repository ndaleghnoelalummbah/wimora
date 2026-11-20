import { memo, useMemo } from "react";
import { Pressable, View } from "react-native";

import { useTheme } from "@/hooks/use-theme";
import { formatPrice, getInitials } from "@/utils/formatters";
import { createStyles } from "./braider-card.styles";
import { Braider } from "../../types";
import { ThemedText } from "@/components/themed-text/themed-text";
import { ArrowRight, Star } from "lucide-react-native";

export interface BraiderCardProps {
  braider: Braider;
  onPress: (braider: Braider) => void;
}

function BraiderCardComponent({ braider, onPress }: BraiderCardProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);
  const { name, specialty, rating, priceFrom } = braider;

  return (
    <Pressable
      onPress={() => onPress(braider)}
      accessibilityRole="button"
      accessibilityLabel={`${name}, ${specialty}, rated ${rating.toFixed(1)}, starting from ${formatPrice(priceFrom)}`}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      {/* Top Row: Avatar + Name & Specialty + Rating */}
      <View style={styles.topRow}>
        <View style={styles.avatar}>
          <ThemedText
            type="headline"
            textColor="onPrimarySubtle"
            style={styles.avatarText}
          >
            {getInitials(name)}
          </ThemedText>
        </View>

        <View style={styles.identity}>
          <ThemedText type="headline" textColor="text" numberOfLines={1}>
            {name}
          </ThemedText>

          <View style={styles.specialtyChip}>
            <ThemedText
              type="caption"
              textColor="textSecondary"
              style={styles.specialtyText}
            >
              {specialty}
            </ThemedText>
          </View>
        </View>

        <View style={styles.ratingBadge}>
          <Star
            size={12}
            color={themeColor.accent}
            fill={themeColor.accent}
            strokeWidth={2}
          />
          <ThemedText
            type="caption"
            textColor="onPrimarySubtle"
            style={styles.ratingText}
          >
            {rating.toFixed(1)}
          </ThemedText>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Bottom Row: Starting Price + Navigation Circle */}
      <View style={styles.footerRow}>
        <View style={styles.priceGroup}>
          <ThemedText type="caption" textColor="textTertiary">
            Starting from
          </ThemedText>
          <ThemedText type="headline" textColor="text" style={styles.price}>
            {formatPrice(priceFrom)}
          </ThemedText>
        </View>

        <View style={styles.actionCircle}>
          <ArrowRight
            size={16}
            color={themeColor.onPrimary}
            strokeWidth={2.25}
          />
        </View>
      </View>
    </Pressable>
  );
}

export const BraiderCard = memo(BraiderCardComponent);
