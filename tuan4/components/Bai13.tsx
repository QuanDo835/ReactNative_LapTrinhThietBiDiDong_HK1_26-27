import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// Hàm Generic
function filterByName<T extends { name: string }>(
  data: T[],
  keyword: string
): T[] {
  return data.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

// Kiểu User
interface User {
  id: number;
  name: string;
  age: number;
}

// Kiểu Product
interface Product {
  id: number;
  name: string;
  price: number;
}

export default function Bai13() {
  const [keyword, setKeyword] = useState("");

  const users: User[] = [
    { id: 1, name: "Nguyễn Văn An", age: 20 },
    { id: 2, name: "Trần Văn Bình", age: 21 },
    { id: 3, name: "Nguyễn Văn Nam", age: 22 },
    { id: 4, name: "Lê Văn An", age: 23 },
  ];

  const filteredUsers = filterByName(users, keyword);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bộ lọc danh sách</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên cần tìm..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Tuổi: {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },

  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
