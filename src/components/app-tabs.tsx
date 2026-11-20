import { useTheme } from "@/hooks/use-theme";
import { NativeTabs } from "expo-router/native-tabs";
// import { useColorScheme } from "react-native";

// import { Colors } from "@/constants/theme";

export default function AppTabs() {
  // const scheme = useColorScheme();
  // const colors = Colors[scheme === "dark" ? "dark" : "light"];
  const themeColor = useTheme();

  return (
    <NativeTabs
      backgroundColor={themeColor.background}
      indicatorColor={themeColor.foreground}
      labelStyle={{ selected: { color: themeColor.foreground } }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require("@/assets/images/tabIcons/home.png")}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require("@/assets/images/tabIcons/explore.png")}
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
