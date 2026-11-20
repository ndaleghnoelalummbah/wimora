import { useLocalSearchParams } from "expo-router";
import React from "react";

import BookingScreen from "@/screens/booking/booking-screen";
import ScreenWrapper from "@/components/ui/screen-wraper/screen-wraper";

function firstParam(value?: string | string[]): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default function Booking() {
  const params = useLocalSearchParams<{
    braiderId?: string | string[];
    service?: string | string[];
    slot?: string | string[];
  }>();

  return (
    <ScreenWrapper>
      <BookingScreen
        braiderId={firstParam(params.braiderId) ?? ""}
        initialServiceName={firstParam(params.service)}
        initialSlot={firstParam(params.slot)}
      />
    </ScreenWrapper>
  );
}
