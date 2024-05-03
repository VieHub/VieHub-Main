// withAuth.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

// Extend T with JSX.IntrinsicAttributes to allow for keys, refs, etc.
function withAuth<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>,
) {
  return (props: T) => {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      // Redirect if auth is initialized and no user is logged in

      if (auth?.isAuthInitialized && auth.user === null) {
        console.log("Redirecting to /");
        navigate("/");
      }
    }, [auth?.user, auth?.isAuthInitialized, navigate]);

    // Render nothing or a minimal loading screen until auth is initialized
    // if (!auth?.isAuthInitialized) {
    //   return <div>Loading...</div>;
    // }

    // Render the wrapped component with all its props
    return <Component {...props} />;
  };
}

export default withAuth;
