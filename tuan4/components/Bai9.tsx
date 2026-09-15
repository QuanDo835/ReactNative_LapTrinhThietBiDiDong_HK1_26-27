// Dùng fetch lấy dữ liệu từ https://jsonplaceholder.typicode.com/todos. 
// Hiển thị danh sách tiêu đề bài viết lên FlatList, định nghĩa Type từ cấu trúc JSON và gán kiểu cho kết quả API (data as Post[]).
import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native";
interface Post{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
export default function Bai9(){
    const [data, setData] = useState<Post[]>([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>response.json())
        .then(data=>setData(data as Post[]))
        .catch((error) => {
            console.log("Lỗi:", error);
        });
    }, [])

    return (<View style={styles.container}>
      <Text style={styles.title}>Danh sách bài viết</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>
              {item.title}
            </Text>

            <Text style={styles.status}>
              {item.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}
            </Text>
          </View>
        )}
      />
    </View>);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:""
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

  itemTitle: {
    fontSize: 16,
    color: "#1e293b",
  },

  status: {
    marginTop: 5,
    color: "#64748b",
    fontSize: 13,
  },
});