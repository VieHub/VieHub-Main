// utils/auth.js
import axios from 'axios';

export const validateSession = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/users/validate_session');
    return response.data;
  } catch (error) {
    console.error('Session validation failed:', error);
    return { isAuthenticated: false };
  }
};
