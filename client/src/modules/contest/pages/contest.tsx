import React, { useState } from "react";
import ContestCard from "../components/CreateCard";
import { getContestData } from "@/hooks/contests/useGetContest";
import { Key } from "react";

interface Contest {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  image_url: string;
  prizeDetails: string;
  participants: any[];
  company: string;
  startDate: string;
  endDate: string;
  type: string;
  requirements: string;
  rules: string;
  criteria: string;
  whatToBuild: string;
  agreement: boolean;
}

interface Filters {
  type: string[];
  duration: string[];
  openTo: string[];
}

const ContestPage: React.FC = () => {
  const { data: listOfcontests, isLoading, isError } = getContestData();
  const [filters, setFilters] = useState<Filters>({
    type: [],
    duration: [],
    openTo: [],
  });
  const [sortOption, setSortOption] = useState<string>("Most Relevant");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleTypeFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { id, checked } = event.target;
    setFilters((prevFilters) => {
      const newTypeFilters = checked
        ? [...prevFilters.type, id]
        : prevFilters.type.filter((type) => type !== id);
      console.log("New type filters:", newTypeFilters);
      return { ...prevFilters, type: newTypeFilters };
    });
  };

  const handleDurationFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { id, checked } = event.target;
    setFilters((prevFilters) => {
      const newDurationFilters = checked
        ? [...prevFilters.duration, id]
        : prevFilters.duration.filter((duration) => duration !== id);
      console.log("New duration filters:", newDurationFilters);
      return { ...prevFilters, duration: newDurationFilters };
    });
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchTerm(event.target.value);
  };

  const filterContests = (contests: Contest[]) => {
    console.log("Applying filters:", filters, "Search term:", searchTerm);
    let filtered = contests.filter((contest) => {
      const contestDuration =
        (new Date(contest.endDate).getTime() -
          new Date(contest.startDate).getTime()) /
        (1000 * 60 * 60 * 24);
      const matchesType =
        filters.type.length === 0 ||
        filters.type.some((type) =>
          contest.type.toLowerCase().includes(type.toLowerCase()),
        );
      const matchesDuration =
        filters.duration.length === 0 ||
        (filters.duration.includes("week") && contestDuration <= 7) ||
        (filters.duration.includes("2-4weeks") &&
          contestDuration > 7 &&
          contestDuration <= 28) ||
        (filters.duration.includes("1month") && contestDuration > 28);
      const matchesSearchTerm =
        contest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contest.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesType && matchesDuration && matchesSearchTerm;
    });

    if (sortOption === "Most Relevant") {
      filtered = filtered.sort(
        (a, b) => b.participants.length - a.participants.length,
      );
    } else if (sortOption === "Submission Date") {
      filtered = filtered.sort(
        (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime(),
      );
    } else if (sortOption === "Recently Added") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
      );
    }

    return filtered;
  };

  const filteredContests = listOfcontests ? filterContests(listOfcontests) : [];

  return (
    <div className="flex h-full w-full flex-col">
      <div className="content flex max-w-full flex-wrap">
        <div className="w-full p-12 md:flex-1">
          <p className="desc p-6 text-center text-2xl opacity-100">
            Elevate your game, join the competition. Your victory story starts
            now!
          </p>
        </div>
      </div>
      <div className="search-container mt-8 flex justify-center">
        <div className="flex items-center">
          <div className="search-wrapper">
            <input
              type="text"
              className="border-gray-300 search-input mr-2 rounded-md border px-8 py-2"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
          </div>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            style={{ backgroundColor: "#52AB98" }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="sorting-container mt-4 flex justify-center">
        <span className="sorting-label mr-20">
          Showing {filteredContests.length} Contests
        </span>
        <span className="sorting-label">Sort:</span>
        <div className="sorting-bar">
          <div className="sorting-options">
            <span
              className="sorting-option"
              onClick={() => handleSortChange("Most Relevant")}
            >
              Most Relevant
            </span>
            <span
              className="sorting-option"
              onClick={() => handleSortChange("Submission Date")}
            >
              Submission Date
            </span>
            <span
              className="sorting-option"
              onClick={() => handleSortChange("Recently Added")}
            >
              Recently Added
            </span>
          </div>
        </div>
      </div>
      <div className="card-cont flex flex-col md:flex-row">
        <div className="filter-card mb-4 ml-24 md:mb-7 md:w-auto">
          <h2 className="filter-title">Filters</h2>
          <div className="filter-card border-gray-300 rounded border p-12">
            <div className="filter-section mb-4">
              <h3 className="filter-section-title mb-2">Type of Competition</h3>
              <ul className="filter-options ml-6">
                <li className="mb-2">
                  <input
                    type="checkbox"
                    id="coding"
                    onChange={handleTypeFilterChange}
                  />
                  <label className="ml-2" htmlFor="coding">
                    Coding Competitions
                  </label>
                </li>
                <li className="mb-2">
                  <input
                    type="checkbox"
                    id="design"
                    onChange={handleTypeFilterChange}
                  />
                  <label className="ml-2" htmlFor="design">
                    Design Competitions
                  </label>
                </li>
                <li className="mb-2">
                  <input
                    type="checkbox"
                    id="writing"
                    onChange={handleTypeFilterChange}
                  />
                  <label className="ml-2" htmlFor="writing">
                    Writing Competitions
                  </label>
                </li>
                <li className="mb-2">
                  <input
                    type="checkbox"
                    id="art"
                    onChange={handleTypeFilterChange}
                  />
                  <label className="ml-2" htmlFor="art">
                    Art and Illustration Competitions
                  </label>
                </li>
                <li className="mb-2">
                  <input
                    type="checkbox"
                    id="photography"
                    onChange={handleTypeFilterChange}
                  />
                  <label className="ml-2" htmlFor="photography">
                    Photography Contests
                  </label>
                </li>
                <li className="mb-2">
                  <input
                    type="checkbox"
                    id="video"
                    onChange={handleTypeFilterChange}
                  />
                  <label className="ml-2" htmlFor="video">
                    Video and Animation Challenges
                  </label>
                </li>
                <li className="mb-2">
                  <input
                    type="checkbox"
                    id="startup"
                    onChange={handleTypeFilterChange}
                  />
                  <label className="ml-2" htmlFor="startup">
                    Startup Competition
                  </label>
                </li>
                <li className="mb-2">
                  <input
                    type="checkbox"
                    id="task"
                    onChange={handleTypeFilterChange}
                  />
                  <label className="ml-2" htmlFor="task">
                    Task Competition
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter-section mb-4">
              <h3 className="filter-section-title mb-2">Duration</h3>
              <ul className="filter-options ml-6">
                <li className="mb-2">
                  <input
                    type="checkbox"
                    id="week"
                    onChange={handleDurationFilterChange}
                  />
                  <label className="ml-2" htmlFor="week">
                    Week
                  </label>
                </li>
                <li className="mb-2">
                  <input
                    type="checkbox"
                    id="2-4weeks"
                    onChange={handleDurationFilterChange}
                  />
                  <label className="ml-2" htmlFor="2-4weeks">
                    2-4 Weeks
                  </label>
                </li>
                <li className="mb-2">
                  <input
                    type="checkbox"
                    id="1month"
                    onChange={handleDurationFilterChange}
                  />
                  <label className="ml-2" htmlFor="1month">
                    + Month
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center md:ml-8 md:mr-24 md:flex-1 ">
          {filteredContests &&
            !isError &&
            !isLoading &&
            filteredContests.map(
              (contest: Contest, index: Key | null | undefined) => (
                <ContestCard
                  key={index}
                  id={contest.id}
                  name={contest.title}
                  description={contest.description}
                  image={contest.image_url}
                  prize={contest.prizeDetails}
                  participants={contest.participants}
                  companyName={contest.company}
                  startDate={contest.startDate}
                  endDate={contest.endDate}
                />
              ),
            )}
        </div>
      </div>
    </div>
  );
};

export default ContestPage;
