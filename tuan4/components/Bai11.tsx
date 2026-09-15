import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

// Generic function
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return (await response.json()) as T;
}

export default function Bai11() {
  const [keyword, setKeyword] = useState("");
  const [limit, setLimit] = useState("10");
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");

  // Type annotation cho tham số
  const fetchProducts = async (
    keyword: string,
    limit: number
  ): Promise<void> => {
    try {
      setError("");

      const url = `https://dummyjson.com/products/search?q=${keyword}&limit=${limit}`;

      const data = await fetchData<ProductResponse>(url);

      setProducts(data.products);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Có lỗi xảy ra!");
      }
    }
  };

  const handleSearch = () => {
    const numberLimit = Number(limit);

    if (!keyword.trim()) {
      setError("Vui lòng nhập từ khóa!");
      return;
    }

    fetchProducts(keyword, numberLimit);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tìm kiếm sản phẩm</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên sản phẩm..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <TextInput
        style={styles.input}
        placeholder="Số lượng"
        value={limit}
        onChangeText={setLimit}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSearch}
      >
        <Text style={styles.buttonText}>Tìm kiếm</Text>
      </TouchableOpacity>

      {error !== "" && (
        <Text style={styles.error}>{error}</Text>
      )}

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text style={styles.productTitle}>
              {item.title}
            </Text>

            <Text style={styles.price}>
              Giá: ${item.price}
            </Text>
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
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  error: {
    color: "red",
    marginBottom: 10,
  },

  product: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },

  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
  },

  price: {
    marginTop: 5,
    color: "#64748b",
  },
});
