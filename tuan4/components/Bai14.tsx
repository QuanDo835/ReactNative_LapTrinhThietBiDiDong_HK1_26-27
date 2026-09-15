import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Kiểu Product
interface Product {
  id: number;
  title: string;
  price: number;
}

// Generic Interface
interface ApiResponse<T> {
  data: T[];
  total: number;
  page: number;
}

export default function Bai14() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  // Trạng thái đang tải dữ liệu
  const [loading, setLoading] = useState(false);

  // Trạng thái đang refresh
  const [refreshing, setRefreshing] = useState(false);

  const fetchProducts = async (pageNumber: number) => {
    try {
      setLoading(true);

      // Giả lập API phân trang
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          (pageNumber - 1) * 10
        }`
      );

      if (!response.ok) {
        throw new Error("Lỗi API");
      }

      const result = await response.json();

      // Chuyển dữ liệu API về cấu trúc ApiResponse<Product>
      const data: ApiResponse<Product> = {
        data: result.products,
        total: result.total,
        page: pageNumber,
      };

      setProducts(data.data);
      setPage(data.page);
    } catch (error) {
      console.log("Lỗi:", error);
    } finally {
      setLoading(false);
    }
  };

  // Gọi API lần đầu
  useEffect(() => {
    fetchProducts(1);
  }, []);

  // Refresh
  const handleRefresh = async () => {
    setRefreshing(true);

    await fetchProducts(1);

    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Danh sách sản phẩm
      </Text>

      {loading && !refreshing && (
        <ActivityIndicator
          size="large"
          color="#3b82f6"
        />
      )}

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

      <View style={styles.pagination}>
        <TouchableOpacity
          style={[
            styles.button,
            page === 1 && styles.buttonDisabled,
          ]}
          disabled={page === 1}
          onPress={() => fetchProducts(page - 1)}
        >
          <Text style={styles.buttonText}>
            ← Trước
          </Text>
        </TouchableOpacity>

        <Text style={styles.pageText}>
          Trang {page}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => fetchProducts(page + 1)}
        >
          <Text style={styles.buttonText}>
            Sau →
          </Text>
        </TouchableOpacity>
      </View>
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

  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },

  button: {
    backgroundColor: "#3b82f6",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },

  buttonDisabled: {
    backgroundColor: "#94a3b8",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  pageText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
