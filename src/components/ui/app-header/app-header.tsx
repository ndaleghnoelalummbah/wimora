import { ThemedText } from "@/components/themed-text/themed-text";
import { useTheme } from "@/hooks/use-theme";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStyles } from "./app-header.styles";
import { ChevronLeft } from "lucide-react-native";

type AppHeaderProps = {
  title: string;
  canGoBack: boolean;
  onBackPress: () => void;
};

export default function AppHeader({
  title,
  canGoBack,
  onBackPress,
}: AppHeaderProps) {
  const themeColor = useTheme();
  const styles = createStyles(themeColor as Parameters<typeof createStyles>[0]);

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.side}>
          {canGoBack && (
            <Pressable
              onPress={onBackPress}
              hitSlop={12}
              style={styles.backButton}
            >
              <ChevronLeft
                size={28}
                strokeWidth={2.5}
                color={themeColor.textInverse}
              />
            </Pressable>
          )}
        </View>

        <ThemedText textColor="textInverse" type="title">
          {title}
        </ThemedText>

        <View style={styles.side} />
      </View>
    </SafeAreaView>
  );
}
