import React from "react";
import image from "@/assets/images/Problem-Solving.jpg";

const ProfileContest: React.FC = () => {
  return (
    <div className="profile-contest mt-4 flex w-1/4 flex-col items-center md:flex-1 ">
      <div className="contest-card profile-contest mx-4 my-4  flex overflow-hidden shadow-lg md:rounded-lg">
        <img
          className="object-cover md:h-full md:w-1/4"
          src={image}
          alt="Contest Image"
        />
        <div
          className="flex w-full flex-col px-6 py-4 md:w-3/4"
          style={{ backgroundColor: "#2B6777" }}
        >
          <div className="mb-2 text-xl font-bold text-white">
            Node js Contest
          </div>

          <hr className="my-4 border-white" />
          <div className="flex justify-between text-white">
            <div>
              <p>
                <span className="font-bold">Prize:</span> 500$
              </p>
              <p>
                <span className="font-bold">Participants:</span>
                {3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContest;
