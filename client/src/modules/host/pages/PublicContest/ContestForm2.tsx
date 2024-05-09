import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
import image from "@/assets/images/publicImage.png";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ContestForm2: React.FC = () => {
    return (
        <div className="h-full w-full">
            <Header isLoggedin={true} />
            <div className="signupc-container">
      <div className="signupc-form">
        <h2>Public Competition Form</h2>
        <form >
          <div className="formc-row">
            <div className="formc-group">
              <select className="customc-select">
                <option value="">Select Type of Competition</option>
                <option value="Coding">Coding</option>
                <option value="Design">Design</option>
                <option value="Art">Art</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="formc-group">
              <input type="text" placeholder="Title of the competition" />
            </div>
          </div>
          <div className="formc-row">
            <div className="formc-group">
              <input type="text" placeholder="Description of the competition" />
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
              <input type="text" placeholder="Details of Prizes or Recognition for Winners" />
            </div>
          </div>

          <div className="buttonc-container">
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
