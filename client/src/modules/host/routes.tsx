// import Host from "./pages/host";
import PublicHost from "./pages/PublicContest/PublicHost";
import Privatehost from "./pages/PrivateContest/Privatehost";
export default [
  
  {
    path: "PublicHost",
    element: <PublicHost />,
    name: "VieHub",
  },
  {
    path: "Privatehost",
    element: <Privatehost />,
    name: "VieHub",
  },
];
