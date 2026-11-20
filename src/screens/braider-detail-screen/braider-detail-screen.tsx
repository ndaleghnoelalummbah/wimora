import { useRouter } from "expo-router";
import React, { useCallback, useMemo } from "react";
import { View } from "react-native";

import { useBraider } from "@/features/braiders/hooks/use-braider";
import { Braider } from "@/features/braiders/types";
import { useTheme } from "@/hooks/use-theme";
import { createStyles } from "./braider-detail-screen.styles";
import { BraiderDetailContainer } from "@/features/braiders/components/braider-detail-container/braider-detail-container";

export interface BraiderDetailScreenProps {
  braiderId: string;
}

export default function BraiderDetailScreen({
  braiderId,
}: BraiderDetailScreenProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);
  const router = useRouter();

  const handleStartBooking = useCallback(
    ({
      braider: braider,
      preselectedServiceName,
      preselectedSlot,
    }: {
      braider: Braider;
      preselectedServiceName?: string;
      preselectedSlot?: string;
    }) => {
      router.push({
        pathname: "/booking/[braiderId]",
        params: {
          braiderId: braider.id,
          ...(preselectedServiceName
            ? { service: preselectedServiceName }
            : {}),
          ...(preselectedSlot ? { slot: preselectedSlot } : {}),
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
      <BraiderDetailContainer
        braiderId={braiderId}
        onStartBooking={handleStartBooking}
        onBackToList={handleBackToList}
      />
    </View>
  );
}
