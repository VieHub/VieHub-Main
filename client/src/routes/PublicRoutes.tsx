import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/layouts/dashboard/Index";
import loginRoutes from "@/modules/auth/routes";
import dashboardRoutes from "@/modules/home/routes";
import HostRoutes from "@/modules/host/routes";
import ContestRoutes from "@/modules/contest/routes";
import PublicForm from "@/modules/host/pages/PublicContest/routes";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
  {
    element: <AuthRoutes />,
    children: [...PrivateRoutes],
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [...dashboardRoutes, ...loginRoutes,...ContestRoutes],
  },
  {
    path: "/host",
    element: <Dashboard />,
    children: [...HostRoutes],
  },
  {
    path: "/host/PublicHost",
    element: <Dashboard />,
    children: [...PublicForm],
  },
]);
export default router;
