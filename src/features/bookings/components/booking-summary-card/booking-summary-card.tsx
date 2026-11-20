import React, { memo, useMemo } from "react";
import { View } from "react-native";

import { useTheme } from "@/hooks/use-theme";
import { formatDuration, formatPrice } from "@/utils/formatters";
import { createStyles } from "./booking-summary-card.styles";
import { BookingSummaryPayload } from "../book-service-form/book-service-form";
import { ThemedText } from "@/components/themed-text/themed-text";

export interface BookingSummaryCardProps {
  summary: BookingSummaryPayload;
}

function BookingSummaryCardComponent({ summary }: BookingSummaryCardProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);

  return (
    <View style={styles.card}>
      <View style={styles.refRow}>
        <ThemedText type="caption" textColor="textTertiary">
          BOOKING REFERENCE
        </ThemedText>
        <View style={styles.refPill}>
          <ThemedText
            type="caption"
            textColor="onPrimarySubtle"
            style={styles.refText}
          >
            #{summary.reference}
          </ThemedText>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <ThemedText type="small" textColor="textSecondary">
          Braider
        </ThemedText>
        <ThemedText type="small" textColor="text" style={styles.rowValue}>
          {summary.braiderName} ({summary.braiderLocation})
        </ThemedText>
      </View>

      <View style={styles.row}>
        <ThemedText type="small" textColor="textSecondary">
          Service
        </ThemedText>
        <ThemedText type="small" textColor="text" style={styles.rowValue}>
          {summary.serviceName} ({formatDuration(summary.serviceMinutes)})
        </ThemedText>
      </View>

      <View style={styles.row}>
        <ThemedText type="small" textColor="textSecondary">
          Date & Time
        </ThemedText>
        <ThemedText type="small" textColor="text" style={styles.rowValue}>
          {summary.slot}
        </ThemedText>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <ThemedText type="small" textColor="textSecondary">
          Customer
        </ThemedText>
        <ThemedText type="small" textColor="text" style={styles.rowValue}>
          {summary.customerName}
        </ThemedText>
      </View>

      <View style={styles.row}>
        <ThemedText type="small" textColor="textSecondary">
          Phone
        </ThemedText>
        <ThemedText type="small" textColor="text" style={styles.rowValue}>
          {summary.phoneNumber}
        </ThemedText>
      </View>

      <View style={styles.divider} />

      <View style={styles.totalRow}>
        <ThemedText type="headline" textColor="text">
          Estimated Total
        </ThemedText>
        <ThemedText type="title" textColor="primary" style={styles.totalAmount}>
          {formatPrice(summary.servicePrice)}
        </ThemedText>
      </View>
    </View>
  );
}

export const BookingSummaryCard = memo(BookingSummaryCardComponent);
