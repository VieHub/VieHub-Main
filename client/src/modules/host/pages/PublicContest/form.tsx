import React, { useState } from "react";
import ContestForm from "./components/ContestForm";
import ContestForm2 from "./components/ContestForm2";
import Payment from "./components/payment";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formDataStep1, setFormDataStep1] = useState<{ [key: string]: any }>({});
  const [formDataStep2, setFormDataStep2] = useState<{ [key: string]: any }>({});

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFormData1 = (data: any) => {
    setFormDataStep1(data);
  };

  const handleFormData2 = (data: any) => {
    setFormDataStep2(data);
    handleSubmit({ ...formDataStep1, ...data }); // Merge form data from both steps
  };

  const handleSubmit = (mergedData: any) => {
    console.log(mergedData); // Log the merged form data
    // Perform any further actions such as submitting the data to a server
  };

  return (
    <div className="h-full w-full">
      <div>
        {step === 1 && <ContestForm onNextStep={nextStep} onFormData={handleFormData1} />}
        {step === 2 && <ContestForm2 onNextStep={nextStep} onPrevStep={prevStep} onFormData={handleFormData2} />}
        {step === 3 && <Payment onPrevStep={prevStep} />}
      </div>
    </div>
  );
};

export default MultiStepForm;
