import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CreateContestData } from "@/types/apiSchemas";
import { formatDate } from "@/utils/dateUtils";

const Schedule: React.FC<{ 
  contestData: CreateContestData; 
  onSave: (updatedData: CreateContestData) => void 
}> = ({
  contestData,
  onSave,
}) => {
  const contextData = useOutletContext<CreateContestData>();
  const initialData = contextData || contestData;
  const [editableData, setEditableData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditableData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editableData);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="Schedule-text mb-8 mt-8 text-3xl font-bold text-black">Schedule</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-center text-xl font-bold">Schedule</th>
              <th className="text-center text-xl font-bold">BEGINS</th>
              <th className="text-center text-xl font-bold">ENDS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center text-lg font-bold">Submissions</td>
              <td className="text-center text-lg font-bold">
                <input
                  type="text"
                  name="startDate"
                  value={formatDate(editableData.startDate)} // Format the date here
                  onChange={handleChange}
                  className="text-black focus:outline-none"
                />
              </td>
              <td className="text-center text-lg font-bold">
                <input
                  type="text"
                  name="endDate"
                  value={formatDate(editableData.endDate)} // Format the date here
                  onChange={handleChange}
                  className="text-black focus:outline-none"
                />
              </td>
            </tr>
            <tr>
              <td className="text-center text-lg font-bold">Winners Announced</td>
              <td className="text-center text-lg font-bold"></td>
              <td className="text-center text-lg font-bold">
                <input
                  type="text"
                  name="winnersAnnouncementDate"
                  // value={formatDate(editableData.winnersAnnouncementDate)} // Uncomment this if needed
                  onChange={handleChange}
                  className="text-black focus:outline-none"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end p-4">
        <button onClick={handleSave} className="rounded bg-blue-500 px-4 py-2 text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default Schedule;
