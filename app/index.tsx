import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  { id: "c1", name: "Greetings", icon: "👋" },
  { id: "c2", name: "Transportation", icon: "🚌" },
  { id: "c3", name: "Food & Dining", icon: "🍽️" },
  { id: "c4", name: "Directions", icon: "🧭" },
  { id: "c5", name: "Emergency", icon: "🚨" },
];

export default function CategoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>LinguaBasics</Text>
        <Text style={styles.subtitle}>
          Learn essential phrases for daily communication
        </Text>

        <View style={styles.searchBar}>
          <Text style={styles.searchText}>🔍 Search categories...</Text>
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>

        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/phrase-list",
                params: { category: item.name },
              })
            }
          >
            <View>
              <Text style={styles.cardTitle}>
                {item.icon} {item.name}
              </Text>
              <Text style={styles.cardSubtitle}>10 phrases</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.tabBar}>
          <Text style={styles.activeTab}>Categories</Text>
          <Text
            style={styles.inactiveTab}
            onPress={() => router.push("/progress")}
          >
            Progress
          </Text>
          <Text
            style={styles.inactiveTab}
            onPress={() => router.push("/settings")}
          >
            Settings
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7FF",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2B1F66",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#7A7A8C",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  searchBar: {
    backgroundColor: "#EDE7FF",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 16,
  },
  searchText: {
    color: "#7A7A8C",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2B1F66",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#EDE7FF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2B1F66",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#7A7A8C",
    marginTop: 6,
  },
  arrow: {
    fontSize: 22,
    color: "#6C4DFF",
    fontWeight: "bold",
  },
  tabBar: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  activeTab: {
    color: "#6C4DFF",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  inactiveTab: {
    color: "#8E8E9C",
    fontSize: 14,
    fontWeight: "500",
  },
});
