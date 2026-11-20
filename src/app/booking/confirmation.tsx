import ScreenWrapper from "@/components/ui/screen-wraper/screen-wraper";
import { BookingSummaryPayload } from "@/features/bookings/components/book-service-form/book-service-form";
import BookingConfirmationScreen from "@/screens/booking/booking-confirmation";
import BookingScreen from "@/screens/booking/booking-screen";
import { useLocalSearchParams } from "expo-router";
import React from "react";

function firstParam(value?: string | string[]): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default function BookingConfirmationRoute() {
  const params = useLocalSearchParams<Record<string, string | string[]>>();

  const summary: BookingSummaryPayload = {
    reference: firstParam(params.reference) || "WMR-0000",
    braiderName: firstParam(params.braiderName),
    braiderLocation: firstParam(params.braiderLocation),
    serviceName: firstParam(params.serviceName),
    servicePrice: Number(firstParam(params.servicePrice)) || 0,
    serviceMinutes: Number(firstParam(params.serviceMinutes)) || 0,
    slot: firstParam(params.slot),
    customerName: firstParam(params.customerName),
    phoneNumber: firstParam(params.phoneNumber),
  };

  return (
    <ScreenWrapper>
      <BookingConfirmationScreen summary={summary} />
    </ScreenWrapper>
  );
}
