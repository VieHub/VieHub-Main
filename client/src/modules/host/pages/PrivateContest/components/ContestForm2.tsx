import React, { useState } from "react";
// import StarIcon from "@/assets/star.svg";

const ContestForm2: React.FC<{
  onNextStep: () => void;
  onPrevStep: () => void;
  onFormData: (data: any) => void;
}> = ({ onNextStep, onPrevStep, onFormData }) => {
  const [image_url, setimage_url] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    // preferences: "",
    criteria: "",
    requirements: "",
    whatToBuild: "",
    prizeDetails: "",
    agreement: false,
  });

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      if (selectedFile.type.startsWith("image/")) {
        setimage_url(selectedFile);
        setError(null); // Clear any previous error
      } else {
        setError("Please upload an image file.");
        setimage_url(null); // Clear the file selection
      }
    }
  };

  // Handle form field change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataWithFile = {
      ...formData,
      image_url,
      error,
    };
    onFormData(formDataWithFile); // Passing form data to parent component
    onNextStep();
  };

  return (
    <div className="bg-gray-100 flex h-full w-full items-center justify-center p-4">
      <div className="card w-96 w-full max-w-4xl rounded-lg bg-base-100 bg-white p-6 shadow-sm shadow-xl">
        <h2 className="mb-4 text-xl font-bold">Private Competition Form</h2>
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-4">
            <input
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              type="text"
              placeholder="Preferences for Customizing Contest Templates"
              name="preferences"
              value={formData.preferences}
              onChange={handleChange}
            />
          </div> */}
          <div className="mb-4">
            {/* <div className="flex"> */}
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              Requirements of the Competition
            </label>
            {/* <img
              src={StarIcon}
              alt="AI generator"
              title="Customize your text using AI" // Adding a title attribute for tooltip
              className="star-icon ml-4 mb-2"
            />
            </div> */}

            <textarea
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              placeholder="Terms and Conditions of the competition"
              rows={4}
              maxLength={2000} // Larger limit for more extensive text
              style={{ resize: "vertical", maxHeight: "300px" }}
              name="requirements"
              value={formData.requirements}
              onChange={handleTextareaChange}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              Details of Prizes or Recognition for Winners
            </label>
            {/* <div className="flex"> */}
            <textarea
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              rows={4}
              name="prizeDetails"
              maxLength={1000} // Limits characters
              value={formData.prizeDetails}
              onChange={handleTextareaChange}
              placeholder="Details of Prizes or Recognition for Winners"
              required
            >
              // required
            </textarea>
            {/* <img
              src={StarIcon}
              alt="AI generator"
              title="Customize your text using AI" // Adding a title attribute for tooltip
              className="star-icon"
            />
            </div> */}
          </div>
          <div className="mb-4">
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              Judge criteria
            </label>
            {/* <div className="flex"> */}
            <textarea
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              placeholder="Criteria for Evaluating Submissions"
              rows={4}
              maxLength={1000} // Limits characters
              style={{ resize: "vertical", maxHeight: "200px" }} // Allows vertical resize only up to 200px
              name="criteria"
              value={formData.criteria}
              onChange={handleTextareaChange}
              required
            ></textarea>
            {/* <img
              src={StarIcon}
              alt="AI generator"
              title="Customize your text using AI" // Adding a title attribute for tooltip
              className="star-icon"
            />
            </div> */}
          </div>
          {/* <div className="mb-4">
            <textarea
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              placeholder="Terms and Conditions of the competition"
              rows={4}
              maxLength={2000} // Larger limit for more extensive text
              style={{ resize: "vertical", maxHeight: "300px" }}
              name="terms"
              value={formData.terms}
              onChange={handleTextareaChange}
            ></textarea>
          </div> */}
          <div className="mb-4">
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              What to bulid
            </label>
            {/* <div className="flex"> */}
            <textarea
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              placeholder="What to bulid in the Competition"
              rows={6}
              maxLength={1500}
              style={{ resize: "vertical", maxHeight: "300px" }}
              name="whatToBuild"
              value={formData.whatToBuild}
              onChange={handleTextareaChange}
              required
            ></textarea>
            {/* <img
              src={StarIcon}
              alt="AI generator"
              title="Customize your text using AI" // Adding a title attribute for tooltip
              className="star-icon"
            />
            </div> */}
          </div>
          <div className="mb-4">
            <label>
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
              />
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
            {image_url && <p>File selected: {image_url.name}</p>}
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
              type="submit"
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
