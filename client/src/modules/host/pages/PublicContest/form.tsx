import React, { useState } from "react";
import ContestForm from "./components/ContestForm";
import ContestForm2 from "./components/ContestForm2";
import Payment from "./components/payment";
import PopUpContestInfo from "./components/popUpContestInfo"; // Import your pop-up component
import { CreateContestData, CreateContestDataWithAI } from "@/types/apiSchemas";
import {
  useCreateContestWithAI,
  useCreateContest,
} from "@/hooks/useCreateContest";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formDataStep1, setFormDataStep1] = useState<{ [key: string]: any }>(
    {},
  );
  const [formDataStep2, setFormDataStep2] = useState<{ [key: string]: any }>(
    {},
  );
  const [loading, setLoading] = useState<boolean>(false); // State to manage loading indicator
  const [contestData, setContestData] = useState<CreateContestData | null>(
    null,
  ); // State to store contest data

  const previewContest = useCreateContestWithAI();
  const createContest = useCreateContest();
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false); // State to manage pop-up visibility

  const nextStep = () => {
    if (step === 2) {
      // Start loading and call handleSubmit when moving to step 2
      setLoading(true);
      handleSubmit({
        ...formDataStep1,
        ...formDataStep2,
      } as CreateContestDataWithAI);
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

  const handleSubmit = (mergedData: CreateContestDataWithAI) => {
    previewContest.mutate(mergedData, {
      onSuccess: (data) => {
        setLoading(false);
        setContestData(data); // Set the contest data to be displayed in the pop-up
        setIsPopUpVisible(true); // Show the pop-up

        setStep((prevStep) => prevStep + 1);
      },
      onError: (error) => {
        setLoading(false);
        console.error("Failed to create contest", error);
      },
    });
  };

  const handleConfirm = () => {
    console.log(contestData);
    if (contestData) {
      setLoading(true);
      createContest.mutate(contestData, {
        onSuccess: (data) => {
          setLoading(false);
          setContestData(null); // Close the pop-up
          alert("Contest confirmed successfully!");
          // You can add any additional logic here after the contest is confirmed
        },
        onError: (error) => {
          setLoading(false);
          console.error("Failed to create contest", error);
        },
      });
    }
  };

  const closePopUp = () => {
    // setContestData(null);
    setIsPopUpVisible(false); // Show the pop-up
  };

  return (
    <div className="relative h-full w-full">
      <div className={`${isPopUpVisible ? "blur-sm" : ""}`}>
        {step === 1 && (
          <ContestForm onNextStep={nextStep} onFormData={handleFormData1} />
        )}
        {step === 2 && (
          <ContestForm2
            onNextStep={nextStep} // Call nextStep directly
            onPrevStep={prevStep}
            onFormData={handleFormData2}
          />
        )}
        {step === 3 && (
          <Payment onPrevStep={prevStep} onPaymentComplete={handleConfirm} />
        )}
      </div>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      )}
      {contestData && isPopUpVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <PopUpContestInfo
            onClose={closePopUp}
            contestData={contestData} // Pass contest data to the pop-up
            loading={loading} // Pass loading state to the pop-up
          />
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
