import Home from "./pages/Home";
import Host from "@/modules/host/pages/host";

export default [
  {
    path: "/",
    element: <Home />,
    name: "VieHub",
  },
  {
    path: "host",
    element: <Host />,
    name: "VieHub",
  },
];
