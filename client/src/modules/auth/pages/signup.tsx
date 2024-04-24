import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
//import "./SignUpForm.css"; // Import your CSS file
// import Login from "../routes";
import Header from "@/layouts/client/components/Header";
import { createParticipantUserData } from '@/constants/signupData';
import { useAuth } from "@/contexts/AuthContext.tsx";

// import { createParticipantUserData } from '@/constants/signupData';

  // This might be null or AuthContextType


const Signup: React.FC = () => {

const auth = useAuth();  // This might be null or AuthContextType
const [formData, setFormData] = useState({
  firstName:'',
  lastName:'',
  phone:'',
  email:'',
  password:'',
  confirmPassword:'',
  specialization:'',
  skills:''
});
const handleChange = (event: { target: { name: any; value: any; }; }) => {
  const { name, value } = event.target;
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: value
  }));
};


const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  // Assuming the role is always "Host" for this form
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  const userData = createParticipantUserData(formData);
  // Check if auth and signupAsHost function are available
  if (auth && await auth.signup(formData, "Participant")) {
    await auth.signup(userData , "Participant");
  } else {
    console.error("Authentication context is not available or signupAsHost is not a function.");
  }    
};

  return (
    <div className="h-full w-full">
    <Header isLoggedin={false} />
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign up to Join a Contest</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group" style={{ width: "80%" }}>
              <input type="text" name="specialization" placeholder="Your field of specialization" value={formData.specialization} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group" style={{ width: "80%" }}>
              <input type="text" name="skills" placeholder="skils" value={formData.skills} onChange={handleChange}/>
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
        <div >
        <button className="custom-button">
            <svg
            
           
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

        <p className="p-5">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Signup;
