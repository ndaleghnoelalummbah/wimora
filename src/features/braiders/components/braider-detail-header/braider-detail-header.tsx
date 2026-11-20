import { MapPin, Star } from "lucide-react-native";
import React, { memo, useMemo } from "react";
import { View } from "react-native";

import { Braider } from "@/features/braiders/types";
import { useTheme } from "@/hooks/use-theme";
import { formatPrice, getInitials } from "@/utils/formatters";
import { createStyles } from "./braider-detail-header.styles";
import { ThemedText } from "@/components/themed-text/themed-text";

export interface BraiderDetailHeaderProps {
  braider: Braider;
}

function BraiderDetailHeaderComponent({ braider }: BraiderDetailHeaderProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);
  const { name, specialty, rating, priceFrom, location } = braider;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.avatar}>
          <ThemedText
            type="title"
            textColor="onPrimarySubtle"
            style={styles.avatarText}
          >
            {getInitials(name)}
          </ThemedText>
        </View>

        <View style={styles.identity}>
          <ThemedText type="title" textColor="text">
            {name}
          </ThemedText>

          <View style={styles.metaRow}>
            <View style={styles.specialtyChip}>
              <ThemedText
                type="caption"
                textColor="textSecondary"
                style={styles.specialtyText}
              >
                {specialty}
              </ThemedText>
            </View>

            <View style={styles.locationBadge}>
              <MapPin
                size={13}
                color={themeColor.textTertiary}
                strokeWidth={2}
              />
              <ThemedText type="caption" textColor="textTertiary">
                {location}
              </ThemedText>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <ThemedText type="caption" textColor="textTertiary">
            Rating
          </ThemedText>
          <View style={styles.ratingRow}>
            <Star
              size={14}
              color={themeColor.accent}
              fill={themeColor.accent}
              strokeWidth={2}
            />
            <ThemedText
              type="headline"
              textColor="text"
              style={styles.statValue}
            >
              {rating.toFixed(1)}
            </ThemedText>
          </View>
        </View>

        <View style={styles.statItem}>
          <ThemedText type="caption" textColor="textTertiary">
            Starting from
          </ThemedText>
          <ThemedText type="headline" textColor="text" style={styles.statValue}>
            {formatPrice(priceFrom)}
          </ThemedText>
        </View>
      </View>
    </View>
  );
}

export const BraiderDetailHeader = memo(BraiderDetailHeaderComponent);
