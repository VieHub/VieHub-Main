import { useParams, NavLink, Outlet, useLocation } from "react-router-dom";
import { usePrivateContestDetails } from "@/hooks/private-contests/useGetPrivateContestDetails";
import { contestDetailsData } from "@/hooks/contests/useGetContestDetails";

const ContestDetails = () => {
  const { id, access_key } = useParams<{ id: string; access_key: string }>();
  const location = useLocation(); // Use useLocation to get the current path

  const { data, error, isLoading } = access_key
    ? usePrivateContestDetails(id || "", access_key || "")
    : contestDetailsData(id || "");

  console.log(data);
  if (isLoading) return <div></div>;
  if (error) return <div>Error loading contest data.</div>;

  const isSubmissionPage = location.pathname.includes("submission"); // Check if the current path includes "submission"

  return (
    <div className="flex h-full w-full flex-col">
      <div className="details-section flex w-full items-center justify-center">
        <h1 className="text-center text-3xl font-bold text-white">
          {data?.title || "Contest Name"}
        </h1>
      </div>
      {!isSubmissionPage && ( // Conditionally render the second-details-section div
        <div className="second-details-section flex flex-row justify-center">
          <div className="details-buttons flex flex-row justify-center">
            <NavLink
              to="overview"
              className={({ isActive }) =>
                `mt-2 pl-4 pr-4 text-xl text-white ${
                  isActive ? "font-bold underline" : "hover:underline"
                }`
              }
            >
              Overview
            </NavLink>
            <div className="h-full border-r border-white opacity-10"></div>
            <NavLink
              to="rules"
              className={({ isActive }) =>
                `mt-2 pl-4 pr-4 text-xl text-white ${
                  isActive ? "font-bold underline" : "hover:underline"
                }`
              }
            >
              Rules
            </NavLink>
            <div className="h-full border-r border-white opacity-10"></div>
            <NavLink
              to="schedule"
              className={({ isActive }) =>
                `mt-2 pl-4 pr-4 text-xl text-white ${
                  isActive ? "font-bold underline" : "hover:underline"
                }`
              }
            >
              Schedule
            </NavLink>
          </div>
        </div>
      )}
      <Outlet context={{ data, access_key }} />
    </div>
  );
};

export default ContestDetails;
