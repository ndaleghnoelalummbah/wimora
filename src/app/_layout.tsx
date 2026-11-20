import AppHeader from "@/components/ui/app-header/app-header";
import { useTheme } from "@/hooks/use-theme";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const themeColor = useTheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: themeColor.primary,
          },
          headerTintColor: themeColor.textInverse,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          header: ({ navigation, route, options, back }) => (
            <AppHeader
              title={options.title ?? route.name}
              canGoBack={!!back}
              onBackPress={() => navigation.goBack()}
            />
          ),
          headerShadowVisible: false,
        }}
      >
        {/* Optionally configure static options outside the route.*/}
        <Stack.Screen name="index" options={{ title: "Braiders" }} />
        <Stack.Screen
          name="braiders/[braiderId]"
          options={{
            title: "Braider Details",
          }}
        />
        <Stack.Screen
          name="booking/[braiderId]"
          options={{
            title: "Book Appointment",
          }}
        />
        <Stack.Screen
          name="booking/confirmation"
          options={{
            title: "Confirmation",
            headerBackVisible: false,
            gestureEnabled: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
