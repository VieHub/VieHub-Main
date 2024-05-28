import { useState } from "react";
import Overview from "@/modules/contest/pages/ContestDetails/components/Overview";
import Rules from "@/modules/contest/pages/ContestDetails/components/rules";
import Schedule from "@/modules/contest/pages/ContestDetails/components/Schedule";

const PopUpContestInfo: React.FC<{ onClose: () => void; onConfirm: () => void }> = ({ onClose, onConfirm }) => {
  const [activeComponent, setActiveComponent] = useState("overview");

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 max-h-3/4 overflow-y-auto">
        <div className="details-section flex w-full items-center justify-center p-4">
          <h1 className="text-center text-3xl font-bold text-white">
            {activeComponent === "overview"
              ? "Contest Overview"
              : activeComponent === "rules"
              ? "Contest Rules"
              : "Contest Schedule"}
          </h1>
        </div>
        <div className="second-details-section flex flex-row justify-center bg-gray-800 ">
          <div className="details-buttons flex flex-row justify-center">
            <button
              onClick={() => handleComponentChange("overview")}
              className={`mt-2 pl-4 pr-4 text-xl text-white ${
                activeComponent === "overview" ? "font-bold underline" : "hover:underline"
              }`}
            >
              Overview
            </button>
            <div className="h-full border-r border-white opacity-10"></div>
            <button
              onClick={() => handleComponentChange("rules")}
              className={`mt-2 pl-4 pr-4 text-xl text-white ${
                activeComponent === "rules" ? "font-bold underline" : "hover:underline"
              }`}
            >
              Rules
            </button>
            <div className="h-full border-r border-white opacity-10"></div>
            <button
              onClick={() => handleComponentChange("schedule")}
              className={`mt-2 pl-4 pr-4 text-xl text-white ${
                activeComponent === "schedule" ? "font-bold underline" : "hover:underline"
              }`}
            >
              Schedule
            </button>
          </div>
        </div>
        <div className="p-4 max-h-[calc(75vh-12rem)] overflow-y-auto">
          {activeComponent === "overview" && <Overview />}
          {activeComponent === "rules" && <Rules />}
          {activeComponent === "schedule" && <Schedule />}
        </div>
        <div className="flex justify-end p-4">
          <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded">
            Confirm
          </button>
          <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded ml-2">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpContestInfo;
