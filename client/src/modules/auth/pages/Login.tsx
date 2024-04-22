

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/store/authSlice.tsx'; // Import the action to set credentials
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '@/layouts/client/components/Header';
import { validateSession } from '@/utils/auth'
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  useEffect(() => {
    const checkAuth = async () => {
      const authData = await validateSession();
      if (authData.isAuthenticated) {
        dispatch(setCredentials({ user: authData.user }));
      } else {
        // dispatch(clearCredentials());
      }
    };

    checkAuth();
  }, [dispatch]);

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post('http://localhost:8000/api/users/login', { email, password });
      // Dispatch action to store user and token
      dispatch(setCredentials({
        token: response.data.token,
        user: { email } // You can expand this object to include more user details
      }));
      // Optionally save the token in localStorage
      console.log("User Logged in Successfully");

      localStorage.setItem('token', response.data.token);
    } catch (error: any) {
      console.error('Login error:', error.response?.data || error.message);
      // Optionally handle error, show user a login error
    }
  };

  return (
    <div className="h-full w-full">
      <Header isLoggedin={false} />
      <div className="mx-auto max-w-md">
        <div className="container1">
          <form onSubmit={handleLogin}>
            <div className="title">Log In to Vie Hub</div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username/Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-container">
              <button type="submit" className="login-button">Login</button>
            </div>          </form>
          <div className="separator">
            <div className="separator-line"></div>
            <div className="separator-text">or</div>
            <div className="separator-line"></div>
          </div>
          <div>
          <button className="google-button">
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
            <p className="p-5">
              Don't have a Viehub account? <Link to="/host">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

