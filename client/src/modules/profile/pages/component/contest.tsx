import React from "react";
import image from "@/assets/images/Problem-Solving.jpg";

const ProfileContest: React.FC = () => {
  return (
    <div className="mt-4 flex flex-col w-1/4 items-center profile-contest md:flex-1 ">
    <div className="contest-card mx-4 my-4 flex  profile-contest overflow-hidden md:rounded-lg shadow-lg">
      <img
        className="md:h-full md:w-1/4 object-cover"
        src={image}
        alt="Contest Image"
      />
      <div
        className="flex md:w-3/4 w-full flex-col px-6 py-4"
        style={{ backgroundColor: "#2B6777" }}
      >
        <div className="mb-2 text-xl font-bold text-white">name</div>
      
        <hr className="my-4 border-white" />
        <div className="flex justify-between text-white">
          <div>
            <p>
              <span className="font-bold">Prize:</span> truncateText(prizes, 50)
            </p>
            <p>
              <span className="font-bold">Participants:</span> participants.length
            </p>
          </div>
          
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfileContest;
