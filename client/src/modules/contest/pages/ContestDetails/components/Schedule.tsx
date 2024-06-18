import { useOutletContext } from "react-router-dom";
import { CreateContestData } from "@/types/apiSchemas";
import { formatDate } from "@/utils/dateUtils";

const Schedule: React.FC<{}> = ({}) => {
  const contextData = useOutletContext<CreateContestData>();
  const data = contextData;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="Schedule-text mb-8 mt-8 text-3xl font-bold text-black">
        Schedule
      </h1>
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
                {formatDate(data.data.startDate)}
              </td>

              <td className="text-center text-lg font-bold">
                {formatDate(data.data.endDate)}
              </td>
            </tr>
            <tr>
              <td className="text-center text-lg font-bold">
                Winners Announced
              </td>
              <td className="text-center text-lg font-bold"></td>
              <td className="text-center text-lg font-bold">
                {/* {data?.winnersAnnouncementDate} */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
