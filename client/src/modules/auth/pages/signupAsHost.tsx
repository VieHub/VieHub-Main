import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Header from "@/layouts/client/components/Header";
import { createHostUserData } from "@/constants/signupData";
import { useAuth } from "@/contexts/AuthContext.tsx";
import { getErrorMessage } from "@/utils/errorHandling";

const SignupAsHost: React.FC = () => {
  const auth = useAuth(); // This might be null or AuthContextType
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyPhone: "",
    companyAddress: "",
    companyEmail: "",
    password: "",
    confirmPassword: "",
    industry: "",
    role: "Host",
  });
  const [feedback, setFeedback] = useState({ message: "", type: "" }); // For feedback messages

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setFeedback({ message: "Passwords do not match", type: "error" });
      return;
    }

    if (!auth) {
      console.error("Authentication context is not available.");
      return;
    }

    try {
      const userData = createHostUserData(formData);
      console.log(userData);
      await auth.signup(userData);
      setFeedback({
        message: "You have signed up successfully",
        type: "success",
      });
    } catch (error: any) {
      console.error("Signup error:", error);
      const friendlyMessage = getErrorMessage(error.code);
      setFeedback({ message: friendlyMessage, type: "error" });
    }
  };
  return (
    <div className="h-full w-full">
      <Header isLoggedin={false} />
      <div className="signup-container">
        <div className="signup-form">
          <h2>Sign Up to Host a Contest</h2>
          <form onSubmit={handleSubmit}>
            {/* Input fields updated to include value and onChange */}
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="companyPhone"
                  placeholder="Company Phone"
                  value={formData.companyPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="companyAddress"
                  placeholder="Company Address"
                  value={formData.companyAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="companyEmail"
                  placeholder="Company Email"
                  value={formData.companyEmail}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group" style={{ width: "80%" }}>
                <input
                  type="text"
                  name="industry"
                  placeholder="Industry/Field of Operation"
                  value={formData.industry}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label>
                <input type="checkbox" id="agreedToTerms" />
                <span>
                  {" "}
                  Yes, I understand and agree to the Vie hub Terms of Service,
                  including the User Agreement and Privacy Policy.
                </span>
              </label>
            </div>
            <div className="button-container">
              <button type="submit">Create my account</button>
            </div>
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
            <button className="custom-button">
              <svg viewBox="0 0 488 512" height="20" width="40">
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign up with Google
            </button>
          </div>
          <p className="p-5">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupAsHost;
