import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FloatingCartButtonEx() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {[...Array(10)].map((_, i) => (
          <View key={i} style={styles.dummyItem}>
            <Text>Nội dung cuộn {i + 1}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.fabButton}>
        <Ionicons name="cart" size={28} color="white" />

        <View style={styles.fabBadge}>
          <Text style={styles.fabBadgeText}>4</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scrollContent: {
    padding: 16,
  },
  dummyItem: {
    height: 80,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  fabButton: {
    position: "absolute",
    bottom: 24,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30, // Tạo hình tròn
    backgroundColor: "#4f46e5",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Bóng đổ trên Android
    shadowColor: "#000", // Bóng đổ trên iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  fabBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#e63946",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  fabBadgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});
