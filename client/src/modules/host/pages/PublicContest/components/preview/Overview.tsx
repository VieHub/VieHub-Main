import React, { useState } from "react";
import iconpublic from "@/assets/icons/institution-svgrepo-com (1).svg";
import { Link, useOutletContext } from "react-router-dom";
import { CreateContestData } from "@/types/apiSchemas";
import { formatDate } from "@/utils/dateUtils";

const Overview: React.FC<{
  contestData: CreateContestData;
  onEdit: (updatedData: CreateContestData) => void;
}> = ({ contestData, onEdit }) => {
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

  const handleSave = () => {
    onEdit(editableData);
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="third-details-section flex justify-center">
        <div className="contest-heading mt-12 md:ml-10 md:w-3/4">
          <h1
            className="mb-8 text-3xl font-bold text-black focus:outline-none"
            contentEditable
            suppressContentEditableWarning
            onBlur={handleBlur("title")}
          >
            {editableData.title}
          </h1>
          <h3
            className="mb-8 text-xl text-black focus:outline-none"
            contentEditable
            suppressContentEditableWarning
            onBlur={handleBlur("subTitle")}
          >
            {editableData.subTitle}
          </h3>
          <button
            className="text-l mt-8 rounded px-8 py-2 text-white"
            style={{ backgroundColor: "#52AB98" }}
          >
            Join competition
          </button>
        </div>
        <div className="contest-heading-card md:w-2/4 md:mr-4 bg-gray-100 card mt-12 p-8">
          <p className="mb-16 text-black" style={{ fontSize: "1.1rem" }}>
            Deadline: <br /> {formatDate(editableData.endDate)}
          </p>
          <hr className="border-t-1 border-gray-600 mb-8" />
          <div className="mb-8 flex flex-row justify-between">
            <div className="flex flex-col">
              <p
                className="text-black focus:outline-none"
                contentEditable
                suppressContentEditableWarning
                onBlur={handleBlur("company")}
                style={{ fontSize: "1.1rem" }}
              >
                {editableData.company}
              </p>
              <button
                className="py-1/3 text-l mt-12 px-4 text-white"
                style={{ backgroundColor: "#52AB98" }}
              >
                {editableData.prizeDetails.split("\n")[0].replace("-", "")}
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
              <p
                className="mt-12 text-black focus:outline-none"
                contentEditable
                suppressContentEditableWarning
                onBlur={handleBlur("company")}
                style={{ fontSize: "1.1rem" }}
              >
                {editableData.company}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="forth-details-section mb-8 mt-12">
        <div
          className="forth-details-section-inpopup text-black focus:outline-none"
          contentEditable
          suppressContentEditableWarning
          onBlur={handleBlur("description")}
        >
          {editableData.description}
        </div>
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">REQUIREMENTS</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <ul className="list-req mt-6 flex flex-col text-black focus:outline-none">
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
          <h1 className="requirement">WHAT TO BUILD</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <ul className="list-req mt-6 flex flex-col text-black focus:outline-none">
          {editableData.whatToBuild.split("\n").map((build, index) => (
            <li
              key={index}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => {
                const updatedBuilds = editableData.whatToBuild.split("\n");
                updatedBuilds[index] = e.currentTarget.textContent || "";
                setEditableData((prevData) => ({
                  ...prevData,
                  whatToBuild: updatedBuilds.join("\n"),
                }));
              }}
              className="font-bold"
            >
              {build}
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">PRIZES</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="prize list-req mt-6 flex text-black focus:outline-none">
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
              className="mr-12"
            >
              {prize}
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requirement">JUDGING CRITERIA</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <ul className="list-req mt-6 flex flex-col text-black focus:outline-none">
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
      <div className="flex justify-end p-4">
        <button
          onClick={handleSave}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Overview;
