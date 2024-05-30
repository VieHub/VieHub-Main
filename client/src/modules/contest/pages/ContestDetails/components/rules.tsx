// import React from "react";
import { CreateContestData } from "@/types/apiSchemas";
import { useOutletContext } from "react-router-dom";

const Rules: React.FC<{ contestData: CreateContestData }> = ({
  contestData,
}) => {
  const contextData = useOutletContext<CreateContestData>();
  const data = contextData || contestData;
  return (
    <div className="flex h-full w-full flex-col">
      <div className="forth-details-section mb-8 mt-12">
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requierment ">Project and Submission Requirements:</h1>
        </div>
        <div className="list-req mt-6 flex flex-col">
          {data.requirements.split("\n").map((req, index) => (
            <li key={index} className="font-bold">
              {req}
            </li>
          ))}
        </div>

        <div className=" mt-12 flex flex-row items-center">
          <h1 className="requierment ">PRIZES</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="prize list-req mt-6 flex">
          {data.prizeDetails.split("\n").map((prize, index) => (
            <div key={index} className="mr-12">
              <span className="mt-6 font-bold">{prize}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-row items-center">
          <h1 className="requierment ">JUDGING CRITERIA</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="list-req mt-6 flex flex-col">
          {data.criteria.split(",").map((criterion, index) => (
            <li key={index} className="font-bold">
              {criterion}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rules;
