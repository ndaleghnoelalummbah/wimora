import ScreenWrapper from "@/components/ui/screen-wraper/screen-wraper";
import BraiderDetailScreen from "@/screens/braider-detail-screen/braider-detail-screen";
import { useLocalSearchParams } from "expo-router";
export default function BraiderDetails() {
  const { braiderId } = useLocalSearchParams<{ braiderId: string }>();

  return (
    <ScreenWrapper>
      <BraiderDetailScreen braiderId={braiderId} />
    </ScreenWrapper>
  );
}
