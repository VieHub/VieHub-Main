import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Basic styling

const ContestForm: React.FC<{ onNextStep: () => void; onFormData: (data: any) => void }> = ({ onNextStep, onFormData }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [formData, setFormData] = useState({
    type: "",
    title: "",
    subTitle: "",
    startDate: startDate,
    endDate: endDate,
    maxParticipants: "",
    description: "",
    company:""
    // prizeDetails: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormData(formData); // Passing form data to parent component
    // console.log(formData);
    onNextStep();
  };
  

  return (
    <div className="bg-gray-100 flex h-full w-full items-center justify-center p-4 ">
      <div className="card w-96 w-full max-w-4xl rounded-lg bg-base-100 bg-white p-6 shadow-sm shadow-xl">
        <h2 className="mb-4 text-xl font-bold">Public Competition Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              Type of Competition
            </label>
            <select
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select Type of Competition</option>
              <option value="Coding">Coding</option>
              <option value="Design">Design</option>
              <option value="Art">Art</option>
              <option value="Writing">Writing</option>
              <option value="Photography">Photography</option>
              <option value="Video">Video and Animation Challenges</option>
              <option value="Start up">Start up</option>
              <option value="Task">Task</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              Company Name
            </label>
            <input
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              Title of the Competition
            </label>
            <input
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title of the competition"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              Sub Title of the Competition
            </label>
            <input
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              type="text"
              name="subTitle"
              value={formData.subTitle}
              onChange={handleChange}
              placeholder="Sub title of the Competition"
              required

            />
          </div>

          <div className="mb-4 flex gap-6">
            <div className="w-1/2">
              <label className="text-gray-800 mb-2 block text-sm font-semibold">
                Start Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date: any) => {
                  setStartDate(date);
                  handleChange({ target: { name: "startDate", value: date } } as any);
                }}
                dateFormat="MMMM d, yyyy"
                className="text-gray-800 w-full rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              required
              />
            </div>
            <div className="w-1/2">
              <label className="text-gray-800 mb-2 block text-sm font-semibold">
                End Date
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date: any) => {
                  setEndDate(date);
                  handleChange({ target: { name: "endDate", value: date } } as any);
                }}
                dateFormat="MMMM d, yyyy"
                className="text-gray-800 w-full rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
                minDate={startDate}
                name="endDate"
                required

              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              Number of Maximum Participants
            </label>
            <input
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              type="number"
              name="maxParticipants"
              value={formData.maxParticipants}
              onChange={handleChange}
              placeholder="Number of participants"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              Description of the Competition
            </label>
            <textarea
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              rows={4}
              maxLength={2000} // Larger limit for more extensive text
              style={{ resize: "vertical", maxHeight: "300px" }}
              name="description"
              value={formData.description}
              onChange={handleTextareaChange}
              placeholder="Details of Prizes or Recognition for Winners"
              required >
              </textarea>
              

            
          </div>

          <div className="flex justify-end">
            <button
              className="button3"
              style={{ backgroundColor: "#52AB98" }}
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContestForm;
