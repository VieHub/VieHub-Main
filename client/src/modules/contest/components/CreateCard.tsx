import React from "react";
import { useNavigate } from "react-router-dom";

interface ContestCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  prize: string;
  participants: any[];
  companyName: string;
  startDate: string;
  endDate: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

const ContestCard: React.FC<ContestCardProps> = ({
  id,
  name,
  description,
  image,
  prize,
  participants,
  companyName,
  startDate,
  endDate,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/contest/${id}`);
  };
  const prizes = prize.split("\n")[0].replace("-", "");
  return (
    <div
      onClick={handleClick}
      className="contest-card mx-4 my-4 flex w-full max-w-4xl overflow-hidden md:rounded-lg  shadow-lg"
    >
      <img className="md:h-full md:w-1/4 object-cover" src={image} alt={name} />
      <div
        className="flex md:w-3/4 w-full flex-col px-6 py-4"
        style={{ backgroundColor: "#2B6777" }}
      >
        <div className="mb-2 text-xl font-bold text-white">{name}</div>
        <p className="text-gray-700 text-base text-white">
          {truncateText(description, 188)}
        </p>
        <hr className="my-4 border-white" />
        <div className="flex justify-between text-white">
          <div>
            <p>
              <span className="font-bold">Prize:</span>{" "}
              {truncateText(prizes, 50)}
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
              <span className="font-bold">Start Date:</span>{" "}
              {formatDate(startDate)}
            </p>
            <p>
              <span className="font-bold">End Date:</span> {formatDate(endDate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
