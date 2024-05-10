import Header from "@/layouts/client/components/Header";
// import Sort from "@mui/icons-material/Sort"; // Import the Sort icon
import ContestCard from "../components/CreateCard";
import image from "@/assets/images/image 2.png";

const Contest = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  const contests = [
    {
      name: "Contest 1",
      description: "Description of Contest 1",
      image: image,
      prize: "1000$",
      participants: "20",
      companyNamee: "Alex",
      startDate: "nov 02 2023 ",
      endDate: "nov 02 2024 ",
    },
    {
      name: "Contest 2",
      description: "Description of Contest 2",
      image: "https://via.placeholder.com/300",
      prize: "1000$",
      participants: "20",
      companyNamee: "Alex",
      startDate: "nov 02 2023 ",
      endDate: "nov 02 2024 ",
    },
    // Add more contests as needed
  ];

  return (
    <div className="flex h-full w-full flex-col">
      <Header />
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
        <span className="sorting-label mr-20">Showing 4 Contests</span>
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
          {contests.map((contest, index) => (
            <ContestCard
              key={index}
              name={contest.name}
              description={contest.description}
              image={contest.image}
              prize={contest.prize}
              participants={contest.participants}
              companyName={contest.companyNamee}
              startDate={contest.startDate}
              endDate={contest.endDate}
            />
          ))}
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
