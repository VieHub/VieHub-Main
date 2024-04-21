import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/layouts/dashboard/Index";
import loginRoutes from "@/modules/auth/routes";
import dashboardRoutes from "@/modules/home/routes";
import hostRoutes from "@/modules/host/routes";
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
    children: [...dashboardRoutes, ...loginRoutes, ...hostRoutes],
  },
]);
export default router;
