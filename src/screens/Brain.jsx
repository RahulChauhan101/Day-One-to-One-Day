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

export default function Brain() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>My Brain</Text>
            <Text style={styles.subtitle}>
              A place to capture ideas, thoughts,{"\n"}
              and inspiration.
            </Text>
          </View>

          <View style={styles.iconRow}>
            <View style={styles.iconBox}>
              <Feather name="search" size={18} />
            </View>
            <View style={styles.iconBox}>
              <Feather name="more-vertical" size={18} />
            </View>
          </View>
        </View>

        {/* INPUT CARD */}
        <View style={styles.card}>
          <Text style={styles.placeholder}>
            Capture an idea before it disappears...
          </Text>

          <View style={styles.row}>
            <TouchableOpacity style={styles.addBtn}>
              <Feather name="plus" size={16} color="#fff" />
              <Text style={styles.addText}>Add Idea</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.voiceBtn}>
              <Feather name="mic" size={16} color="#F35539" />
              <Text style={styles.voiceText}>Voice Note</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FILTERS */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filters}>
            {["All", "Startup Ideas", "Product Ideas", "Strategies", "Random Thoughts", "Learning"].map((item, index) => (
              <View
                key={index}
                style={[
                  styles.filter,
                  index === 0 && styles.activeFilter,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    index === 0 && styles.activeFilterText,
                  ]}
                >
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* SECTION */}
        <Text style={styles.section}>Recent Inspiration</Text>

        {/* CARD 1 */}
        <View style={styles.ideaCard}>
          <Text style={styles.ideaTitle}>
            AI astrology feature for Nakshatra app
          </Text>

          <Text style={styles.ideaDesc}>
            Use AI to generate personalized horoscope insights based on user data and historical patterns.
          </Text>

          <View style={styles.tagRow}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Startup Idea</Text>
            </View>

            <Text style={styles.link}>Linked to: Jarvis</Text>
          </View>
        </View>

        {/* CARD 2 */}
        <View style={styles.ideaCard}>
          <Text style={styles.ideaTitle}>
            Gamified daily habit tracker
          </Text>

          <Text style={styles.ideaDesc}>
            Add an RPG element where completing habits levels up a digital avatar.
          </Text>

          <View style={styles.tagRow}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Product Idea</Text>
            </View>

            <Text style={styles.link}>Linked to: Kliqit</Text>
          </View>
        </View>

      </ScrollView>

      {/* FLOAT BUTTON */}
 <FAB onPress={() => console.log("FAB Clicked")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5EC",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2E2626",
  },

  subtitle: {
    fontSize: 14,
    color: "#8A7F7D",
    marginTop: 4,
  },

  iconRow: {
    flexDirection: "row",
    gap: 10,
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
  },

  placeholder: {
    color: "#8A7F7D",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  addBtn: {
    flexDirection: "row",
    backgroundColor: "#F35539",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    gap: 5,
  },

  addText: {
    color: "#fff",
    fontWeight: "600",
  },

  voiceBtn: {
    flexDirection: "row",
    backgroundColor: "#FFF1EA",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    gap: 5,
  },

  voiceText: {
    color: "#F35539",
    fontWeight: "600",
  },

  filters: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
  },

  filter: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 20,
  },

  activeFilter: {
    backgroundColor: "#F35539",
  },

  filterText: {
    color: "#2E2626",
  },

  activeFilterText: {
    color: "#fff",
  },

  section: {
    margin: 20,
    fontWeight: "600",
    color: "#8A7F7D",
  },

  ideaCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 16,
  },

  ideaTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2E2626",
  },

  ideaDesc: {
    marginTop: 8,
    color: "#8A7F7D",
  },

  tagRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  tag: {
    backgroundColor: "#FFF1EA",
    padding: 6,
    borderRadius: 4,
  },

  tagText: {
    color: "#F35539",
    fontSize: 12,
  },

  link: {
    fontSize: 12,
    color: "#2E2626",
  },

});