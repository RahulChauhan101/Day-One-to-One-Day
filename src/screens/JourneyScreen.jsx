import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Feather from "@react-native-vector-icons/feather";

const OPTIONS = [
  {
    title: "Entrepreneur",
    subtitle: "Building startups or businesses",
    icon: require("../assets/icons/SVG.png"),
  },
  {
    title: "Competitive Exam Student",
    subtitle: "Preparing for major exams",
    icon: require("../assets/icons/SVG2.png"),
  },
  {
    title: "Athlete",
    subtitle: "Training for professional performance",
    icon: require("../assets/icons/SVG3.png"),
  },
  {
    title: "Professional",
    subtitle: "Growing career and productivity",
    icon: require("../assets/icons/SVG4.png"),
  },
  {
    title: "Personal Growth",
    subtitle: "Building better habits and lifestyle",
    icon: require("../assets/icons/SVG5.png"),
  },
];

export default function JourneyScreen({ navigation }) {
  const [selected, setSelected] = useState(null);
  const [pressed, setPressed] = useState(false);

  const goNext = (index) => {
    navigation.navigate("Next", {
      selectedItem: OPTIONS[index],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerTop}>

            <TouchableOpacity
              style={[
                styles.backBtn,
                pressed && styles.backBtnActive,
              ]}
              onPressIn={() => setPressed(true)}
              onPressOut={() => setPressed(false)}
              onPress={() => navigation.goBack()}
            >
              <Feather
                name="arrow-left"
                size={20}
                color={pressed ? "#fff" : "#2E2626"}
              />
            </TouchableOpacity>

            <Text style={styles.progress}>STEP 2 OF 5</Text>
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
            const isSelected = selected === index;

            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.85}
                onPress={() => {
                  setSelected(index);
                }}
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
              </TouchableOpacity>
            );
          })}
        </View>

      </ScrollView>

      {/* FOOTER BUTTON */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.button,
            selected === null && { opacity: 0.5 },
          ]}
          disabled={selected === null}
          onPress={() => goNext(selected)}
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
    justifyContent: "space-between",
    alignItems: "center",
  },

  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
  },

  backBtnActive: {
    backgroundColor: "#F35539",
    transform: [{ scale: 1.1 }],
  },

  progress: {
    fontSize: 14,
    fontWeight: "800",
    color: "#9A8F8C",
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
    elevation: 3,
  },

  selectedOption: {
    borderWidth: 2,
    borderColor: "#f35539",
    backgroundColor: "#FFF1EE",
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
    width: 36,
    height: 36,
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
    backgroundColor: "#F35539",
  },

  footer: {
    padding: 20,
    backgroundColor: "#FFF5EC",
  },

  button: {
    height: 56,
    borderRadius: 12,
    backgroundColor: "#F35539",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});