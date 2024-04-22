import React, { useState, FormEvent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "@/layouts/client/components/Header";
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/store/authSlice.tsx'; // Import the action to set credentials
const SignupAsHost: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [industry, setIndustry] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Assuming the role is always "Host" for this form
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const userData = {
      email: companyEmail,
      password: password,
      role: "Host",
      first_name: firstName,
      last_name: lastName,
      company_name: companyName,
      company_phone: companyPhone,
      company_address: companyAddress,
      industry: industry
    };

    try {
      const response = await axios.post('http://localhost:8000/api/users/signup', userData);
      dispatch(setCredentials({
        token: response.data.token,
        user: userData.email  // You can expand this object to include more user details
      }));
      // Optionally save the token in localStorage

      localStorage.setItem('token', response.data.token);
      console.log("Account creation successful:", response.data);
      // You might want to redirect the user or handle next steps here
    } catch (error: any) {
      console.error("Error creating account:", error.response?.data || error.message);
      // Handle errors here, e.g., display error message to the user
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
                <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Company Phone" value={companyPhone} onChange={e => setCompanyPhone(e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Company Address" value={companyAddress} onChange={e => setCompanyAddress(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Company Email" value={companyEmail} onChange={e => setCompanyEmail(e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group" style={{ width: "80%" }}>
                <input type="text" placeholder="Industry/Field of Operation" value={industry} onChange={e => setIndustry(e.target.value)} />
              </div>
            </div>
            <div>
              <label>
                <input type="checkbox" id="agreedToTerms" />
                <span> Yes, I understand and agree to the Vie hub Terms of Service, including the User Agreement and Privacy Policy.</span>
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

export default SignupAsHost;

