import React, { useState } from "react";

const ContestForm2: React.FC<{
  onNextStep: () => void;
  onPrevStep: () => void;
}> = ({ onNextStep, onPrevStep }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      if (selectedFile.type.startsWith("image/")) {
        setFile(selectedFile);
        setError(null); // Clear any previous error
      } else {
        setError("Please upload an image file.");
        setFile(null); // Clear the file selection
      }
    }
  };
  return (
    <div className="bg-gray-100 flex h-full w-full items-center justify-center p-4">
      <div className="card w-96 w-full max-w-4xl rounded-lg bg-base-100 bg-white p-6 shadow-sm shadow-xl">
        <h2 className="mb-4 text-xl font-bold">Public Competition Form</h2>
        <form>
          <div className="mb-4">
            <input
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              type="text"
              placeholder="Preferences for Customizing Contest Templates"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              placeholder="Criteria for Evaluating Submissions"
              rows={4}
              maxLength={1000} // Limits characters
              style={{ resize: "vertical", maxHeight: "200px" }} // Allows vertical resize only up to 200px
            ></textarea>
          </div>
          <div className="mb-4">
            <textarea
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              placeholder="Terms and Conditions of the competition"
              rows={4}
              maxLength={2000} // Larger limit for more extensive text
              style={{ resize: "vertical", maxHeight: "300px" }}
            ></textarea>
          </div>
          <div className="mb-4">
            <textarea
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              placeholder="Rules of the Competition"
              rows={6}
              maxLength={1500}
              style={{ resize: "vertical", maxHeight: "300px" }}
            ></textarea>
          </div>
          <div className="mb-4">
            <label>
              <input type="checkbox" />
              <span className="text-gray-800 ml-2">
                I agree to the platform's terms of service
              </span>
            </label>
          </div>
          <div className="file-drop-zone mb-4">
            <p className="text-gray-800">Upload image for your contest:</p>
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input"
              style={{ display: "block", width: "100%", padding: "10px" }}
            />
            {file && <p>File selected: {file.name}</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div className="flex justify-between">
            <button
              className="button3"
              onClick={onPrevStep}
              style={{ backgroundColor: "#C4C4C4" }}
            >
              Back
            </button>
            <button
              className="button3"
              onClick={onNextStep}
              style={{ backgroundColor: "#52AB98" }}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContestForm2;
