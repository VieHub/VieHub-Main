import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContestForm from "./components/ContestForm";
import ContestForm2 from "./components/ContestForm2";
import Payment from "./components/payment";
import PopUpContestInfo from "./components/popUpContestInfo";
import { CreateContestData, CreateContestDataWithAI } from "@/types/apiSchemas";
import { useCreatePrivateContest } from "@/hooks/private-contests/useCreatePrivateContest";
import { useCreateContestWithAI } from "@/hooks/contests/useCreateContest";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formDataStep1, setFormDataStep1] = useState<{ [key: string]: any }>({});
  const [formDataStep2, setFormDataStep2] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [contestData, setContestData] = useState<CreateContestData | null>(null);
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [confirmationMessage, setConfirmationMessage] = useState<string>("");

  const navigate = useNavigate();
  const previewContest = useCreateContestWithAI();
  const createContest = useCreatePrivateContest();

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
    if (contestData) {
      setLoading(true);
      createContest.mutate(contestData, {
        onSuccess: (data) => {
          setLoading(false);
          setContestData(null);
          const accessLink = `${window.location.origin}/contest/${data.id}/${data.access_key}`;
          setConfirmationMessage(
            `Contest confirmed successfully! Here is your access link: ${accessLink}`
          );
          setIsConfirmed(true);
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
      {!isConfirmed && (
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
      )}
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
      {isConfirmed && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "#113B46",
            fontSize: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#113B46"
              style={{ width: "2rem", height: "2rem", marginRight: "1rem" }}
            >
              <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm-1.122 17.467l-4.595-4.597 1.419-1.416 3.176 3.174L18.278 6l1.417 1.416-8.817 10.05z" />
            </svg>
            <span>Thank you for hosting the contest!</span>
          </div>
          <p>{confirmationMessage}</p>
          <button
            onClick={() => navigate("/contest")}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#113B46",
              color: "white",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
            }}
          >
            Go to Contests
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
