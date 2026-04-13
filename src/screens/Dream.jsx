import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Feather from "@react-native-vector-icons/feather";
import FAB from "../components/FAB";

export default function Dreams() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>My Dreams</Text>
            <Text style={styles.subtitle}>
              Your big goals that guide your daily actions.
            </Text>
          </View>

          <View style={styles.searchBox}>
            <Feather name="search" size={18} />
          </View>
        </View>

        {/* FILTERS */}
        <View style={styles.filterRow}>
          {["All Dreams", "Active", "Completed"].map((item, i) => (
            <View
              key={i}
              style={[styles.filter, i === 0 && styles.activeFilter]}
            >
              <Text
                style={[
                  styles.filterText,
                  i === 0 && styles.activeFilterText,
                ]}
              >
                {item}
              </Text>
            </View>
          ))}
        </View>

        {/* CARD */}
        <DreamCard
          title='Build company "Jarvis"'
          desc="Create a technology company building multiple innovative apps."
          progress={32}
          tag="HIGH"
          actions="5 Actions • 24 Tasks"
          support="Supports 'Kliqit'"
        />

        <DreamCard
          title='Build dream villa "Kailash"'
          desc="Design and construct a modern, sustainable smart home in the mountains."
          progress={15}
          tag="MEDIUM"
          actions="2 Actions • 8 Tasks"
        />

        <DreamCard
          title="Featured in Forbes 30 Under 30"
          desc="Achieve industry recognition for innovative contributions to technology."
          progress={45}
          tag="HIGH"
          actions="8 Actions • 42 Tasks"
        />

      </ScrollView>

      {/* FLOAT BUTTON */}
<FAB onPress={() => console.log("FAB Clicked")} />

  
    </SafeAreaView>
  );
}

const DreamCard = ({ title, desc, progress, tag, actions, support }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <View style={styles.iconSmall}>
          <Feather name="briefcase" size={14} />
        </View>

        <Text
          style={[
            styles.tag,
            tag === "HIGH" ? styles.high : styles.medium,
          ]}
        >
          {tag}
        </Text>
      </View>

      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDesc}>{desc}</Text>

      {support && (
        <Text style={styles.support}>{support}</Text>
      )}

      {/* Progress */}
      <View style={styles.progressRow}>
        <Text style={styles.progressLabel}>Progress</Text>
        <Text style={styles.progressLabel}>{progress}%</Text>
      </View>

      <View style={styles.progressBar}>
        <View
          style={[styles.progressFill, { width: `${progress}%` }]}
        />
      </View>

      <Text style={styles.actions}>{actions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF4EC",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2E2626",
  },

  subtitle: {
    fontSize: 13,
    color: "#8A7F7D",
    marginTop: 4,
  },

  searchBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  filterRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 10,
  },

  filter: {
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  activeFilter: {
    backgroundColor: "#F35539",
  },

  filterText: {
    fontSize: 12,
    color: "#2E2626",
  },

  activeFilterText: {
    color: "#fff",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 50,
    padding: 16,
    borderRadius: 18,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#FFF1EA",
    justifyContent: "center",
    alignItems: "center",
  },

  tag: {
    fontSize: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    fontWeight: "600",
  },

  high: {
    backgroundColor: "#FFE5E0",
    color: "#F35539",
  },

  medium: {
    backgroundColor: "#FFF3D9",
    color: "#F59E0B",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 10,
    color: "#2E2626",
  },

  cardDesc: {
    fontSize: 13,
    color: "#8A7F7D",
    marginTop: 6,
  },

  support: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 6,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  progressLabel: {
    fontSize: 12,
    color: "#8A7F7D",
  },

  progressBar: {
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    marginTop: 5,
  },

  progressFill: {
    height: 6,
    backgroundColor: "#F35539",
    borderRadius: 10,
  },

  actions: {
    fontSize: 12,
    color: "#8A7F7D",
    marginTop: 8,
  },





  tabItem: {
    alignItems: "center",
  },

  tabText: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },
});