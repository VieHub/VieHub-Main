import React, { useState } from "react";
import ContestForm from "./components/ContestForm";
import ContestForm2 from "./components/ContestForm2";
import Payment from "./components/payment";
import PopUpContestInfo from "./components/popUpContestInfo"; // Import your pop-up component
import { CreateContestData } from "@/types/apiSchemas";
import { useCreateContest } from "@/hooks/useCreateContest";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formDataStep1, setFormDataStep1] = useState<{ [key: string]: any }>({});
  const [formDataStep2, setFormDataStep2] = useState<{ [key: string]: any }>({});
  const [showPopUp, setShowPopUp] = useState<boolean>(false); // State to manage pop-up visibility
  const createContest = useCreateContest();

  const nextStep = () => {
    if (step === 2) {
      setShowPopUp(true);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFormData1 = (data: any) => {
    setFormDataStep1(data);
  };

  const handleFormData2 = (data: any) => {
    setFormDataStep2(data);
  };

  const handleSubmit = (mergedData: CreateContestData) => {
    console.log(mergedData);
    createContest.mutate(mergedData, {
      onSuccess: (data) => {
        console.log("Contest created successfully", data);
        setShowPopUp(false);
        setStep((prevStep) => prevStep + 1);
      },
      onError: (error) => {
        console.error("Failed to create contest", error);
      },
    });
  };

  const closePopUp = () => {
    setShowPopUp(false); // Function to close the pop-up
  };

  return (
    <div className="relative h-full w-full">
      <div className={`${showPopUp ? "blur-sm" : ""}`}>
        {step === 1 && <ContestForm onNextStep={nextStep} onFormData={handleFormData1} />}
        {step === 2 && (
          <ContestForm2
            onNextStep={() => setShowPopUp(true)} // Show the pop-up before moving to the next step
            onPrevStep={prevStep}
            onFormData={handleFormData2}
          />
        )}
        {step === 3 && <Payment onPrevStep={prevStep} />}
      </div>
      {showPopUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <PopUpContestInfo
            onClose={closePopUp}
            onConfirm={() => {
              // Asserting types to match CreateContestData
              handleSubmit({ ...formDataStep1, ...formDataStep2 } as CreateContestData);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
