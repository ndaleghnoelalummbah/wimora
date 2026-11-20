import { ThemedText } from "@/components/themed-text/themed-text";
import { BookingSummaryPayload } from "@/features/bookings/components/book-service-form/book-service-form";
import { BookingSummaryCard } from "@/features/bookings/components/booking-summary-card/booking-summary-card";
import { useTheme } from "@/hooks/use-theme";
import { useRouter } from "expo-router";
import { CheckCircle2, Home } from "lucide-react-native";
import { useCallback, useMemo } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { createStyles } from "./booking-confirmation.styles";

export interface BookingConfirmationScreenProps {
  summary: BookingSummaryPayload;
}

export default function BookingConfirmationScreen({
  summary,
}: BookingConfirmationScreenProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);
  const router = useRouter();

  const handleDone = useCallback(() => {
    router.dismissAll();
    router.replace("/");
  }, [router]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.badgeCircle}>
            <CheckCircle2
              size={34}
              color={themeColor.primary}
              strokeWidth={2.25}
            />
          </View>

          <ThemedText type="title" textColor="text" style={styles.centeredText}>
            Booking Confirmed!
          </ThemedText>

          <ThemedText
            type="small"
            textColor="textSecondary"
            style={styles.centeredText}
          >
            Your appointment request with {summary.braiderName} is locked in.
          </ThemedText>
        </View>

        <BookingSummaryCard summary={summary} />
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          onPress={handleDone}
          accessibilityRole="button"
          accessibilityLabel="Return to braider list"
          style={({ pressed }) => [
            styles.doneButton,
            pressed && styles.doneButtonPressed,
          ]}
        >
          <ThemedText
            type="headline"
            textColor="onPrimary"
            style={styles.doneText}
          >
            Back to Braiders
          </ThemedText>
        </Pressable>
      </View>
    </View>
  );
}
