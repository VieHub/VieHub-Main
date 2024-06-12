// import Host from "./pages/host";
import PublicHost from "./pages/PublicContest/PublicHost";
import PrivateHost from "./pages/PrivateContest/Privatehost";
export default [
  {
    path: "PublicHost",
    element: <PublicHost />,
    name: "VieHub",
  },
  {
    path: "PrivateHost",
    element: <PrivateHost />,
    name: "VieHub",
  },
];
