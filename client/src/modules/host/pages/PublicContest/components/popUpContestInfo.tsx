import React, { useState } from "react";
import Overview from "./preview/Overview";
import Rules from "./preview/Rules";
import Schedule from "./preview/Schedule";
import { CreateContestData } from "@/types/apiSchemas";
import { useOutletContext } from "react-router-dom";

const PopUpContestInfo: React.FC<{
  onClose: () => void;
  contestData: CreateContestData | null;
  loading: boolean;
  onSave: (updatedData: CreateContestData) => void;
}> = ({ onClose, contestData, loading, onSave }) => {
  const [activeComponent, setActiveComponent] = useState("overview");
  const contextData = useOutletContext<CreateContestData>();
  const data = contextData || contestData;

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };

  const handleEdit = (updatedData: CreateContestData) => {
    onSave(updatedData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="max-h-3/4 w-11/12 overflow-y-auto rounded-lg bg-white shadow-lg md:w-3/4">
        <div className="details-section flex w-full items-center justify-center p-4">
          <h1 className="text-center text-3xl font-bold text-white">
            {data.title}
          </h1>
        </div>
        <div className="second-details-section bg-gray-800 flex flex-row justify-center ">
          <div className="details-buttons flex flex-row justify-center">
            <button
              onClick={() => handleComponentChange("overview")}
              className={`mt-2 pl-4 pr-4 text-xl text-white ${
                activeComponent === "overview"
                  ? "font-bold underline"
                  : "hover:underline"
              }`}
            >
              Overview
            </button>
            <div className="h-full border-r border-white opacity-10"></div>
            <button
              onClick={() => handleComponentChange("rules")}
              className={`mt-2 pl-4 pr-4 text-xl text-white ${
                activeComponent === "rules"
                  ? "font-bold underline"
                  : "hover:underline"
              }`}
            >
              Rules
            </button>
            <div className="h-full border-r border-white opacity-10"></div>
            <button
              onClick={() => handleComponentChange("schedule")}
              className={`mt-2 pl-4 pr-4 text-xl text-white ${
                activeComponent === "schedule"
                  ? "font-bold underline"
                  : "hover:underline"
              }`}
            >
              Schedule
            </button>
          </div>
        </div>
        <div className="max-h-[calc(75vh-12rem)] overflow-y-auto p-4">
          {activeComponent === "overview" && (
            <Overview
              contestData={contestData ?? ({} as CreateContestData)}
              onEdit={handleEdit}
            />
          )}
          {activeComponent === "rules" && (
            <Rules contestData={contestData ?? ({} as CreateContestData)} />
          )}
          {activeComponent === "schedule" && (
            <Schedule
              contestData={contestData ?? ({} as CreateContestData)}
              onSave={handleEdit} // Pass the onSave function to the Schedule component
            />
          )}
        </div>
        {loading ? (
          <div className="flex justify-center p-4">
            <span className="loading loading-spinner loading-sm"></span>
          </div>
        ) : contestData ? (
          <div className="p-4"></div>
        ) : null}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="rounded bg-blue-500 px-4 py-2 text-white"
            disabled={loading}
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="ml-2 rounded bg-red-500 px-4 py-2 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpContestInfo;
