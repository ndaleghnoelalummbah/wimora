// // import BraiderCard from "@/features/braiders/components/braider-card/braider-card";
// import { BraiderCard } from "@/features/braiders/components/braider-card/braider-card";
// import { router } from "expo-router";
// import { View } from "react-native";
// export default function BraidersScreen() {
//   return (
//     <View>
//       <BraiderCard
//         braider={{
//           id: "studio-1",
//           studioName: "GlowUp Braids Studio",
//           location: "Molyko, Buea",
//           startingPrice: "15,000 XAF",
//           rating: 4.8,
//           coverImageUrl: "https://example.com/braider-cover.jpg",
//         }}
//         onPress={(braider) => router.push(`/braiders/${braider.id}`)}
//       />
//     </View>
//   );
// }

import { SearchBar } from "@/components/search-bar/search-bar";
import { ThemedText } from "@/components/themed-text/themed-text";
import { BraidersContainer } from "@/features/braiders/components/braiders-container/braiders-container";
import { useTheme } from "@/hooks/use-theme";
import { useCallback, useMemo, useState } from "react";
import { View } from "react-native";
import { createStyles } from "./braders-screen.style";

export default function BraidersScreen() {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <ThemedText type="title" textColor="text">
            Find your braider
          </ThemedText>
        </View>

        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search by name or specialty..."
        />
      </View>

      <BraidersContainer
        searchQuery={searchQuery}
        // onSelectBraider={handleSelectBraider}
        onClearSearch={handleClearSearch}
      />
    </View>
  );
}
