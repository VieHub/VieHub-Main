import React from "react";

interface ContestCardProps {
  name: string;
  description: string;
  image: string;
  prize: string;
  participants: any;
  companyName: string;
  startDate: string;
  endDate: string;
}

const ContestCard: React.FC<ContestCardProps> = ({
  name,
  description,
  image,
  prize,
  participants,
  companyName,
  startDate,
  endDate,
}) => {
  return (
    <div className=" contest-card mx-4 my-4 flex w-full max-w-4xl overflow-hidden rounded-lg shadow-lg ">
      <img className="h-50 w-1/4 object-cover" src={image} alt={name} />
      <div
        className="flex w-3/4 flex-col px-6 py-4"
        style={{ backgroundColor: "#2B6777" }}
      >
        <div className="mb-2 text-xl font-bold text-white">{name}</div>
        <p className="text-gray-700 text-base text-white">{description}</p>
        <hr className="my-4 border-white" />
        <div className="flex justify-between text-white">
          <div>
            <p>
              <span className="font-bold">Prize:</span> {prize}
            </p>
            <p>
              <span className="font-bold">Participants:</span>{" "}
              {participants.length}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Company:</span> {companyName}
            </p>
            <p>
              <span className="font-bold">Start Date:</span> {startDate}
            </p>
            <p>
              <span className="font-bold">End Date:</span> {endDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
