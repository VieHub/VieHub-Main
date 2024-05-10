import React, { useState, FormEvent } from "react";

import { Link, useNavigate } from "react-router-dom";
import Header from "@/layouts/client/components/Header";
import { useAuth } from "@/contexts/AuthContext.tsx";
import { getErrorMessage } from "@/utils/errorHandling"; // Assuming this function is properly exported from the utilities

const Login: React.FC = () => {
  const auth = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [feedback, setFeedback] = useState({ message: "", type: "" }); // For feedback messages
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignInWithGoogle = async () => {
    try {
      setIsLoading(true);
      await auth?.loginWithGoogle();
      setIsLoading(false);
      navigate("/host");
    } catch (error: any) {
      setIsLoading(false);
      console.error("Signup error:", error);
      const friendlyMessage = getErrorMessage(error.code);
      setFeedback({ message: friendlyMessage, type: "error" });
    }
  };
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!auth) {
      console.error("Authentication context is not available.");
      setFeedback({
        message: "Authentication service is unavailable",
        type: "error",
      });
      return;
    }

    try {
      // Use the login method from AuthContext
      setIsLoading(true); // Set loading state to true when login starts

      await auth.login(formData.email, formData.password);
      console.log("You have logged in successfully");
      setFeedback({
        message: "You have logged in successfully",
        type: "success",
      });

      navigate("/host");
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error.message);
      setIsLoading(false); // Set loading state to true when login starts

      const friendlyMessage = getErrorMessage(error.code || error.message);
      setFeedback({ message: friendlyMessage, type: "error" });
    }
  };

  return (
    <div className="h-full w-full">
      <Header  />
      <div className="mx-auto max-w-md">
        <div className="container1">
          <form onSubmit={handleLogin}>
            <div className="title">Log In to Vie Hub</div>
            <div className="input-box">
              <input
                type="text"
                name="email"
                placeholder="Username/Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit" className="login-button">
                Login
              </button>

              {/* <span className="loading loading-spinner loading-sm"></span> */}
            </div>{" "}
            {isLoading && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
          </form>
          {feedback.message && (
            <div
              style={{ color: feedback.type === "success" ? "green" : "red" }}
            >
              {feedback.message}
            </div>
          )}
          <div className="separator">
            <div className="separator-line"></div>
            <div className="separator-text">or</div>
            <div className="separator-line"></div>
          </div>
          <div>
            <button className="google-button" onClick={handleSignInWithGoogle}>
              <svg viewBox="0 0 488 512" height="20" width="40">
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Login with Google
            </button>
            <p className="p-5">
              Don't have a Viehub account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
