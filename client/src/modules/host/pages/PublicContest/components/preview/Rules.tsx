import React, { useState } from "react";
import { CreateContestData } from "@/types/apiSchemas";
import { useOutletContext } from "react-router-dom";

const Rules: React.FC<{ contestData: CreateContestData }> = ({ contestData }) => {
  const contextData = useOutletContext<CreateContestData>();
  const data = contextData || contestData;

  const [editableData, setEditableData] = useState(data);

  const handleBlur = (field: keyof CreateContestData) => (
    e: React.FocusEvent<HTMLDivElement>
  ) => {
    const value = e.currentTarget.textContent || "";
    setEditableData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="forth-details-section mb-8 mt-12">
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">Project and Submission Requirements:</h1>
        </div>
        <ul className="list-req mt-6 flex flex-col">
          {editableData.requirements.split("\n").map((req, index) => (
            <li
              key={index}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => {
                const updatedReqs = editableData.requirements.split("\n");
                updatedReqs[index] = e.currentTarget.textContent || "";
                setEditableData((prevData) => ({
                  ...prevData,
                  requirements: updatedReqs.join("\n"),
                }));
              }}
              className="font-bold"
            >
              {req}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">PRIZES</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="prize list-req mt-6 flex flex-wrap">
          {editableData.prizeDetails.split("\n").map((prize, index) => (
            <div
              key={index}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => {
                const updatedPrizes = editableData.prizeDetails.split("\n");
                updatedPrizes[index] = e.currentTarget.textContent || "";
                setEditableData((prevData) => ({
                  ...prevData,
                  prizeDetails: updatedPrizes.join("\n"),
                }));
              }}
              className="mr-12 mb-4 mt-6 font-bold"
            >
              {prize}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">JUDGING CRITERIA</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <ul className="list-req mt-6 flex flex-col">
          {editableData.criteria.split(",").map((criterion, index) => (
            <li
              key={index}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => {
                const updatedCriteria = editableData.criteria.split(",");
                updatedCriteria[index] = e.currentTarget.textContent || "";
                setEditableData((prevData) => ({
                  ...prevData,
                  criteria: updatedCriteria.join(","),
                }));
              }}
              className="font-bold"
            >
              {criterion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rules;
