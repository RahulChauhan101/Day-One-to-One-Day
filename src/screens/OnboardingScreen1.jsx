import React from "react";
import OnboardingLayout from "../components/Onboarding/OnboardingLayout";

const OnboardingScreen1 = ({ navigation }) => {
  return (
    <OnboardingLayout
      image={require("../assets/Container1.png")}
      title={"Every Big Dream Starts\nWith One Day"}
      subtitle={
        "Stay consistent with your habits, tasks, and\n" +
        "goals. Small daily progress leads to\n" +
        "extraordinary results."
      }
      activeIndex={0}
      buttonText="Start Your Journey"
      onPress={() => navigation.navigate("Onboarding2")}
    />
  );
};

export default OnboardingScreen1;