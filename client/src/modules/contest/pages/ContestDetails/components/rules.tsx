// import React from "react";
import { CreateContestData } from "@/types/apiSchemas";






const Rules: React.FC<{ contestData: CreateContestData }> = ({
  contestData,
}) => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="forth-details-section mt-12 mb-8">
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requierment ">Project and Submission Requirements:</h1>
          
        </div>
        <div className="list-req mt-6 flex flex-col">
          {contestData.requirements.split("\n").map((req, index) => (
            <li key={index} className="font-bold">
              {req}
            </li>
          ))}
        </div>
        
        <div className=" mt-12 flex flex-row items-center">
          <h1 className="requierment ">PRIZES</h1>
          <hr className="border-t border-gray-400 ml-6 section-line opacity-3" />
        </div>
        <div className="prize list-req mt-6 flex">
          {contestData.prizeDetails.split("\n").map((prize, index) => (
            <div key={index} className="mr-12">
              <span className="mt-6 font-bold">{prize}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-row items-center">
          <h1 className="requierment ">JUDGING CRITERIA</h1>
          <hr className="border-t border-gray-400 ml-6 section-line opacity-3" />
        </div>
        <div className="list-req mt-6 flex flex-col">
          {contestData.criteria.split(",").map((criterion, index) => (
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
