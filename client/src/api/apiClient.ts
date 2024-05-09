// src/api/apiClient.ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL as string,
});

function getToken() {
    const data = localStorage.getItem(
        "firebase:authUser:AIzaSyAiDbrNKNLcwKTdtH63tCy_3n-geNFO5OY:[DEFAULT]",
    );
    const user = JSON.parse(data || ""); // Provide a default value for data
    return user.stsTokenManager.accessToken;
    
//   return null; // Ensure you handle the null case appropriately
}
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.error("No token available");
    }
    return config;
  },
  (error) => {
    console.error("Error in request:", error);
    return Promise.reject(error);
  },
);

export default api;
