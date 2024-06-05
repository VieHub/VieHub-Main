import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Submission.css"; // Import your CSS file

const Submission: React.FC = () => {
  const [hasTeammates, setHasTeammates] = useState<boolean | null>(null);

  const handleTeammatesSelection = (value: boolean) => {
    setHasTeammates(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="submission-container">
      <div className="submission-form">
        <h2>Node Js Coding Competition Submissions</h2>

        {/* New teammates section */}
        <div className="submission-teammates-section">
          <p>Do you have teammates?</p>
          <div className="submission-teammates-buttons">
            <button
              className={`submission-teammate-button ${
                hasTeammates === true ? "active" : ""
              }`}
              onClick={() => handleTeammatesSelection(true)}
            >
              Yes
            </button>
            <button
              className={`submission-teammate-button ${
                hasTeammates === false ? "active" : ""
              }`}
              onClick={() => handleTeammatesSelection(false)}
            >
              No
            </button>
          </div>
        </div>

        {/* Rest of your form */}
        <form onSubmit={handleSubmit}>
          <div className="submission-form-row">
            <div className="submission-form-group">
              <input
                type="text"
                placeholder="If yes state your teammates emails"
              />
            </div>
          </div>
          <div className="submission-form-row">
            <div className="submission-form-group">
              <input type="text" placeholder="Linkedin" />
            </div>
          </div>
          <div className="submission-form-row">
            <div className="submission-form-group">
              <input type="text" placeholder="Github" />
            </div>
          </div>
          <div>
            <label className="submission-checkbox-label">
              <input type="checkbox" id="agreedToTerms" />
              <span> I agree to the rules of entry</span>
            </label>
          </div>
          <div className="submission-file-drop-zone">
            <p>Upload Your File</p>
            <div className="submission-file-drop-area">
              <span className="submission-file-msg">
                Drag and drop files here
              </span>
            </div>
          </div>
          <div className="submission-button-row">
            <button className="submission-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Submission;
