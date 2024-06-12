import { Navigate } from "react-router-dom";
import ContestDetails from "./contestDetails";

import Rules from "./components/rules";
import Overview from "./components/Overview";
import Schedule from "./components/Schedule";

export default [
  {
    path: ":id/:access_key?", // access_key is optional
    element: <ContestDetails />,
    name: "ContestDetails",
    children: [
      {
        path: "overview",
        element: <Overview />,
        name: "Overview",
      },
      {
        path: "rules",
        element: <Rules />,
        name: "Rules",
      },
      {
        path: "schedule",
        element: <Schedule />,
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
