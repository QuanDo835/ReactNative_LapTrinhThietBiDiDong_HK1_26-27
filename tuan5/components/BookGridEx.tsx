import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const books = [1, 2, 3, 4, 5, 6];

export default function BookGridEx() {
  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      {books.map((item) => (
        <View key={item} style={styles.gridItem}>
          <Image
            source={{ uri: `https://picsum.photos/id/10${item}/200/300` }}
            style={styles.gridImage}
          />
          <Text style={styles.bookTitle} numberOfLines={1}>
            Sách {item}
          </Text>
          <Text style={styles.bookPrice}>100.000 đ</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 12,
  },
  gridItem: {
    width: "48%", // Chừa 4% làm khoảng trống ở giữa
    marginBottom: 16,
  },
  gridImage: {
    width: "100%",
    aspectRatio: 3 / 4, // Giữ tỉ lệ không cần fix cứng height
    borderRadius: 8,
    marginBottom: 8,
  },
  bookTitle: {
    fontWeight: "600",
    fontSize: 14,
  },
  bookPrice: {
    color: "#e63946",
    marginTop: 4,
  },
});
