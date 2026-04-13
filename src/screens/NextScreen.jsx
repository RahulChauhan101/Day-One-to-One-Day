import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Feather from "@react-native-vector-icons/feather";

const OPTIONS = [
  {
    title: "Entrepreneur",
    subtitle: "Building startups or businesses",
    icon: require("../assets/icons/Background1.png"),
  },
  {
    title: "Competitive Exam Student",
    subtitle: "Preparing for major exams",
    icon: require("../assets/icons/Background2.png"),
  },
  {
    title: "Athlete",
    subtitle: "Training for professional performance",
    icon: require("../assets/icons/Background3.png"),
  },
  {
    title: "Professional",
    subtitle: "Growing career and productivity",
    icon: require("../assets/icons/Background4.png"),
  },
  {
    title: "Personal Growth",
    subtitle: "Building better habits and lifestyle",
    icon: require("../assets/icons/Background5.png"),
  },
];

export default function NextScreen({ route, navigation }) {
  const { selectedItem } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerTop}>

            {/* BACK BUTTON */}
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={20} color="#2E2626" />
            </TouchableOpacity>

            <Text style={styles.progress}>STEP 2 OF 6</Text>
            <View style={{ width: 40 }} />

          </View>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* TITLE */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            What best describes your journey?
          </Text>
        </View>

        {/* OPTIONS */}
        <View style={styles.list}>
          {OPTIONS.map((item, index) => {
            const isSelected = item.title === selectedItem.title;

            return (
              <View
                key={index}
                style={[
                  styles.option,
                  isSelected && styles.selectedOption,
                ]}
              >
                {/* ICON */}
                <View
                  style={[
                    styles.iconBox,
                    isSelected && styles.selectedIconBox,
                  ]}
                >
                  <Image source={item.icon} style={styles.icon} />
                </View>

                {/* TEXT */}
                <View style={styles.textContainer}>
                  <Text style={styles.optionTitle}>
                    {item.title}
                  </Text>
                  <Text style={styles.optionSubtitle}>
                    {item.subtitle}
                  </Text>
                </View>

                {/* RADIO */}
                <View
                  style={[
                    styles.radioOuter,
                    isSelected && styles.radioOuterActive,
                  ]}
                >
                  {isSelected && (
                    <Feather name="check" size={12} color="#FFF5EC" />
                  )}
                </View>
              </View>
            );
          })}
        </View>

      </ScrollView>
            {/* FOOTER */}
            <View style={styles.footer}>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                android_ripple={{ color: "#ffffff30" }}
                onPress={() =>
                  navigation.navigate("Goal", {
                    selectedItem: selectedItem,
                  })
                }
              >
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5EC",
  },

  header: {
    padding: 24,
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
  },

  progress: {
    fontSize: 14,
    fontWeight: "800",
    color: "#9A8F8C",
    letterSpacing: 1,
  },

  progressBar: {
    height: 6,
    backgroundColor: "#00000014",
    borderRadius: 4,
    marginTop: 12,
  },

  progressFill: {
    width: "40%",
    height: "100%",
    backgroundColor: "#F35539",
    borderRadius: 4,
  },

  titleContainer: {
    paddingHorizontal: 24,
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2E2626",
  },

  list: {
    paddingHorizontal: 20,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    marginBottom: 14,
    borderRadius: 10,
    backgroundColor: "#fff",

    shadowColor: "#2E2626",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 3,
  },

  selectedOption: {
    borderWidth: 2,
    borderColor: "#f35539eb",
    backgroundColor: "#FFF1EE",

    shadowColor: "#F35539",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  iconBox: {
    width: 48,
    height: 48,
    padding: 30,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(46,38,38,0.05)",
  },

  selectedIconBox: {
    backgroundColor: "rgba(243,85,57,0.1)",
  },

  icon: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },

  textContainer: {
    flex: 1,
    marginLeft: 10,
  },

  optionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2E2626",
  },

  optionSubtitle: {
    fontSize: 15,
    color: "#9A8F8C",
    marginTop: 4,
  },

  radioOuter: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  radioOuterActive: {
    borderColor: "#FFF1EE",
    backgroundColor: "#F35539",
  },
    footer: {
    padding: 20,
    paddingBottom: 25,
    backgroundColor: "#FFF5EC",
  },

  button: {
    height: 56,
    borderRadius: 12,
    backgroundColor: "#F35539",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    overflow: "hidden",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});