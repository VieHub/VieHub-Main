import React, { useState } from "react";
import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
import ContestForm from "./components/ContestForm";
import ContestForm2 from "./components/ContestForm2";
import Payment from "./components/payment";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="h-full w-full">
      <Header />
      <div>
        {step === 1 && <ContestForm onNextStep={nextStep} />}
        {step === 2 && <ContestForm2 onNextStep={nextStep} onPrevStep={prevStep} />}
        {step === 3 && <Payment onPrevStep={prevStep} />}
      </div>
      <Footer />
    </div>
  );
};

export default MultiStepForm;
