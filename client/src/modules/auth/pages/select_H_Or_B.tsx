import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/layouts/client/components/Header";


function Select() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="h-full w-full">
      <Header />
      <div className="signup-container">
        <div className="signup-form">
          <h2>Join as a Host or a Participant</h2>
          <div className="options-container">
            <div
              className={`option-box ${
                selectedOption === "provider" ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect("provider")}
            >
              <div className="">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt="Provider Logo"
                  className="logo"
                />
                <div className="circle"></div>
                <p className="option-text">
                  <i>I'm a Provider, Hosting a competition</i>
                </p>
              </div>
            </div>
            <div
              className={`option-box ${
                selectedOption === "participant" ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect("participant")}
            >
              <div className="">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt="Participant Logo"
                  className="logo"
                />
                <div className="circle"></div>
                <p className="option-text">
                  <i>I'm a Participant, joining a competition</i>
                </p>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="button">
              Create My Account
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Select;
