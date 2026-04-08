import { router } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProgressScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Your Progress</Text>
        <Text style={styles.subtitle}>Track your learning progress</Text>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Completed Phrases</Text>
          <Text style={styles.summaryValue}>18/50</Text>

          <View style={styles.progressBarBg}>
            <View style={styles.progressBarFill} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>By Category</Text>

        {[
          ["Greetings", "80%"],
          ["Transportation", "50%"],
          ["Food & Dining", "60%"],
          ["Directions", "30%"],
          ["Emergency", "20%"],
        ].map(([name, value]) => (
          <View key={name} style={styles.rowCard}>
            <Text style={styles.rowTitle}>{name}</Text>
            <Text style={styles.rowValue}>{value}</Text>
          </View>
        ))}

        <View style={styles.tabBar}>
          <Text style={styles.inactiveTab} onPress={() => router.push("/")}>
            Categories
          </Text>
          <Text style={styles.activeTab}>Progress</Text>
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
  summaryCard: {
    backgroundColor: "#E4DAFF",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
  },
  summaryLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2B1F66",
  },
  summaryValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6C4DFF",
    textAlign: "center",
    marginVertical: 12,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: "#DDD7F3",
    borderRadius: 8,
  },
  progressBarFill: {
    width: "40%",
    height: 8,
    backgroundColor: "#6C4DFF",
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2B1F66",
    marginBottom: 12,
  },
  rowCard: {
    backgroundColor: "#EDE7FF",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2B1F66",
  },
  rowValue: {
    fontSize: 14,
    color: "#7A7A8C",
    fontWeight: "500",
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
