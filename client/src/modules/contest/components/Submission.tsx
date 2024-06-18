import React, { useState, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { useSubmitContest } from "@/hooks/contests/useSubmitContest"; // Ensure the path is correct based on your folder structure
import { SubmissionSchema } from "@/types/apiSchemas"; // Ensure the path is correct based on your folder structure
import { useAuth } from "@/contexts/AuthContext";

const Submission: React.FC = () => {
  const { id: contestId } = useParams<{ id: string }>(); // Extract contestId from URL
  console.log("Contest ID", contestId);
  const contestIdValue = contestId ?? "";
  const user = useAuth(); // Use the useAuth hook to access the current user

  const [hasTeammates, setHasTeammates] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    submission_link: "",
    description: "",
    teamemail: "",
    linkedin: "",
    github: "",
    youtube: "",
    agreement: false,
  });

  const { mutate: submitContest } = useSubmitContest(contestIdValue);

  const handleTeammatesSelection = (value: boolean) => {
    setHasTeammates(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const submissionData: SubmissionSchema = {
      participant_uid: user?.user?.uid ?? "", // This will be filled by the hook
      submission_link: formData.submission_link,
      description: formData.description,
      teammates: hasTeammates ? formData.teamemail : "",
      teammates_emails: hasTeammates ? formData.teamemail.split(",") : [],
      linkedin: formData.linkedin,
      github: formData.github,
      youtube_video_link: formData.youtube,
      agree_to_rules: formData.agreement,
    };

    submitContest(submissionData, {
      onSuccess: (data) => {
        console.log("Submission successful", data);
      },
      onError: (error) => {
        console.error("Submission failed", error);
      },
    });
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
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
              className={`submission-teammate-button ${hasTeammates === true ? "active" : ""}`}
              onClick={() => handleTeammatesSelection(false)}
            >
              Yes
            </button>
            <button
              className={`submission-teammate-button ${hasTeammates === false ? "active" : ""}`}
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
                placeholder="Submission Link"
                name="submission_link"
                value={formData.submission_link}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="submission-form-row">
            <div className="submission-form-group">
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>
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
              <input
                type="text"
                placeholder="LinkedIn"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="submission-form-row">
            <div className="submission-form-group">
              <input
                type="text"
                placeholder="GitHub"
                name="github"
                value={formData.github}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="submission-form-row">
            <div className="submission-form-group">
              <input
                type="text"
                placeholder="YouTube video link"
                name="youtube"
                value={formData.youtube}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="submission-checkbox-label">
              <input
                type="checkbox"
                id="agreedToTerms"
                name="agreement"
                checked={formData.agreement}
                onChange={handleCheckboxChange}
              />
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
