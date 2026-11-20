import { AlertCircle, User } from "lucide-react-native";
import { useMemo, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  View,
} from "react-native";

import { FormTextInput } from "@/components/form-text-input/form-text-input";
import { PhoneInput } from "@/components/phone-input/phone-input";
import { ThemedText } from "@/components/themed-text/themed-text";
import { EmptyOrErrorContainer } from "@/components/ui/empty-or-error-container/empty-or-error-container";
import { LoadingContainer } from "@/components/ui/loading-container/loading-container";
import { BraiderServiceCard } from "@/features/braiders/components/braider-service-card/braider-service-card";
import { TimeSlotChip } from "@/features/braiders/components/time-slot-chip/time-slot-chip";
import { useBraider } from "@/features/braiders/hooks/use-braider";
import { BraiderService } from "@/features/braiders/types";
import { useTheme } from "@/hooks/use-theme";
import {
  formatDuration,
  formatPrice,
  generateBookingReference,
  isValidPhoneNumber,
} from "@/utils/formatters";
import { createStyles } from "./book-service-form.styles";

export interface BookingSummaryPayload {
  reference: string;
  braiderName: string;
  braiderLocation: string;
  serviceName: string;
  servicePrice: number;
  serviceMinutes: number;
  slot: string;
  customerName: string;
  phoneNumber: string;
}

export interface BookServiceFormProps {
  braiderId: string;
  initialServiceName?: string;
  initialSlot?: string;
  onConfirmBooking: (summary: BookingSummaryPayload) => void;
  onBackToList: () => void;
}

export function BookServiceForm({
  braiderId,
  initialServiceName,
  initialSlot,
  onConfirmBooking,
  onBackToList,
}: BookServiceFormProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);
  const { braider, isLoading, error, retry } = useBraider(braiderId);

  const [selectedServiceName, setSelectedServiceName] = useState<string>(
    initialServiceName ?? "",
  );
  const [selectedSlot, setSelectedSlot] = useState<string>(initialSlot ?? "");
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [touched, setTouched] = useState({
    service: false,
    slot: false,
    name: false,
    phone: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedService: BraiderService | undefined = useMemo(() => {
    if (!braider) return undefined;
    return braider.services.find((s) => s.name === selectedServiceName);
  }, [braider, selectedServiceName]);

  const validationErrors = useMemo(() => {
    return {
      service: !selectedService
        ? "Please select a braiding service."
        : undefined,
      slot: !selectedSlot ? "Please choose an available time slot." : undefined,
      name:
        customerName.trim().length < 2
          ? "Please enter your full name (at least 2 characters)."
          : undefined,
      phone: !isValidPhoneNumber(phoneNumber)
        ? "Please enter a valid 10-digit phone number."
        : undefined,
    };
  }, [selectedService, selectedSlot, customerName, phoneNumber]);

  const isFormValid =
    !validationErrors.service &&
    !validationErrors.slot &&
    !validationErrors.name &&
    !validationErrors.phone;

  if (isLoading) {
    return <LoadingContainer message="Preparing booking options..." />;
  }

  if (error || !braider) {
    return (
      <EmptyOrErrorContainer
        icon={AlertCircle}
        title="Booking unavailable"
        description={error ?? "We couldn't load this braider's schedule."}
        actionLabel={error?.includes("find") ? "Back to Braiders" : "Try Again"}
        onAction={error?.includes("find") ? onBackToList : retry}
      />
    );
  }

  const handleSubmit = async () => {
    setTouched({ service: true, slot: true, name: true, phone: true });
    if (!isFormValid || !selectedService || isSubmitting) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 450));

    onConfirmBooking({
      reference: generateBookingReference(),
      braiderName: braider.name,
      braiderLocation: braider.location,
      serviceName: selectedService.name,
      servicePrice: selectedService.price,
      serviceMinutes: selectedService.minutes,
      slot: selectedSlot,
      customerName: customerName.trim(),
      phoneNumber: phoneNumber.trim(),
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 96 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Selected Braider Context Banner */}
        <View style={styles.braiderBanner}>
          <View style={styles.bannerInfo}>
            <ThemedText type="caption" textColor="primary">
              BOOKING WITH
            </ThemedText>
            <ThemedText type="headline" textColor="text">
              {braider.name}
            </ThemedText>
            <ThemedText type="caption" textColor="textSecondary">
              {braider.specialty} • {braider.location}
            </ThemedText>
          </View>
        </View>

        {/* Step 1: Pick a Service */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" textColor="text">
              1. Choose a Service
            </ThemedText>
            {touched.service && validationErrors.service && (
              <ThemedText type="caption" textColor="error">
                {validationErrors.service}
              </ThemedText>
            )}
          </View>

          <View style={styles.servicesList}>
            {braider.services.map((service) => (
              <BraiderServiceCard
                key={service.name}
                service={service}
                selected={selectedServiceName === service.name}
                onPress={(picked) => {
                  setSelectedServiceName(picked.name);
                  setTouched((prev) => ({ ...prev, service: true }));
                }}
              />
            ))}
          </View>
        </View>

        {/* Step 2: Pick a Time Slot */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" textColor="text">
              2. Pick a Time Slot
            </ThemedText>
            {touched.slot && validationErrors.slot && (
              <ThemedText type="caption" textColor="error">
                {validationErrors.slot}
              </ThemedText>
            )}
          </View>

          <View style={styles.slotsWrap}>
            {braider.slots.map((slot) => (
              <TimeSlotChip
                key={slot}
                slot={slot}
                selected={selectedSlot === slot}
                onPress={(pickedSlot) => {
                  setSelectedSlot(pickedSlot);
                  setTouched((prev) => ({ ...prev, slot: true }));
                }}
              />
            ))}
          </View>
        </View>

        {/* Step 3: Enter Customer Information */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" textColor="text">
              3. Your Contact Details
            </ThemedText>
            <ThemedText type="caption" textColor="textTertiary">
              We&apos;ll send appointment reminders to this number
            </ThemedText>
          </View>

          <View style={styles.inputsGroup}>
            <FormTextInput
              label="Full Name"
              icon={User}
              value={customerName}
              error={touched.name ? validationErrors.name : undefined}
              placeholder="e.g. Jordan Taylor"
              autoCapitalize="words"
              autoComplete="name"
              returnKeyType="next"
              accessibilityLabel="Customer full name"
              onChangeText={setCustomerName}
              onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            />

            <PhoneInput
              value={phoneNumber}
              error={touched.phone ? validationErrors.phone : undefined}
              accessibilityLabel="Customer phone number"
              onChangePhone={setPhoneNumber}
              onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
            />
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Summary & Confirm CTA */}
      <View style={styles.footer}>
        {selectedService && (
          <View style={styles.totalRow}>
            <ThemedText type="small" textColor="textSecondary">
              {selectedService.name} ({formatDuration(selectedService.minutes)})
            </ThemedText>
            <ThemedText
              type="headline"
              textColor="text"
              style={styles.totalPrice}
            >
              {formatPrice(selectedService.price)}
            </ThemedText>
          </View>
        )}

        <Pressable
          onPress={handleSubmit}
          disabled={isSubmitting}
          accessibilityRole="button"
          accessibilityLabel="Confirm booking"
          style={({ pressed }) => [
            styles.submitButton,
            pressed && !isSubmitting && styles.submitButtonPressed,
            isSubmitting && styles.submitButtonDisabled,
          ]}
        >
          {isSubmitting ? (
            <ActivityIndicator color={themeColor.onPrimary} />
          ) : (
            <ThemedText
              type="headline"
              textColor="onPrimary"
              style={styles.submitText}
            >
              Confirm Booking
            </ThemedText>
          )}
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
