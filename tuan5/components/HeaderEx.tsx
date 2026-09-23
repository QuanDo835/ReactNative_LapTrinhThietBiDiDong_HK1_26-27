import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderEx() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logoText}>BookStore</Text>
      <View style={styles.iconsContainer}>
        <Ionicons name="search" size={24} color="white" />
        <Ionicons name="cart-outline" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: "#4f46e5",
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 16,
  },
});
