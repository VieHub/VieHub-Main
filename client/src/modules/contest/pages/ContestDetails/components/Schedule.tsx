import { useOutletContext } from "react-router-dom";

const Schedule = () => {
  //   const data = useOutletContext();
  const data: { startDate?: string; endDate?: string } = useOutletContext();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="Schedule-text mb-8 mt-8 text-3xl font-bold text-black">
        Schedule
      </h1>
      <h1 className="my-4 text-2xl font-bold text-white">Schedule</h1>
      <div className="Fifth-details-section grid grid-cols-1 gap-4 border border-black p-4 sm:grid-cols-3">
        <h3 className="Schedule break-words text-center font-bold text-black sm:text-left">
          Schedule
        </h3>
        <h3 className="BEGINS break-words text-center font-bold text-black">
          BEGINS
        </h3>
        <h3 className="ENDS break-words text-center font-bold text-black sm:text-right">
          ENDS
        </h3>
      </div>
      <div className="Fifth-details-section grid grid-cols-1 gap-4 border border-black p-4 sm:grid-cols-3">
        <h3 className="Schedule break-words text-center font-bold text-black sm:text-left">
          Submissions
        </h3>
        <h3 className="BEGINS break-words text-center font-bold text-black">
          {data?.startDate}
        </h3>
        <h3 className="ENDS break-words text-center font-bold text-black sm:text-right">
          {data?.endDate || ""}
        </h3>
      </div>
      <div className="Fifth-details-section mb-12 grid grid-cols-1 gap-4 border border-black p-4 sm:grid-cols-3">
        <h3 className="Schedule break-words text-center font-bold text-black sm:text-left">
          Winners Announced
        </h3>
        <h3 className="BEGINS break-words text-center font-bold text-black"></h3>
        <h3 className="ENDS break-words text-center font-bold text-black sm:text-right">
          {/* {data?.winnersAnnouncementDate} */}
        </h3>
      </div>
    </div>
  );
};

export default Schedule;
