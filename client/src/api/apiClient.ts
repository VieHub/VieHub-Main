import axios from "axios";

// Set up the primary baseURL and a fallback devUrl
const baseURL = import.meta.env.VITE_APP_BASE_URL;
const devUrl = import.meta.env.VITE_APP_DEV_URL;

const api = axios.create({
  baseURL: baseURL as string,
});

function getToken() {
  const data = localStorage.getItem(
    "firebase:authUser:AIzaSyAiDbrNKNLcwKTdtH63tCy_3n-geNFO5OY:[DEFAULT]",
  );
  if (!data) {
    console.warn("No user data available in local storage.");
    return null;
  }

  const user = JSON.parse(data);
  if (user?.stsTokenManager?.accessToken) {
    return user.stsTokenManager.accessToken;
  } else {
    console.warn("No access token available.");
    return null;
  }
}

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor to retry with devUrl if the request fails
api.interceptors.response.use(undefined, async (error) => {
  const originalRequest = error.config;
  // Check if the retry flag is true and the request did not already retry with devUrl
  if (!originalRequest._retry && devUrl) {
    originalRequest._retry = true; // mark the request to indicate it has been retried
    originalRequest.baseURL = devUrl; // change baseURL to devUrl for retry
    return api(originalRequest); // retry the request with the new baseURL
  }
  return Promise.reject(error);
});

export default api;
