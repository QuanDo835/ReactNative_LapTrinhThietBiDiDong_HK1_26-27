import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import HeaderEx from "./components/HeaderEx";
import BookCardEx from "./components/BookCardEx";
import CategoryChipsEx from "./components/CategoryChipsEx";
import BookGridEx from "./components/BookGridEx";
import BadgeEx from "./components/BadgeEx";
import FloatingCartButtonEx from "./components/FloatingCartButtonEx";

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <HeaderEx />;
      case 2:
        return <BookCardEx />;
      case 3:
        return <CategoryChipsEx />;
      case 4:
        return <BookGridEx />;
      case 5:
        return <BadgeEx />;
      case 6:
        return <FloatingCartButtonEx />;
      default:
        return <HeaderEx />;
    }
  };

  const tabs = [
    { id: 1, name: "1. Header" },
    { id: 2, name: "2. Book Card" },
    { id: 3, name: "3. Chips" },
    { id: 4, name: "4. Book Grid" },
    { id: 5, name: "5. Badge" },
    { id: 6, name: "6. FAB Cart" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Menu Bài Tập</Text>
      <View style={styles.menuContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tabButton,
                activeTab === tab.id && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab.id)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab.id && styles.activeTabText,
                ]}
              >
                {tab.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  appTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  menuContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  tabButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginRight: 8,
  },
  activeTab: { backgroundColor: "#4f46e5" }, // Màu indigo
  tabText: { color: "#333", fontWeight: "500" },
  activeTabText: { color: "#fff" },
  contentContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 10,
    backgroundColor: "#fff",
  },
});
