import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Top Section */}
      <View style={styles.topSection}>
        <Image
          source={require("../assets/Container (1).png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Card */}
      <View style={styles.card}>
        <Text style={styles.title}>
          Every Big Dream Starts {"\n"}With One Day
        </Text>

        <Text style={styles.subtitle}>
          Stay consistent with your habits, tasks, and goals.
          Small daily progress leads to extraordinary results.
        </Text>

        {/* Dots */}
        <View style={styles.dots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Your Journey</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE3DA",
  },

  topSection: {
    width: "100%",
    height: width * 1.4, // responsive height
    paddingTop: 70,
    paddingHorizontal: 24,
    paddingBottom: 55,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: width * 0.7,
    height: width * 0.7,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,

    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 32,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -4 },
    shadowRadius: 24,
    elevation: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 13,
    color: "#777",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 24,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  activeDot: {
    width: 16,
    backgroundColor: "#FF5A3C",
  },

  button: {
    backgroundColor: "#FF5A3C",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});