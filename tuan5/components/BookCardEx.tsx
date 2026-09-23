import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function BookCardEx() {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: "https://picsum.photos/id/1015/80/110" }}
        style={styles.coverImage}
      />
      <View style={styles.infoColumn}>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            Tên sách rất dài để test thử tính năng numberOfLines xem nó có cắt
            chữ đúng không
          </Text>
          <Text style={styles.author}>Tác giả: Nguyễn Văn A</Text>
        </View>
        <Text style={styles.price}>150.000 đ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  coverImage: {
    width: 80,
    height: 110,
    borderRadius: 6,
    marginRight: 12,
  },
  infoColumn: {
    flex: 1, // Chiếm phần không gian còn lại
    flexDirection: "column",
    height: 110, // Bằng chiều cao ảnh để justify-content hoạt động chuẩn
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  author: {
    color: "gray",
    fontSize: 14,
  },
  price: {
    fontSize: 16,
    color: "#e63946",
    fontWeight: "bold",
  },
});
