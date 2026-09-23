import React from "react";
import { View, Text, StyleSheet } from "react-native";

const categories = [
  "Văn học",
  "Kinh tế",
  "Thiếu nhi",
  "Kỹ năng sống",
  "Truyện tranh",
  "Ngoại ngữ",
  "Lịch sử",
];

export default function CategoryChipsEx() {
  return (
    <View style={styles.container}>
      {categories.map((cat, index) => (
        <View key={index} style={styles.chip}>
          <Text style={styles.chipText}>{cat}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap", // Tự động xuống dòng
    gap: 8,
    padding: 16,
    alignContent: "flex-start",
  },
  chip: {
    width: "auto", // Tự động theo nội dung
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20, // Dạng pill
    borderWidth: 1,
    borderColor: "#4f46e5",
    backgroundColor: "#f5f7ff",
  },
  chipText: {
    color: "#4f46e5",
    fontWeight: "500",
  },
});
