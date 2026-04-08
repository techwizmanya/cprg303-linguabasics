import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const phrases = [
  {
    id: "G01",
    icon: "👋",
    phrase: "Hello",
    translation: "Bonjour",
    status: "Mastered",
    meaning: "A common greeting used to start a conversation.",
  },
  {
    id: "G02",
    icon: "☀️",
    phrase: "Good Morning",
    translation: "Bon Matin",
    status: "In Progress",
    meaning: "A polite greeting used in the morning.",
  },
  {
    id: "G03",
    icon: "🙏",
    phrase: "Thank You",
    translation: "Merci",
    status: "New",
    meaning: "Used to express gratitude.",
  },
  {
    id: "G04",
    icon: "👋",
    phrase: "Goodbye",
    translation: "Au Revoir",
    status: "Mastered",
    meaning: "Used when leaving someone.",
  },
  {
    id: "G05",
    icon: "😊",
    phrase: "How are you?",
    translation: "Ça va?",
    status: "New",
    meaning: "Used to ask someone how they are doing.",
  },
];

export default function PhraseListScreen() {
  const { category } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{category || "Greetings"}</Text>
        <Text style={styles.subtitle}>Select a phrase to view details</Text>

        <View style={styles.searchBar}>
          <Text style={styles.searchText}>🔍 Search phrases...</Text>
        </View>

        <Text style={styles.sectionTitle}>Phrases</Text>

        {phrases.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/phrase-detail",
                params: {
                  id: item.id,
                  phrase: item.phrase,
                  translation: item.translation,
                  meaning: item.meaning,
                  icon: item.icon,
                },
              })
            }
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>
                {item.icon} {item.phrase} / {item.translation}
              </Text>
              <Text style={styles.cardSubtitle}>Status: {item.status}</Text>
              <Text style={styles.code}>{item.id}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.tabBar}>
          <Text style={styles.activeTab} onPress={() => router.push("/")}>
            Categories
          </Text>
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
    padding: 16,
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
  code: {
    fontSize: 12,
    color: "#8A88A0",
    marginTop: 4,
  },
  arrow: {
    fontSize: 22,
    color: "#6C4DFF",
    fontWeight: "bold",
    marginLeft: 10,
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
