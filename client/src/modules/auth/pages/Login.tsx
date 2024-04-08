import React from "react";
import { Link } from "react-router-dom";

//import "./LoginForm.css";
import Header from "@/layouts/client/components/Header";

const Login: React.FC = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="mx-auto max-w-md">
        <div className="container">
          <div className="title">Log In to Vie Hub</div>
          <div className="input-box">
            <input type="text" placeholder="Username/Email" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" />
          </div>
          <button className="login-button">Log In</button>
          <div className="separator">
            <div className="separator-line"></div>
            <div className="separator-text">or</div>
            <div className="separator-line"></div>
          </div>
          <div className="custom-button-container">
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
            <p>
              Don't have a Viehub account? <Link to="/host">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
