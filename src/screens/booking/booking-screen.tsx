import {
  BookingSummaryPayload,
  BookServiceForm,
} from "@/features/bookings/components/book-service-form/book-service-form";
import { useTheme } from "@/hooks/use-theme";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { View } from "react-native";
import { createStyles } from "./booking-confirmation.styles";

export interface BookingScreenProps {
  braiderId: string;
  initialServiceName?: string;
  initialSlot?: string;
}

export default function BookingScreen({
  braiderId,
  initialServiceName,
  initialSlot,
}: BookingScreenProps) {
  const themeColor = useTheme();
  const styles = createStyles(themeColor);

  const router = useRouter();

  const handleConfirmBooking = useCallback(
    (summary: BookingSummaryPayload) => {
      router.replace({
        pathname: "/booking/confirmation",
        params: {
          reference: summary.reference,
          braiderName: summary.braiderName,
          braiderLocation: summary.braiderLocation,
          serviceName: summary.serviceName,
          servicePrice: String(summary.servicePrice),
          serviceMinutes: String(summary.serviceMinutes),
          slot: summary.slot,
          customerName: summary.customerName,
          phoneNumber: summary.phoneNumber,
        },
      });
    },
    [router],
  );

  const handleBackToList = useCallback(() => {
    router.replace("/");
  }, [router]);

  return (
    <View style={styles.container}>
      <BookServiceForm
        braiderId={braiderId}
        initialServiceName={initialServiceName}
        initialSlot={initialSlot}
        onConfirmBooking={handleConfirmBooking}
        onBackToList={handleBackToList}
      />
    </View>
  );
}
