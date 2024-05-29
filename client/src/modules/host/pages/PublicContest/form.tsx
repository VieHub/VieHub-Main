// import React, { useState } from "react";
// import ContestForm from "./components/ContestForm";
// import ContestForm2 from "./components/ContestForm2";
// import Payment from "./components/payment";
// import PopUpContestInfo from "./components/popUpContestInfo"; // Import your pop-up component
// import { CreateContestData } from "@/types/apiSchemas";
// import {
//   useCreateContest,
//   useCreateContestWithAI,
// } from "@/hooks/useCreateContest";

// const MultiStepForm: React.FC = () => {
//   const [step, setStep] = useState<number>(1);
//   const [formDataStep1, setFormDataStep1] = useState<{ [key: string]: any }>(
//     {},
//   );
//   const [formDataStep2, setFormDataStep2] = useState<{ [key: string]: any }>(
//     {},
//   );
//   const [showPopUp, setShowPopUp] = useState<boolean>(false); // State to manage pop-up visibility
//   const createContest = useCreateContestWithAI();

//   const nextStep = () => {
//     if (step === 2) {
//       setShowPopUp(true);
//     } else {
//       setStep((prevStep) => prevStep + 1);
//     }
//   };

//   const prevStep = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   const handleFormData1 = (data: any) => {
//     setFormDataStep1(data);
//   };

//   const handleFormData2 = (data: any) => {
//     setFormDataStep2(data);
//   };

//   const handleSubmit = (mergedData: CreateContestData) => {
//     console.log(mergedData);
//     createContest.mutate(mergedData, {
//       onSuccess: (data) => {
//         console.log("Contest created successfully", data);
//         setShowPopUp(false);
//         setStep((prevStep) => prevStep + 1);
//       },
//       onError: (error) => {
//         console.error("Failed to create contest", error);
//       },
//     });
//   };

//   const closePopUp = () => {
//     setShowPopUp(false); // Function to close the pop-up
//   };

//   return (
//     <div className="relative h-full w-full">
//       <div className={`${showPopUp ? "blur-sm" : ""}`}>
//         {step === 1 && (
//           <ContestForm onNextStep={nextStep} onFormData={handleFormData1} />
//         )}
//         {step === 2 && (
//           <ContestForm2
//             onNextStep={() => setShowPopUp(true)} // Show the pop-up before moving to the next step
//             onPrevStep={prevStep}
//             onFormData={handleFormData2}
//           />
//         )}
//         {step === 3 && <Payment onPrevStep={prevStep} />}
//       </div>
//       {showPopUp && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
//           <PopUpContestInfo
//             onClose={closePopUp}
//             onConfirm={() => {
//               // Asserting types to match CreateContestData
//               handleSubmit({
//                 ...formDataStep1,
//                 ...formDataStep2,
//               } as CreateContestData);
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MultiStepForm;
import React, { useState } from "react";
import ContestForm from "./components/ContestForm";
import ContestForm2 from "./components/ContestForm2";
import Payment from "./components/payment";
import PopUpContestInfo from "./components/popUpContestInfo"; // Import your pop-up component
import { CreateContestData } from "@/types/apiSchemas";
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

  const nextStep = () => {
    if (step === 2) {
      // Start loading and call handleSubmit when moving to step 2
      setLoading(true);
      handleSubmit({ ...formDataStep1, ...formDataStep2 } as CreateContestData);
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
    previewContest.mutate(mergedData, {
      onSuccess: (data) => {
        setLoading(false);
        setContestData(data); // Set the contest data to be displayed in the pop-up
        setStep((prevStep) => prevStep + 1);
      },
      onError: (error) => {
        setLoading(false);
        console.error("Failed to create contest", error);
      },
    });
  };
  const handleConfirm = (mergedData: CreateContestData) => {
    createContest.mutate(mergedData, {
      onSuccess: (data) => {
        setLoading(false);
        setContestData(data); // Set the contest data to be displayed in the pop-up
        setStep((prevStep) => prevStep + 1);
      },
      onError: (error) => {
        setLoading(false);
        console.error("Failed to create contest", error);
      },
    });
  };

  const closePopUp = () => {
    setContestData(null);
  };

  return (
    <div className="relative h-full w-full">
      <div className={`${contestData ? "blur-sm" : ""}`}>
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
        {step === 3 && <Payment onPrevStep={prevStep} />}
      </div>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      )}
      {contestData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <PopUpContestInfo
            onClose={closePopUp}
            onConfirm={() => {
              // Do something on confirm
              console.log("Confirming contest data", contestData);
              handleConfirm(contestData);
            }}
            contestData={contestData} // Pass contest data to the pop-up
            loading={loading} // Pass loading state to the pop-up
          />
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
