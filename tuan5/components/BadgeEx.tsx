import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function BadgeEx() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: "https://picsum.photos/id/24/200/300" }}
          style={styles.image}
        />

        <View style={styles.badge}>
          <Text style={styles.badgeText}>-20%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 8,
  },
  badge: {
    position: "absolute",
    top: 6,
    left: 6,
    backgroundColor: "#e63946",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});
