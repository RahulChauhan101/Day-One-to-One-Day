import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const OnboardingLayout = ({
  image,
  title,
  subtitle,
  activeIndex,
  onPress,
  buttonText,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* IMAGE */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>

      {/* BOTTOM CARD */}
      <View style={styles.bottomContainer}>
        
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>{subtitle}</Text>

        {/* DOTS */}
        <View style={styles.dots}>
          {[0, 1, 2, 3].map((i) => (
            <View
              key={i}
              style={i === activeIndex ? styles.activeDot : styles.dot}
            />
          ))}
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.btnText}>{buttonText}</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default OnboardingLayout;

const COLORS = {
  primary: "#F35539",
  background: "#FFF5EC",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  imageContainer: {
    height: "60%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },

  image: {
    width: 327,
    height: 400,
    resizeMode: "contain",
  },

  bottomContainer: {
    height: "40%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 25,
    elevation: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    color: "#2E2626",
  },

  subtitle: {
    textAlign: "center",
    marginTop: 10,
    color: "#6B6B6B",
    fontSize: 15,
    lineHeight: 22,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  dot: {
    width: 8,
    height: 8,
    backgroundColor: "#E5E5E5",
    marginHorizontal: 4,
    borderRadius: 4,
  },

  activeDot: {
    width: 24,
    height: 8,
    backgroundColor: COLORS.primary,
    marginHorizontal: 4,
    borderRadius: 4,
  },

  button: {
    width: "100%",
    height: 56,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    elevation: 6,
  },

  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
  },
});