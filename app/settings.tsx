import { router } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const items = [
  {
    title: "🔔 Notifications",
    desc: "Manage alerts and reminders",
  },
  {
    title: "🌙 Dark Mode",
    desc: "Switch between light and dark theme",
  },
  {
    title: "🌍 Language",
    desc: "Choose your learning language",
  },
  {
    title: "ℹ️ About App",
    desc: "View app details and information",
  },
];

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Manage your preferences</Text>

        {items.map((item) => (
          <View key={item.title} style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>
        ))}

        <View style={styles.tabBar}>
          <Text style={styles.inactiveTab} onPress={() => router.push("/")}>
            Categories
          </Text>
          <Text
            style={styles.inactiveTab}
            onPress={() => router.push("/progress")}
          >
            Progress
          </Text>
          <Text style={styles.activeTab}>Settings</Text>
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#EDE7FF",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2B1F66",
  },
  cardDesc: {
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
