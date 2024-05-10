import { createBrowserRouter } from "react-router-dom";
import loginRoutes from "@/modules/auth/routes";
import dashboardRoutes from "@/modules/home/routes";
import HostRoutes from "@/modules/host/routes";
import ContestRoutes from "@/modules/contest/routes";
import PublicForm from "@/modules/host/pages/PublicContest/routes";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import ClientLayout from "@/layouts/client/index";
const router = createBrowserRouter([
  {
    element: <AuthRoutes />,
    children: [...PrivateRoutes],
  },

  {
    path: "/",
    element: <ClientLayout />,
    children: [...dashboardRoutes, ...loginRoutes, ...ContestRoutes],
  },
  {
    path: "/host",
    element: <ClientLayout />,
    children: [...HostRoutes],
  },
  {
    path: "/host/PublicHost",
    element: <ClientLayout />,
    children: [...PublicForm],
  },
]);
export default router;
