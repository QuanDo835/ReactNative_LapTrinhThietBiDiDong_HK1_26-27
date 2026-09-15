import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export default function Bai10() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data as User);
      })
      .catch((error) => {
        console.log("Lỗi:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {user && (
        <View style={styles.card}>
          <Text style={styles.title}>Thông tin người dùng</Text>

          <Text style={styles.label}>
            ID:
            <Text style={styles.value}> {user?.id}</Text>
          </Text>

          <Text style={styles.label}>
            Họ tên:
            <Text style={styles.value}> {user?.name}</Text>
          </Text>

          <Text style={styles.label}>
            Username:
            <Text style={styles.value}> {user?.username}</Text>
          </Text>

          <Text style={styles.label}>
            Email:
            <Text style={styles.value}> {user?.email}</Text>
          </Text>

          <Text style={styles.label}>
            Phone:
            <Text style={styles.value}> {user?.phone}</Text>
          </Text>

          <Text style={styles.label}>
            Website:
            <Text style={styles.value}> {user?.website}</Text>
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1e293b",
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#475569",
  },

  value: {
    fontWeight: "normal",
    color: "#1e293b",
  },
});
