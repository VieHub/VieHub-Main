import { createBrowserRouter } from "react-router-dom";
import loginRoutes from "@/modules/auth/routes";
import dashboardRoutes from "@/modules/home/routes";
import HostRoutes from "@/modules/host/routes";
import ContestRoutes from "@/modules/contest/routes";
import PublicForm from "@/modules/host/pages/PublicContest/routes";
import PrivateForm from "@/modules/host/pages/PrivateContest/routes";
import ProfileRoutes from "@/modules/profile/routes"
import AuthRoutes from "./AuthRoutes";
import ContestDetailsRoutes from "@/modules/contest/pages/ContestDetails/routes";
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
    children: [...dashboardRoutes, ...loginRoutes, ...ContestRoutes,...ProfileRoutes],
  },
  {
    path: "/host",
    element: <ClientLayout />,
    children: [...HostRoutes],
  },
  {
    path: "/host/publichost",
    element: <ClientLayout />,
    children: [...PublicForm],
  },

  {
    path: "/host/privatehost",
    element: <ClientLayout />,
    children: [...PrivateForm],
  },
  {
    path: "/contest",
    element: <ClientLayout />,
    children: [...ContestDetailsRoutes],
  },
]);
export default router;
