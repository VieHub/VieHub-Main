import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
//import "./SignUpForm.css"; // Import your CSS file

const SignupAsHost: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up to Host a Contest</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Company Name" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Company Phone" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Company Address" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Company Email" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirm Password" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group" style={{ width: "80%" }}>
              <input type="text" placeholder="Industry/Field of Operation" />
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
        <div className="separator">
          <div className="separator-line"></div>
          <div className="separator-text">or</div>
          <div className="separator-line"></div>
        </div>
        <div className="px-6 sm:px-0 max-w-sm">
          <button type="button" className="custom-button">
            <svg
              className="icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              height="20"
              width="40"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign up with Google
          </button>
        </div>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupAsHost;