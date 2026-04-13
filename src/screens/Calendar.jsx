import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Feather from "@react-native-vector-icons/feather";
import FAB from "../components/FAB";

export default function Calender() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Life Insights</Text>
            <Text style={styles.subtitle}>
              Your progress after 21 days of consistency.
            </Text>
          </View>

          <View style={styles.iconBox}>
            <Feather name="calendar" size={18} />
          </View>
        </View>

        {/* CONSISTENCY */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Consistency Score</Text>

          <View style={styles.row}>
            <View style={styles.circle}>
              <Text style={styles.score}>78%</Text>
            </View>

            <Text style={styles.desc}>
              You completed tasks on 16 out of the last 21 days. Keep it up!
            </Text>
          </View>
        </View>

        {/* AI INSIGHT */}
        <View style={styles.aiCard}>
          <View style={styles.row}>
            <Feather name="zap" size={18} color="#F35539" />
            <Text style={styles.aiTitle}>AI Insight</Text>
          </View>

          <Text style={styles.aiText}>
            Your productivity peaks between 9 AM and 12 PM.
          </Text>
        </View>

        {/* DREAM PROGRESS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dream Progress</Text>

          <View style={styles.progressRow}>
            <Text>Build Jarvis</Text>
            <Text style={styles.percent}>32%</Text>
          </View>
          <View style={styles.barBg}>
            <View style={[styles.barFill, { width: "32%" }]} />
          </View>

          <View style={[styles.progressRow, { marginTop: 10 }]}>
            <Text>Dream Villa Kailash</Text>
            <Text style={styles.percent}>8%</Text>
          </View>
          <View style={styles.barBg}>
            <View style={[styles.barFill, { width: "8%" }]} />
          </View>
        </View>

        {/* MOST PRODUCTIVE */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Most Productive Days</Text>

          <View style={styles.productiveContainer}>
            {[
              { d: "Mon", v: 8 },
              { d: "Tue", v: 12 },
              { d: "Wed", v: 10 },
              { d: "Thu", v: 5 },
              { d: "Fri", v: 7 },
            ].map((item, i) => {
              const isActive = item.v === 12;

              return (
                <View key={i} style={styles.productiveItem}>
                  <View
                    style={{
                      width: 6,
                      height: item.v * 4,
                      backgroundColor: isActive ? "#F35539" : "#EADFD8",
                      borderRadius: 3,
                    }}
                  />

                  <Text
                    style={[
                      styles.productiveValue,
                      isActive && { color: "#F35539" },
                    ]}
                  >
                    {item.v}
                  </Text>

                  <Text style={styles.productiveDay}>{item.d}</Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* FOCUS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Focus Distribution</Text>

          <View style={styles.focusContainer}>


            <View style={styles.legendBox}>
              <View style={styles.legendRow}>
                <View style={[styles.dot, { backgroundColor: "#F35539" }]} />
                <Text style={styles.legendText}>Dream tasks (45%)</Text>
              </View>

              <View style={styles.legendRow}>
                <View style={[styles.dot, { backgroundColor: "#4A90E2" }]} />
                <Text style={styles.legendText}>Work tasks (30%)</Text>
              </View>

              <View style={styles.legendRow}>
                <View style={[styles.dot, { backgroundColor: "#F5A623" }]} />
                <Text style={styles.legendText}>Personal tasks (25%)</Text>
              </View>
            </View>

          </View>
        </View>

        {/* ENERGY GRAPH */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Energy vs Productivity</Text>

          <View style={styles.chart}>
            {[
              { h: 30, c: "#F5EDEE" },
              { h: 50, c: "#2E2626", o: 0.6 },
              { h: 40, c: "#F5EDEE" },
              { h: 80, c: "#F35539", o: 0.9 },
              { h: 60, c: "#F5EDEE" },
              { h: 45, c: "#2E2626", o: 0.6 },
              { h: 90, c: "#F5EDEE" },
              { h: 70, c: "#F35539", o: 0.9 },
              { h: 55, c: "#F5EDEE" },
              { h: 85, c: "#2E2626", o: 0.6 },
            ].map((bar, i) => (
              <View
                key={i}
                style={[
                  styles.newBar,
                  {
                    height: bar.h,
                    backgroundColor: bar.c,
                    opacity: bar.o || 1,
                  },
                ]}
              />
            ))}
          </View>

          <Text style={styles.smallText}>
            You complete more tasks on high-energy days.
          </Text>
        </View>

      </ScrollView>

      {/* FAB */}
<FAB onPress={() => console.log("FAB Clicked")} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF5EC" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  title: { fontSize: 28, fontWeight: "700" },
  subtitle: { color: "#8A7F7D" },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 20,
    borderRadius: 16,
  },

  cardTitle: { fontWeight: "700", marginBottom: 10 },

  row: { flexDirection: "row", gap: 10 },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFF1EA",
    justifyContent: "center",
    alignItems: "center",
  },

  score: { color: "#F35539", fontWeight: "700" },
  desc: { flex: 1, color: "#8A7F7D" },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  percent: { color: "#F35539" },

  barBg: {
    height: 6,
    backgroundColor: "#F5EDEE",
    borderRadius: 4,
    marginTop: 4,
  },

  barFill: {
    height: 6,
    backgroundColor: "#F35539",
    borderRadius: 4,
  },

  productiveContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 12,
    marginTop: 20,
  },

  productiveItem: {
    alignItems: "center",
    gap: 16,
    width: 50,
  },

  productiveValue: {
    fontSize: 12,
    fontWeight: "600",
    color: "#8A7F7D",
  },

  productiveDay: {
    fontSize: 12,
    color: "#8A7F7D",
  },

  focusContainer: {
    alignItems: "center",
    gap: 24,
    marginTop: 16,
  },


  legendBox: { flex: 1, gap: 12 },

  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  legendText: { fontSize: 13, color: "#8A7F7D" },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 3,
  },

  chart: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 20,
    height: 100,
  },

  newBar: {
    width: 20,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },

  smallText: {
    marginTop: 10,
    fontSize: 13,
    color: "#8A7F7D",
  },

  aiCard: {
    margin: 20,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFF1EA",
    borderWidth: 1,
    borderColor: "#F35539",
  },

  aiTitle: { color: "#F35539", fontWeight: "700" },
  aiText: { marginTop: 8 },

});