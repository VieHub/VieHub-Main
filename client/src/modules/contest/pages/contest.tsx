import { Link } from "react-router-dom";
import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
import { useState } from "react";
import Sort from "@mui/icons-material/Sort"; // Import the Sort icon

const Contest = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-full w-full flex flex-col">
      <Header isLoggedin={true} />
      <div className="content flex max-w-full flex-wrap">
        <div className="w-full p-12 md:flex-1">
          <p className="desc p-6 text-center opacity-100 text-2xl">
            Elevate your game, join the competition. Your victory story starts now!
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8 search-container">
        <div className="flex items-center">
          <div className="search-wrapper">
            <input
              type="text"
              className="border border-gray-300 rounded-md px-8 py-2 mr-2 search-input"
              placeholder="Search..."
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: "#52AB98" }}>
            Search
          </button>
        </div>
      </div>
      <div className=" flex justify-center mt-4 sorting-container">
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
      {/* <h2 className="filter-title ml-24 mb">Filter</h2> */}
      <h2 className="filter-title ml-24">Filters</h2>
      <div className="filter-card mr-auto ml-24 border border-gray-300 rounded p-12 ">
      
        <div className="filter-section mb-4">
          <h3 className="filter-section-title mb-2">Type of Competition</h3>
          <ul className="filter-options ml-6">
            <li className="mb-2"><input type="checkbox" id="coding" /><label className="ml-2" htmlFor="coding">Coding Competitions</label></li>
            <li className="mb-2"><input type="checkbox" id="design" /><label className="ml-2" htmlFor="design">Design Competitions</label></li>
            <li className="mb-2"><input type="checkbox" id="writing" /><label className="ml-2" htmlFor="writing">Writing Competitions</label></li>
            <li className="mb-2"><input type="checkbox" id="art" /><label className="ml-2" htmlFor="art">Art and Illustration Competitions</label></li>
            <li className="mb-2"><input type="checkbox" id="photography" /><label className="ml-2" htmlFor="photography">Photography Contests</label></li>
            <li className="mb-2"><input type="checkbox" id="video" /><label className="ml-2" htmlFor="video">Video and Animation Challenges</label></li>
            <li className="mb-2"><input type="checkbox" id="startup" /><label className="ml-2" htmlFor="startup">Startup Competition</label></li>
            <li className="mb-2"><input type="checkbox" id="task" /><label className="ml-2" htmlFor="task">Task Competition</label></li>
          </ul>
        </div>
        <div className="filter-section mb-4">
          <h3 className="filter-section-title mb-2">Duration</h3>
          <ul className="filter-options ml-6">
            <li className="mb-2"><input type="checkbox" id="week" /><label className="ml-2" htmlFor="week">Week</label></li>
            <li className="mb-2"><input type="checkbox" id="2-4weeks" /><label className="ml-2" htmlFor="2-4weeks">2-4 Weeks</label></li>
            <li className="mb-2"><input type="checkbox" id="1month" /><label className="ml-2" htmlFor="1month">+ Month</label></li>
          </ul>
        </div>
        <div className="filter-section mb-4">
          <h3 className="filter-section-title mb-2">Open to</h3>
          <ul className="filter-options ml-6">
            <li className="mb-2"><input type="checkbox" id="public" /><label className="ml-2" htmlFor="public">Public</label></li>
            <li className="mb-2"><input type="checkbox" id="private" /><label className="ml-2" htmlFor="private">Private</label></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contest;



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
          