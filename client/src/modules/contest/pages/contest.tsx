// import Sort from "@mui/icons-material/Sort"; // Import the Sort icon
import ContestCard from "../components/CreateCard";
// import image from "@/assets/images/image 2.png";
import { getContestData } from "@/hooks/getContestData";
import { Key } from "react";
const Contest = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };
  // isError
  const { data: listOfcontests, isLoading, isError } = getContestData();
  if (isLoading) {
    return <div></div>;
  }

  if (isError) {
    return;
  }

  console.log("list of contests", listOfcontests);
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
          {" "}
          Showing {listOfcontests ? listOfcontests.length : 0} Contests
        </span>
        <span className="sorting-label">Sort:</span>
        <div className="sorting-bar">
          <div className="sorting-options">
            <span className="sorting-option">Most Relevant</span>
            <span className="sorting-option">Submission Date</span>
            <span className="sorting-option">Recently Added</span>
          </div>
          {/* <button className="md:hidden" onClick={toggleDropdown}>
            <Sort />
          </button>
          <div className="md:hidden">
            {isDropdownOpen && (
              <div className="sorting-options">
                <span className="sorting-option">Most Relevant</span>
                <span className="sorting-option">Submission Date</span>
                <span className="sorting-option">Recently Added</span>
              </div>
            )}
          </div> */}
        </div>
      </div>
      <div className="card-cont flex flex-col md:flex-row">
        <div className="filter-card mb-4  ml-24 md:mb-0 md:w-auto">
          <h2 className="filter-title">Filters</h2>
          <div className="filter-card border-gray-300 rounded border p-12">
            <div className="filter-section mb-4">
              <h3 className="filter-section-title mb-2">Type of Competition</h3>
              <ul className="filter-options ml-6">
                <li className="mb-2">
                  <input type="checkbox" id="coding" />
                  <label className="ml-2" htmlFor="coding">
                    Coding Competitions
                  </label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" id="design" />
                  <label className="ml-2" htmlFor="design">
                    Design Competitions
                  </label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" id="writing" />
                  <label className="ml-2" htmlFor="writing">
                    Writing Competitions
                  </label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" id="art" />
                  <label className="ml-2" htmlFor="art">
                    Art and Illustration Competitions
                  </label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" id="photography" />
                  <label className="ml-2" htmlFor="photography">
                    Photography Contests
                  </label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" id="video" />
                  <label className="ml-2" htmlFor="video">
                    Video and Animation Challenges
                  </label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" id="startup" />
                  <label className="ml-2" htmlFor="startup">
                    Startup Competition
                  </label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" id="task" />
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
                  <input type="checkbox" id="week" />
                  <label className="ml-2" htmlFor="week">
                    Week
                  </label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" id="2-4weeks" />
                  <label className="ml-2" htmlFor="2-4weeks">
                    2-4 Weeks
                  </label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" id="1month" />
                  <label className="ml-2" htmlFor="1month">
                    + Month
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter-section mb-4">
              <h3 className="filter-section-title mb-2">Open to</h3>
              <ul className="filter-options ml-6">
                <li className="mb-2">
                  <input type="checkbox" id="public" />
                  <label className="ml-2" htmlFor="public">
                    Public
                  </label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" id="private" />
                  <label className="ml-2" htmlFor="private">
                    Private
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" mt-4 flex flex-col items-center md:ml-8 md:mr-24 md:flex-1 ">
          {/* Render ContestCards */}
          {listOfcontests.map(
            (
              contest: {
                name: string;
                description: string;
                image: string;
                prize: string;
                participants: any;
                company: string;
                start_date: string;
                end_date: string;
                image_url: string;
              },
              index: Key | null | undefined,
            ) => (
              <ContestCard
                key={index}
                name={contest.name}
                description={contest.description}
                image={contest.image_url}
                prize={contest.prize}
                participants={contest.participants}
                companyName={contest.company}
                startDate={contest.start_date}
                endDate={contest.end_date}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Contest;

{
  /* <button className="md:hidden" onClick={toggleDropdown}>
            <Sort />
          </button>
          <div className="md:hidden">
            {isDropdownOpen && (
              <div className="sorting-options">
                <span className="sorting-option">Most Relevant</span>
                <span className="sorting-option">Submission Date</span>
                <span className="sorting-option">Recently Added</span>
              </div>
            )}
          </div> */
}
