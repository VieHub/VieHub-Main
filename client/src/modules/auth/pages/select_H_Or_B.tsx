import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/layouts/client/components/Header";
import book from "@/assets/icons/guest-book-svgrepo-com (1).svg";
import email from "@/assets/icons/email-mail-svgrepo-com (1).svg";




function Select() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="h-full w-full">
      <Header />
      <div className="signup-container">
        <div className="select-form">
          <h2 className="mb-2 text-xl font-bold text-black">Join as a Host or a Participant</h2>
          <div className="options-container">
          {/* <Link to={"/Signupashost"}>  */}
           <div
              className={`option-box ${
                selectedOption === "provider" ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect("provider")}
            >
              <div className="">
                <img
                  src={email}
                  alt="Provider Logo"
                  className="logo"
                />
                <div className="circle"></div>
                <p className="option-text">
                  <i>I'm a Provider, Hosting a competition</i>
                </p>
              </div>
            </div>
            {/* </Link> */}
            {/* <Link to={"/Signupasparticipant"}> */}
            <div
              className={`option-box ${
                selectedOption === "participant" ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect("participant")}
            >
              <div className="">
                <img
                  src={book}
                  alt="Participant Logo"
                  className="logo"
                />
                <div className="circle"></div>
                <p className="option-text">
                  <i>I'm a Participant, joining a competition</i>
                </p>
              </div>
            </div>
            {/* </Link> */}
          </div>
          <div className="button-container">
            <button type="submit" className="button">
              Create My Account
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login" className="login-link">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Select;
