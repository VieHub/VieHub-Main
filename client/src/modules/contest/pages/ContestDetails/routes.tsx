import { Navigate } from "react-router-dom";
import ContestDetails from "./contestDetails";
import Rules from "./components/rules";
import Overview from "./components/Overview";
import Schedule from "./components/Schedule";

const contestData = {
  agreement: true,
  company: "test",
  criteria: "test",
  description: "test",
  endDate: "test",
  host_uid: "7V0gAtDgHSci9OM2air8elP3Txg1",
  id: "1d6cfcd5-05bf-4202-8b18-c8a305971215",
  image_url:
    "https://storage.googleapis.com/fastapiauth-d3407.appspot.com/contests/1d6cfcd5-05bf-4202-8b18-c8a305971215/Screenshot%202024-04-09%20213721.png",
  maxParticipants: 5,
  participants: [],
  prizeDetails: "test",
  requirements: "test",
  rules: "test",
  startDate: "test",
  subTitle: "test",
  title: "test",
  type: "test",
  whatToBuild: "test",
};
export default [
  {
    path: ":id",
    element: <ContestDetails />,
    name: "ContestDetails",
    children: [
      {
        path: "overview",
        element: <Overview contestData={contestData} />, // Pass data directly if needed
        name: "Overview",
      },
      {
        path: "rules",
        element: <Rules contestData={contestData} />, // Pass data directly if needed
        name: "Rules",
      },
      {
        path: "schedule",
        element: <Schedule contestData={contestData} />, // Pass data directly if needed
        name: "Schedule",
      },
      {
        path: "",
        element: <Navigate to="overview" />,
        name: "Default",
      },
    ],
  },
];
