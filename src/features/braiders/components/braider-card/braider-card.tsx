// import { Image } from "expo-image";
// import React, { memo } from "react";
// import { Pressable, StyleSheet, View } from "react-native";

// import { Radius, Spacing } from "@/constants/theme";
// import { useTheme } from "@/hooks/use-theme";
// import { ThemedText } from "@/components/themed-text/themed-text";
// import { ArrowUpRight, Star } from "lucide-react-native";

// export type BraiderCardItem = {
//   id: string;
//   studioName: string;
//   location: string;
//   startingPrice: string;
//   rating: number;
//   coverImageUrl: string;
// };

// export type BraiderCardProps = {
//   braider: BraiderCardItem;
//   onPress: (braider: BraiderCardItem) => void;
//   onToggleFavorite?: (id: string) => void;
// };

// function BraiderCardComponent({ braider, onPress }: BraiderCardProps) {
//   const colors = useTheme();
//   const { id, studioName, location, startingPrice, rating, coverImageUrl } =
//     braider;

//   return (
//     <Pressable
//       onPress={() => onPress(braider)}
//       accessibilityRole="button"
//       accessibilityLabel={`${studioName}, rated ${rating.toFixed(1)}, starting at ${startingPrice}`}
//       style={({ pressed }) => [
//         styles.card,
//         {
//           backgroundColor: colors.surface,
//           borderColor: colors.border,
//           opacity: pressed ? 0.94 : 1,
//         },
//       ]}
//     >
//       {/* Hero Image Container */}
//       <View
//         style={[
//           styles.imageWrapper,
//           { backgroundColor: colors.surfaceSecondary },
//         ]}
//       >
//         <Image
//           source={{ uri: coverImageUrl }}
//           style={styles.image}
//           contentFit="cover"
//           transition={200}
//           cachePolicy="memory-disk"
//           recyclingKey={id}
//         />
//       </View>

//       {/* Card Body */}
//       <View style={styles.content}>
//         {/* Row 1: Studio Name + Rating Pill */}
//         <View style={styles.headerRow}>
//           <ThemedText
//             type="headline"
//             textColor="text"
//             numberOfLines={1}
//             style={styles.title}
//           >
//             {studioName}
//           </ThemedText>

//           <View
//             style={[
//               styles.ratingBadge,
//               { backgroundColor: colors.primarySubtle },
//             ]}
//           >
//             <Star size={12} color={colors.accent} />
//             <ThemedText
//               type="caption"
//               textColor="onPrimarySubtle"
//               style={styles.ratingText}
//             >
//               {rating.toFixed(1)}
//             </ThemedText>
//           </View>
//         </View>

//         {/* Row 2: Location */}
//         <ThemedText type="small" textColor="textSecondary" numberOfLines={1}>
//           {location}
//         </ThemedText>

//         {/* Row 3: Starting Price + Action Circle */}
//         <View style={styles.footerRow}>
//           <ThemedText type="headline" textColor="text" style={styles.price}>
//             {startingPrice}
//           </ThemedText>

//           <View
//             style={[styles.actionCircle, { backgroundColor: colors.primary }]}
//           >
//             <ArrowUpRight size={18} color={colors.onPrimary} />
//           </View>
//         </View>
//       </View>
//     </Pressable>
//   );
// }

// export const BraiderCard = memo(BraiderCardComponent);

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: Radius.lg,
//     borderWidth: 1,
//     padding: Spacing.md,
//     gap: Spacing.md,
//     // Subtle editorial elevation
//     shadowColor: "#000000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   imageWrapper: {
//     width: "100%",
//     aspectRatio: 16 / 10,
//     borderRadius: Radius.md,
//     overflow: "hidden",
//     position: "relative",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
//   favoriteButton: {
//     position: "absolute",
//     top: Spacing.md,
//     right: Spacing.md,
//     width: 36,
//     height: 36,
//     borderRadius: Radius.full,
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#000000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   content: {
//     gap: Spacing.xs,
//   },
//   headerRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     gap: Spacing.sm,
//   },
//   title: {
//     flex: 1,
//   },
//   ratingBadge: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: Spacing.xs,
//     paddingHorizontal: Spacing.sm,
//     paddingVertical: Spacing.xs,
//     borderRadius: Radius.full,
//   },
//   ratingText: {
//     fontWeight: "600",
//   },
//   footerRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: Spacing.sm,
//   },
//   price: {
//     fontWeight: "700",
//   },
//   actionCircle: {
//     width: 34,
//     height: 34,
//     borderRadius: Radius.full,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { memo, useMemo } from "react";
import { Pressable, View } from "react-native";

import { useTheme } from "@/hooks/use-theme";
import { formatPrice, getInitials } from "@/utils/formatters";
import { createStyles } from "./braider-card.styles";
import { Braider } from "../../types";
import { ThemedText } from "@/components/themed-text/themed-text";
import { ArrowRight, Star } from "lucide-react-native";

export interface BraiderCardProps {
  braider: Braider;
  onPress: (braider: Braider) => void;
}

function BraiderCardComponent({ braider, onPress }: BraiderCardProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);
  const { name, specialty, rating, priceFrom } = braider;

  return (
    <Pressable
      onPress={() => onPress(braider)}
      accessibilityRole="button"
      accessibilityLabel={`${name}, ${specialty}, rated ${rating.toFixed(1)}, starting from ${formatPrice(priceFrom)}`}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      {/* Top Row: Avatar + Name & Specialty + Rating */}
      <View style={styles.topRow}>
        <View style={styles.avatar}>
          <ThemedText
            type="headline"
            textColor="onPrimarySubtle"
            style={styles.avatarText}
          >
            {getInitials(name)}
          </ThemedText>
        </View>

        <View style={styles.identity}>
          <ThemedText type="headline" textColor="text" numberOfLines={1}>
            {name}
          </ThemedText>

          <View style={styles.specialtyChip}>
            <ThemedText
              type="caption"
              textColor="textSecondary"
              style={styles.specialtyText}
            >
              {specialty}
            </ThemedText>
          </View>
        </View>

        <View style={styles.ratingBadge}>
          <Star
            size={12}
            color={themeColor.accent}
            fill={themeColor.accent}
            strokeWidth={2}
          />
          <ThemedText
            type="caption"
            textColor="onPrimarySubtle"
            style={styles.ratingText}
          >
            {rating.toFixed(1)}
          </ThemedText>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Bottom Row: Starting Price + Navigation Circle */}
      <View style={styles.footerRow}>
        <View style={styles.priceGroup}>
          <ThemedText type="caption" textColor="textTertiary">
            Starting from
          </ThemedText>
          <ThemedText type="headline" textColor="text" style={styles.price}>
            {formatPrice(priceFrom)}
          </ThemedText>
        </View>

        <View style={styles.actionCircle}>
          <ArrowRight
            size={16}
            color={themeColor.onPrimary}
            strokeWidth={2.25}
          />
        </View>
      </View>
    </Pressable>
  );
}

export const BraiderCard = memo(BraiderCardComponent);
