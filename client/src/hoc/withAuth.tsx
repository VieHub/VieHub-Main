import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useUserData } from "@/hooks/useUserData";

function withAuth<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>,
) {
  return (props: T) => {
    const auth = useAuth();
    const navigate = useNavigate();
    const {
      data: user,
      isLoading,
      isError,
    } = useUserData(auth?.user?.uid ?? "default-user-id");

    useEffect(() => {
      if (auth?.isAuthInitialized && !auth.user) {
        // No user logged in
        console.log("Redirecting to login because no auth user");
        navigate("/login");
      } else if (auth?.user && !isLoading && !isError) {
        // User is logged in and user data has been fetched
        if (user && user.role === "Host" && auth.user) {
          navigate("/host");
        } else if (user && user.role === "Participant") {
          navigate("/contest");
        }
      }
    }, [auth, navigate, user, isLoading, isError]);

    // Render nothing or a minimal loading screen until auth is initialized and user data is loaded
    // if (!auth?.isAuthInitialized || isLoading) {
    //   return <div></div>;
    // }

    // if (isError) {
    //   return <div>Error loading user data.</div>;
    // }

    // Render the wrapped component with all its props
    return <Component {...props} />;
  };
}

export default withAuth;
