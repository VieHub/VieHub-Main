import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
};
// console.log(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Set the persistence to local to maintain authentication across sessions
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence is set to local");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });
const db = getFirestore(firebaseApp);

export { auth, db };
