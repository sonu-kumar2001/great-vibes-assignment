import React, { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";

export default function MultistepJobForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const sectionStyle = {
    height: "564px",
    width: "577px",
    padding: "32px",
    backgroundColor: "#FFFFFF",
    borderWidth: "1px",
    borderColor: "#E6E6E6",
    borderRadius: "0.375rem",
  };
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      {currentStep === 1 && (
        <Step1 nextStep={nextStep} sectionStyle={sectionStyle} />
      )}
      {currentStep === 2 && <Step2 sectionStyle={sectionStyle} />}
    </>
  );
}
