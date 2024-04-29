// import Host from "./pages/host";
import PublicHost from "./pages/PublicHost";
import Privatehost from "./pages/Privatehost";
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
