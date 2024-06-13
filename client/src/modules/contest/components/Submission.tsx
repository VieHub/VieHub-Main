import React, { useState, FormEvent } from "react";
// import "./Submission.css"; // Import your CSS file
// import { SubmissionContestData } from "@/types/apiSchemas";
const Submission: React.FC = () => {
  const [hasTeammates, setHasTeammates] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    // preferences: "",
    teamemail: "",
    linkedin: "",
    github: "",
    youtube: "",
    agreement: false,
  });

  const handleTeammatesSelection = (value: boolean) => {
    setHasTeammates(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;
  //   if (files && files.length > 0) {
  //     const selectedFile = files[0];
      // if (selectedFile.type.startsWith("image/")) {
      //   setimage_url(selectedFile);
      //   setError(null); // Clear any previous error
      // } else {
      //   setError("Please upload an image file.");
      //   setimage_url(null); // Clear the file selection
      // }
  //   }
  // };

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
                name="teamemail"
                value={formData.teamemail}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="submission-form-row">
            <div className="submission-form-group">
              <input type="text" placeholder="Linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange}/>
            </div>
          </div>
          <div className="submission-form-row">
            <div className="submission-form-group">
              <input type="text" placeholder="Github" name="github" value={formData.github} onChange={handleChange}/>
            </div>
          </div>
          <div className="submission-form-row">
            <div className="submission-form-group">
              <input type="text" placeholder="Youtube video linke" name="youtube" value={formData.youtube} onChange={handleChange}/>
            </div>
          </div>
          <div>
            <label className="submission-checkbox-label">
              <input type="checkbox" id="agreedToTerms" name="agreement" checked={formData.agreement} />
              <span> I agree to the rules of entry</span>
            </label>
          </div>
          <div className="file-drop-zone mb-4">
            <p className="text-gray-800">Upload contest files:</p>
            <input
              type="file"
              // onChange={handleFileChange}
              className="file-input"
              style={{ display: "block", width: "100%", padding: "10px" }}
            />
            {/* {image_url && <p>File selected: {image_url.name}</p>}
            {error && <p className="text-red-500">{error}</p>} */}
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
