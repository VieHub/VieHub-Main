import React from "react";
import { CreateContestData } from "@/types/apiSchemas";
import { useOutletContext } from "react-router-dom";

const Rules: React.FC<{}> = () => {
  const contextData = useOutletContext<{
    data: CreateContestData;
    access_key?: string;
  }>();
  const { data } = contextData;

  return (
    <div className="flex h-full w-full flex-col">
      <div className="forth-details-section mb-8 mt-12">
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">Project and Submission Requirements:</h1>
        </div>
        <ul className="list-req mt-6 flex flex-col">
          {data.requirements.split("\n").map((req, index) => (
            <li key={index} className="font-bold">
              {req}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">PRIZES</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="prize list-req mt-6 flex flex-wrap">
          {data.prizeDetails.split("\n").map((prize, index) => (
            <div key={index} className="mr-12 mb-4">
              <span className="mt-6 font-bold">{prize}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">JUDGING CRITERIA</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <ul className="list-req mt-6 flex flex-col">
          {data.criteria.split(",").map((criterion, index) => (
            <li key={index} className="font-bold">
              {criterion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rules;
