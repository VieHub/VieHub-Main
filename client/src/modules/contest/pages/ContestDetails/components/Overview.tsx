import React from "react";
import iconpublic from "@/assets/icons/institution-svgrepo-com (1).svg";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { CreateContestData } from "@/types/apiSchemas";
import { formatDate } from "@/utils/dateUtils";

const Overview: React.FC<{}> = () => {
  const contextData = useOutletContext<{
    data: CreateContestData;
    access_key?: string;
    // id?:string;
  }>();
  const { data, access_key } = contextData;
  const { id} = useParams<{ id: string }>();


  return (
    <div className="flex h-full w-full flex-col">
      <div className="third-details-section flex justify-center ">
        <div className="contest-heading mt-12 md:w-1/2">
          <h1 className="mb-8 text-3xl font-bold text-black">{data.title}</h1>
          <h3 className="mb-8 text-xl text-black">{data.subTitle}</h3>
          <Link to={`/contest/${id}/submission`}>
            <button
              className="text-l mt-8 rounded px-8 py-2 text-white"
              style={{ backgroundColor: "#52AB98" }}
            >
              Join competition
            </button>
          </Link>
          
        </div>
        <div className="contest-heading-card bg-gray-100 card mt-12 p-8 md:w-1/4">
          <p className="mb-16 text-black" style={{ fontSize: "1.1rem" }}>
            Deadline: <br /> {formatDate(data.endDate)}
          </p>
          <hr className="border-t-1 border-gray-600 mb-8" />
          <div className="mb-8 flex flex-row justify-between">
            <div className="flex flex-col">
              <p style={{ fontSize: "1.1rem" }}>{data.company}</p>
              <button
                className="py-1/3 text-l mt-12 px-4 text-white"
                style={{ backgroundColor: "#52AB98" }}
              >
                {data.prizeDetails.split("\n")[0].replace("-", "")}
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
                <p style={{ fontSize: "1.1rem" }}>
                  {access_key ? "Private" : "Public"}
                </p>
              </div>
              <p style={{ fontSize: "1.1rem" }} className="mt-12">
                {data.company}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="forth-details-section mb-8 mt-12 ">
        <p>{data.description}</p>
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">REQUIREMENTS</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="list-req mt-6 flex flex-col">
          {data.requirements.split("\n").map((req, index) => (
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
          {data.whatToBuild.split("\n").map((build, index) => (
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
          {data.prizeDetails.split("\n").map((prize, index) => (
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

export default Overview;
