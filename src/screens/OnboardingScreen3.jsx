import React from "react";
import OnboardingLayout from "../components/Onboarding/OnboardingLayout";

const OnboardingScreen3 = ({ navigation }) => {
  return (
    <OnboardingLayout
      image={require("../assets/Container3.png")}
      title="Small Wins Every Day"
      subtitle="Track tasks, build powerful habits, and watch your progress grow day by day."
      activeIndex={2}
      buttonText="Continue"
      onPress={() => navigation.replace("Login")}
    />
  );
};

export default OnboardingScreen3;