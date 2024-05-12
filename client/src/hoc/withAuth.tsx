import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useUserData } from "@/hooks/useUserData";

function withAuth<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>,
  allowedRoles: string[], // Add this parameter to specify which roles are allowed
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
      if (!auth?.user || isError) {
        // If no user is logged in or there's an error in loading user data, redirect to login
        console.log("Redirecting to login because no auth user or error");
        navigate("/login");
        return;
      }
      if (!auth?.isAuthInitialized || isLoading) {
        // Wait until auth is initialized and loading is done to make any decision
        return;
      }

      console.log("ROLE", user.role);

      if (user && !allowedRoles.includes(user.role)) {
        // Check user role against allowedRoles
        console.log(
          "Unauthorized access attempt by user with role:",
          user.role,
        );
        navigate("/contest"); // Redirect to a safe default page
        return;
      }
    }, [auth, navigate, user, isLoading, isError, allowedRoles]);

    if (
      !auth?.isAuthInitialized ||
      isLoading ||
      (user && !allowedRoles.includes(user.role))
    ) {
      // Do not render the component until we are sure user has a correct role
      return;
    }

    // if (isError) {
    //   return <div>Error loading user data.</div>;
    // }

    // User is authenticated and authorized
    return <Component {...props} />;
  };
}

export default withAuth;
