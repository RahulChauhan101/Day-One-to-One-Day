import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Feather from "@react-native-vector-icons/feather";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function BottomTab() {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: "Home", icon: "home" },
    { name: "Dreams", icon: "target" },
    { name: "Brain", icon: "cpu" },
    { name: "Calendar", icon: "calendar" },
    { name: "Profile", icon: "user" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = route.name === tab.name;

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("MainApp", {
                screen: tab.name,
              })
            }
          >
            <Feather
              name={tab.icon}
              size={22}
              color={isActive ? "#F35539" : "#8A7B78"}
            />
            <Text
              style={[
                styles.text,
                { color: isActive ? "#F35539" : "#8A7B78" },
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
  },

  tab: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 10,
    fontWeight: "600",
    marginTop: 4,
  },
});