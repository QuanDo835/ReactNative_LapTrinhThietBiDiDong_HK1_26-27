import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Product {
  id: number;
  title: string;
  price: number;
}

export default function Bai15() {
  const [products, setProducts] = useState<Product[]>([]);

  // Loading lần đầu
  const [loading, setLoading] = useState<boolean>(true);

  // Loading khi kéo xuống refresh
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products"
      );

      if (!response.ok) {
        throw new Error("Lỗi API");
      }

      const result = await response.json();

      setProducts(result.products as Product[]);
    } catch (error) {
      console.log("Lỗi:", error);
    }
  };

  // Tải dữ liệu lần đầu
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      await fetchProducts();

      setLoading(false);
    };

    loadData();
  }, []);

  // Kéo xuống để refresh
  const handleRefresh = async () => {
    setRefreshing(true);

    await fetchProducts();

    setRefreshing(false);
  };

  // Loading lần đầu
  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
          color="#3b82f6"
        />

        <Text style={styles.loadingText}>
          Đang tải dữ liệu...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Danh sách sản phẩm
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.productName}>
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

  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
  },

  price: {
    marginTop: 5,
    color: "#64748b",
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 10,
    color: "#64748b",
  },
});
