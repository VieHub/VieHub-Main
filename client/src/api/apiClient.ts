import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL as string,
});

function getToken() {
  // Attempt to retrieve the authentication data from local storage
  const data = localStorage.getItem(
    "firebase:authUser:AIzaSyAiDbrNKNLcwKTdtH63tCy_3n-geNFO5OY:[DEFAULT]",
  );

  if (!data) {
    console.warn("No user data available in local storage.");
    return null; // Return null if no data is found
  }

  const user = JSON.parse(data);
  if (user?.stsTokenManager?.accessToken) {
    return user.stsTokenManager.accessToken;
  } else {
    console.warn("No access token available.");
    return null; // Return null if the token is not found in the parsed data
  }
}

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // If no token, the Authorization header is not set but the request still goes through
    return config;
  },
  (error) => {
    console.error("Error in request:", error);
    return Promise.reject(error);
  },
);

export default api;
