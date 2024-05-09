import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
import image from "@/assets/images/publicImage.png";
import React, { useState } from 'react';

const ContestForm: React.FC = () => {
    
        // const handleSubmit = (e) => {
        //   e.preventDefault();
        //   // Handle form submission
        // };
    return (
        <div className="signup3-container">
      <div className="signup3-form">
        <h2>Sign up to Join a Contest</h2>
        <form >
        {/* onSubmit={handleSubmit} */}
          <div className="form3-row">
            <div className="form3-group">
              <input
                type="text"
                placeholder="Preferences for Customizing Contest Templates"
              />
            </div>
          </div>
          <div className="form3-row">
            <div className="form3-group">
              <input
                type="text"
                placeholder="Criteria for Evaluating Submissions"
              />
            </div>
          </div>
          <div className="form3-row">
            <div className="form3-group">
              <input
                type="text"
                placeholder="Terms and Conditions of the competition"
              />
            </div>
          </div>
          <div>
            <label>
              <input type="checkbox" id="agreedToTerms" />
              <span> I agree to the platform's terms of service</span>
            </label>
          </div>
          <div className="file-drop-zone">
            <p>Upload image for your contest:</p>
            <div className="file-drop-area">
              <span className="file-msg">Drag and drop files here</span>
            </div>
          </div>
          <div className="button3-row">
            <button className="button3">Back</button>
            <button className="button3">Submit</button>
          </div>
        </form>
      </div>
    
            {/* <Footer /> */}
        </div>
    );
};

export default ContestForm;



