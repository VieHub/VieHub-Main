import React from "react";
import iconpublic from "@/assets/icons/institution-svgrepo-com (1).svg";
import { Link } from "react-router-dom";
import { CreateContestData } from "@/types/apiSchemas";

const Overview: React.FC<{ contestData: CreateContestData }> = ({
  contestData,
}) => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="third-details-section flex justify-center">
        <div className="contest-heading mt-12">
          <h1 className="mb-8 text-3xl font-bold text-black">
            {contestData.title}
          </h1>
          <h3 className="mb-8 text-xl text-black">{contestData.subTitle}</h3>
          <button
            className="text-l mt-8 rounded px-8 py-2 text-white"
            style={{ backgroundColor: "#52AB98" }}
          >
            Join competition
          </button>
        </div>
        <div className="contest-heading-card bg-gray-100 card mt-12 p-8">
          <p className="mb-16 text-black" style={{ fontSize: "1.1rem" }}>
            Deadline: <br /> {contestData.endDate}
          </p>
          <hr className="border-t-1 border-gray-600 mb-8" />
          <div className="mb-8 flex flex-row justify-between">
            <div className="flex flex-col">
              <p style={{ fontSize: "1.1rem" }}>{contestData.company}</p>
              <button
                className="py-1/3 text-l mt-12 px-4 text-white"
                style={{ backgroundColor: "#52AB98" }}
              >
                {contestData.prizeDetails.split("\n")[0]}
              </button>
              <Link to="/contest">
                <p
                  className="mt-4"
                  style={{
                    fontSize: "1.1rem",
                    color: "#5B88D5",
                    textDecoration: "underline",
                  }}
                >
                  similar competitions
                </p>
              </Link>
            </div>
            <div className="ml-2 flex flex-col">
              <div className="flex flex-row">
                <img className="mr-2 w-4" src={iconpublic} alt="" />
                <p style={{ fontSize: "1.1rem" }}>Public</p>
              </div>
              <p style={{ fontSize: "1.1rem" }} className="mt-12">
                {contestData.company}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="forth-details-section mb-8 mt-12">
        <p>{contestData.description}</p>
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">REQUIREMENTS</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="list-req mt-6 flex flex-col">
          {contestData.requirements.split("\n").map((req, index) => (
            <li key={index} className="font-bold">
              {req}
            </li>
          ))}
        </div>
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">WHAT TO BUILD</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="list-req mt-6 flex flex-col">
          {contestData.whatToBuild.split("\n").map((build, index) => (
            <li key={index} className="font-bold">
              {build}
            </li>
          ))}
        </div>
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">PRIZES</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="prize list-req mt-6 flex">
          {contestData.prizeDetails.split("\n").map((prize, index) => (
            <div key={index} className="mr-12">
              <span className="mt-6 font-bold">{prize}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">JUDGING CRITERIA</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
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

export default Overview;
