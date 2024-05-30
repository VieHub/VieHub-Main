import { useParams, NavLink, Outlet } from "react-router-dom";
import { contestDetailsData } from "@/hooks/useGetContestDetails";

const ContestDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = contestDetailsData(id || "");

  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading contest data.</div>;

  return (
    <div className="flex h-full w-full flex-col">
      <div className="details-section flex w-full items-center justify-center">
        <h1 className="text-center text-3xl font-bold text-white">
          {data?.title || "Contest Name"}
        </h1>
      </div>
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
      <Outlet context={data} />
    </div>
  );
};

export default ContestDetails;
