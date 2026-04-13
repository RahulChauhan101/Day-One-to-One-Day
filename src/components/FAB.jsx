import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Feather from "@react-native-vector-icons/feather";

const FAB = ({
  icon = "plus",
  onPress,
  bottom = 10,
  right = 20,
  size = 60,
  bgColor = "#F35539",
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.fab,
        {
          bottom,
          right,
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: bgColor,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Feather name={icon} size={28} color="#fff" />
    </TouchableOpacity>
  );
};

export default FAB;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",

    justifyContent: "center",
    alignItems: "center",

    // iOS shadow
    shadowColor: "#F35539",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 24,

    // Android
    elevation: 12,

    zIndex: 100,
  },
});