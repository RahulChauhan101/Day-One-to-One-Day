import React from "react";
import OnboardingLayout from "../components/Onboarding/OnboardingLayout";

const OnboardingScreen2 = ({ navigation }) => {
  return (
    <OnboardingLayout
      image={require("../assets/Container2.png")}
      title="Discipline Builds Success"
      subtitle="Plan your day, track your habits, and stay accountable.\nYour time and discipline shape your future."
      activeIndex={1}
      buttonText="Continue"
      onPress={() => navigation.navigate("Onboarding3")}
    />
  );
};

export default OnboardingScreen2;