import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Basic styling

const ContestForm: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="bg-gray-100 flex h-full w-full items-center justify-center p-4 ">
      <div className="card w-96 w-full max-w-4xl rounded-lg bg-base-100 bg-white p-6 shadow-sm shadow-xl">
        <h2 className="mb-4 text-xl font-bold">Public Competition Form</h2>
        <form>
          <div className="mb-4">
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              Type of Competition
            </label>
            <select className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100">
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
              Title of the Competition
            </label>
            <input
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              type="text"
              placeholder="Title of the competition"
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              Description of the Competition
            </label>
            <input
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              type="text"
              placeholder="Description of the competition"
            />
          </div>

          <div className="mb-4 flex gap-6">
            <div className="w-1/2">
              <label className="text-gray-800 mb-2 block text-sm font-semibold">
                Start Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                dateFormat="MMMM d, yyyy"
                className="text-gray-800 w-full rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              />
            </div>
            <div className="w-1/2">
              <label className="text-gray-800 mb-2 block text-sm font-semibold">
                End Date
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date: any) => setEndDate(date)}
                dateFormat="MMMM d, yyyy"
                className="text-gray-800 w-full rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
                minDate={startDate}
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
              placeholder="Number of participants"
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800 mb-2 block text-sm font-semibold">
              Details of Prizes or Recognition for Winners
            </label>
            <input
              className="text-gray-800 w-full appearance-none rounded border px-4 py-3 leading-tight shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-100"
              type="text"
              placeholder="Details of Prizes or Recognition for Winners"
            />
          </div>

          <div className="flex justify-end">
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

export default ContestForm;
