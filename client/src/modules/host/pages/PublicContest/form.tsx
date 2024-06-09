import React, { useState } from "react";
import ContestForm from "./components/ContestForm";
import ContestForm2 from "./components/ContestForm2";
import Payment from "./components/payment";
import PopUpContestInfo from "./components/popUpContestInfo";
import { CreateContestData, CreateContestDataWithAI } from "@/types/apiSchemas";
import { useCreateContestWithAI, useCreateContest } from "@/hooks/useCreateContest";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formDataStep1, setFormDataStep1] = useState<{ [key: string]: any }>({});
  const [formDataStep2, setFormDataStep2] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [contestData, setContestData] = useState<CreateContestData | null>(null);

  const previewContest = useCreateContestWithAI();
  const createContest = useCreateContest();
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);

  const nextStep = () => {
    if (step === 2) {
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
        setContestData(data);
        setIsPopUpVisible(true);
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
          setContestData(null);
          alert("Contest confirmed successfully!");
        },
        onError: (error) => {
          setLoading(false);
          console.error("Failed to create contest", error);
        },
      });
    }
  };

  const closePopUp = () => {
    setIsPopUpVisible(false);
  };

  const handleSave = (updatedData: CreateContestData) => {
    setContestData(updatedData);
  };

  return (
    <div className="relative h-full w-full">
      <div className={`${isPopUpVisible ? "blur-sm" : ""}`}>
        {step === 1 && (
          <ContestForm onNextStep={nextStep} onFormData={handleFormData1} />
        )}
        {step === 2 && (
          <ContestForm2
            onNextStep={nextStep}
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
            contestData={contestData}
            loading={loading}
            onSave={handleSave}
          />
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
