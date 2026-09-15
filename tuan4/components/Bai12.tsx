import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface CustomError {
  message: string;
  status?: number;
}

export default function Bai12() {
  const [loading, setLoading] = useState(false);

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);

      // Cố tình dùng URL sai để tạo lỗi
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/abcxyz"
      );

      if (!response.ok) {
        throw {
          message: "Không tìm thấy API",
          status: response.status,
        };
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      // Ép kiểu error về CustomError
      const customError = error as CustomError;

      Alert.alert(
        "Lỗi API",
        `${customError.message}\nStatus: ${customError.status ?? "Unknown"}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bài 12: Xử lý lỗi API
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={fetchData}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Đang gọi API..." : "Gọi API lỗi"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#ef4444",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
