import { AlertCircle, Search } from "lucide-react-native";
import { useCallback } from "react";
import { FlatList, ListRenderItem, View } from "react-native";

import { ThemedText } from "@/components/themed-text/themed-text";
import { EmptyOrErrorContainer } from "@/components/ui/empty-or-error-container/empty-or-error-container";
import { LoadingContainer } from "@/components/ui/loading-container/loading-container";
import { useRouter } from "expo-router";
import { useBraiders } from "../../hooks/use-braiders";
import { Braider } from "../../types";
import { BraiderCard } from "../braider-card/braider-card";
import { styles } from "./braiders-container.styles";

export interface BraidersContainerProps {
  searchQuery: string;
  //   onSelectBraider: (braider: Braider) => void;
  onClearSearch: () => void;
}

export function BraidersContainer({
  searchQuery,
  //   onSelectBraider,
  onClearSearch,
}: BraidersContainerProps) {
  const router = useRouter();

  const { braiders, isLoading, error, retry } = useBraiders(searchQuery);

  const handleSelectBraider = useCallback(
    (braider: Braider) => {
      router.push({
        pathname: "/braiders/[braiderId]",
        params: { braiderId: braider.id },
      });
    },
    [router],
  );

  const renderBraiderItem: ListRenderItem<Braider> = useCallback(
    ({ item }) => <BraiderCard braider={item} onPress={handleSelectBraider} />,
    [handleSelectBraider],
  );

  if (isLoading) {
    return <LoadingContainer />;
  }

  if (error) {
    return (
      <EmptyOrErrorContainer
        icon={AlertCircle}
        title="Unable to load braiders"
        description={error}
        actionLabel="Try Again"
        onAction={retry}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ThemedText type="caption" textColor="textTertiary">
        {braiders.length} {braiders.length === 1 ? "braider" : "braiders"}{" "}
        available
      </ThemedText>

      <FlatList
        data={braiders}
        keyExtractor={(item) => item.id}
        renderItem={renderBraiderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <EmptyOrErrorContainer
            icon={Search}
            title="No matching braiders"
            description={`We couldn't find any braiders matching "${searchQuery.trim()}". Try another name or specialty.`}
            actionLabel="Clear Search"
            onAction={onClearSearch}
          />
        }
      />
    </View>
  );
}
