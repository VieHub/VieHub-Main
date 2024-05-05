import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
import image from "@/assets/images/publicImage.png";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ContestForm2: React.FC = () => {
    return (
        <div className="h-full w-full">
            <Header isLoggedin={true} />
            <div className="signup-container">
      <div className="signup-form">
        <h2>Public Competition Form</h2>
        <form >
          <div className="form-row">
            <div className="form-group">
              <select className="custom-select">
                <option value="">Select Type of Competition</option>
                <option value="Coding">Coding</option>
                <option value="Design">Design</option>
                <option value="Art">Art</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="form-group">
              <input type="text" placeholder="Title of the competition" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Description of the competition" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Start and End Dates" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group" style={{ width: "80%" }}>
              <input type="text" placeholder="Number of participant" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group" style={{ width: "80%" }}>
              <input
                type="text"
                placeholder="Details of Prizes or Recognition for Winners"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group" style={{ width: "80%" }}>
              <input type="text" placeholder="Details of Prizes or Recognition for Winners" />
            </div>
          </div>

          <div className="button-container">
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </div>
            <Footer />
        </div>
    );
};

export default ContestForm2;
