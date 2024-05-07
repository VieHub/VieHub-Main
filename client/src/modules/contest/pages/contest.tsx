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
    <div className="h-full w-full">
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
    </div>
  );
};

export default Contest;
