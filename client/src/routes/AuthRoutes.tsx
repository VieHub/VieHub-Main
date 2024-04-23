import { Navigate, Outlet, useLocation } from "react-router-dom";
// import useAuth from "@/hooks/Context";

const AuthRoute = () => {
  const location = useLocation();
  // const { session1 } = useAuth();

  return true ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace state={{ path: location.pathname }} />
  );
};

export default AuthRoute;
