import React, { useState } from "react";
import ContestForm from "./components/ContestForm";
import ContestForm2 from "./components/ContestForm2";
import Payment from "./components/payment";
import { CreateContestData } from "@/types/apiSchemas";
import { useCreateContest } from "@/hooks/useCreateContest";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formDataStep1, setFormDataStep1] = useState<{ [key: string]: any }>(
    {},
  );
  // const [formDataStep2, setFormDataStep2] = useState<{ [key: string]: any }>({});
  const createContest = useCreateContest(); // Call the useCreateContest hook

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
    // setFormDataStep2(data);
    handleSubmit({ ...formDataStep1, ...data }); // Merge form data from both steps
  };

  const handleSubmit = (mergedData: CreateContestData) => {
    console.log(mergedData); // Log the merged form data
    // Use the mutation function to submit the data
    createContest.mutate(mergedData, {
      onSuccess: (data) => {
        console.log("Contest created successfully", data);
        // Optionally move to the next step or handle the response further
        // nextStep(); // For example, move to the payment step or a success message
      },
      onError: (error) => {
        console.error("Failed to create contest", error);
        // Handle errors, maybe show an error message to the user
      },
    });
  };
  return (
    <div className="h-full w-full">
      <div>
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
        {step === 3 && <Payment onPrevStep={prevStep} />}
      </div>
    </div>
  );
};

export default MultiStepForm;
