import { AlertCircle, ArrowRight } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

import { useBraider } from "@/features/braiders/hooks/use-braider";
import { Braider, BraiderService } from "@/features/braiders/types";
import { useTheme } from "@/hooks/use-theme";
import { createStyles } from "./braider-detail-container.styles";
import { LoadingContainer } from "@/components/ui/loading-container/loading-container";
import { EmptyOrErrorContainer } from "@/components/ui/empty-or-error-container/empty-or-error-container";
import { ThemedText } from "@/components/themed-text/themed-text";
import { BraiderServiceCard } from "../braider-service-card/braider-service-card";
import { TimeSlotChip } from "../time-slot-chip/time-slot-chip";
import { BraiderDetailHeader } from "../braider-detail-header/braider-detail-header";

export interface BraiderDetailContainerProps {
  braiderId: string;
  onStartBooking: (params: {
    braider: Braider;
    preselectedServiceName?: string;
    preselectedSlot?: string;
  }) => void;
  onBackToList: () => void;
}

export function BraiderDetailContainer({
  braiderId,
  onStartBooking,
  onBackToList,
}: BraiderDetailContainerProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);
  const { braider, isLoading, error, retry } = useBraider(braiderId);

  const [selectedServiceName, setSelectedServiceName] = useState<
    string | undefined
  >();
  const [selectedSlot, setSelectedSlot] = useState<string | undefined>();

  if (isLoading) {
    return <LoadingContainer message="Loading braider profile..." />;
  }

  if (error || !braider) {
    return (
      <EmptyOrErrorContainer
        icon={AlertCircle}
        title="Braider unavailable"
        description={error ?? "We couldn't find this braider."}
        actionLabel={error?.includes("find") ? "Back to Braiders" : "Try Again"}
        onAction={error?.includes("find") ? onBackToList : retry}
      />
    );
  }

  const handleToggleService = (service: BraiderService) => {
    setSelectedServiceName((prev) =>
      prev === service.name ? undefined : service.name,
    );
  };

  const handleToggleSlot = (slot: string) => {
    setSelectedSlot((prev) => (prev === slot ? undefined : slot));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <BraiderDetailHeader braider={braider} />

        {/* Services Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" textColor="text">
              Services
            </ThemedText>
            <ThemedText type="caption" textColor="textTertiary">
              Tap a service to pre-select for booking
            </ThemedText>
          </View>

          <View style={styles.servicesList}>
            {braider.services.map((service) => (
              <BraiderServiceCard
                key={service.name}
                service={service}
                selected={selectedServiceName === service.name}
                onPress={handleToggleService}
              />
            ))}
          </View>
        </View>

        {/* Available Time Slots Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" textColor="text">
              Available Time Slots
            </ThemedText>
            <ThemedText type="caption" textColor="textTertiary">
              Tap a slot to pre-select your time
            </ThemedText>
          </View>

          <View style={styles.slotsWrap}>
            {braider.slots.map((slot) => (
              <TimeSlotChip
                key={slot}
                slot={slot}
                selected={selectedSlot === slot}
                onPress={handleToggleSlot}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Booking CTA */}
      <View style={styles.footer}>
        <Pressable
          onPress={() =>
            onStartBooking({
              braider,
              preselectedServiceName: selectedServiceName,
              preselectedSlot: selectedSlot,
            })
          }
          accessibilityRole="button"
          accessibilityLabel={`Book appointment with ${braider.name}`}
          style={({ pressed }) => [
            styles.ctaButton,
            pressed && styles.ctaButtonPressed,
          ]}
        >
          <ThemedText
            type="headline"
            textColor="onPrimary"
            style={styles.ctaText}
          >
            Book Appointment
          </ThemedText>
        </Pressable>
      </View>
    </View>
  );
}
