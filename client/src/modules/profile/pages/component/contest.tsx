import React from "react";
import { useOutletContext } from "react-router-dom";
import image from "@/assets/images/Problem-Solving.jpg";
import { contestDetailsData } from "@/hooks/contests/useGetContestDetails";

const ProfileContest: React.FC = () => {
  const { contests } = useOutletContext<{ contests: string[] }>();

  return (
    <div className="profile-contests-container">
      {contests?.map((contestId) => (
        <SingleContest key={contestId} contestId={contestId} />
      ))}
    </div>
  );
};

const SingleContest: React.FC<{ contestId: string }> = ({ contestId }) => {
  const { data, error } = contestDetailsData(contestId);

  return (
    <div className="profile-contest mt-4 flex w-1/4 flex-col items-center md:flex-1">
      {error ? (
        <div>Error loading contest details</div>
      ) : !data ? (
        <div>Loading contest details...</div>
      ) : (
        <div className="contest-card profile-contest mx-4 my-4 flex overflow-hidden shadow-lg md:rounded-lg">
          <img
            className="object-cover w-full h-48 md:h-full md:w-1/4"
            src={data.image_url || image}
            alt="Contest Image"
            style={{ objectFit: "cover" }}
          />
          <div
            className="flex w-full flex-col px-6 py-4 md:w-3/4"
            style={{ backgroundColor: "#2B6777" }}
          >
            <div className="mb-2 text-xl font-bold text-white">
              {data.title}
            </div>
            <hr className="my-4 border-white" />
            <div className="flex justify-between text-white">
              <div>
                <p>
                  <span className="font-bold">Prize:</span> {data.prizeDetails}
                </p>
                <p>
                  <span className="font-bold">Participants:</span>{" "}
                  {data.participants ? data.participants.length : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileContest;
