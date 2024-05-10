
// import image from "@/assets/images/publicImage.png";
import React from "react";
import { Link } from "react-router-dom";

const ContestForm: React.FC = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission
  // };
  return (
    <div className="h-full w-full">
      <div className="signupc-container">
        <div className="signupc-form">
          <h2>Public Competition Form</h2>
          <form>
            <div className="formc-row">
              <div className="formc-group">
                <select className="customc-select">
                  <option value="">Select Type of Competition</option>
                  <option value="Coding">Coding</option>
                  <option value="Design">Design</option>
                  <option value="Art">Art</option>
                  <option value="Writing">Writing </option>
                  <option value="Photography">Photography </option>
                  <option value="Video">Video and Animation Challenges</option>
                  <option value="Start up">Start up </option>
                  <option value="Task">Task </option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="formc-group">
                <input type="text" placeholder="Title of the competition" />
              </div>
            </div>
            <div className="formc-row">
              <div className="formc-group">
                <input
                  type="text"
                  placeholder="Description of the competition"
                />
              </div>
              <div className="formc-group">
                <input type="tel" placeholder="Start and End Dates" />
              </div>
            </div>
            <div className="formc-row">
              <div className="form-group" style={{ width: "80%" }}>
                <input type="text" placeholder="Number of participant" />
              </div>
            </div>
            <div className="formc-row">
              <div className="form-group" style={{ width: "80%" }}>
                <input
                  type="text"
                  placeholder="Details of Prizes or Recognition for Winners"
                />
              </div>
            </div>
            <div className="formc-row">
              <div className="formc-group" style={{ width: "80%" }}>
                <input
                  type="text"
                  placeholder="Details of Prizes or Recognition for Winners"
                />
              </div>
            </div>

            <div className="buttonc-container">
              <Link to="/host/PublicHost/SecondPage">
                <button type="submit" style={{ backgroundColor: "#52AB98" }}>
                  Next
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContestForm;
