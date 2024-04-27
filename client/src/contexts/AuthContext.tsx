import  { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth, db } from '@/firebase-config'; // Importing from the firebase-config file
import 'firebase/firestore';
import { createHostUserData, createParticipantUserData } from '@/constants/signupData';
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';

// Define the type for the context value
interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<User>;
  signup: (formData: any, role: string) => Promise<User>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null); // Provide the initial value type

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return () => unsubscribe();
  }, []);

  const signup = async (formData: any, role: string) => {
    try {
      const userData = role === 'Host' ? createHostUserData(formData) : createParticipantUserData(formData);
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      console.log(userData.email)
      // Ensure db is properly initialized with a Firestore instance
      if (!db) {
        throw new Error("Firestore database not initialized.");
      }
  
      // Specify the correct path to the collection where you want to store user data
      const usersCollectionRef = collection(db, 'users');
  
      // Set document data for the new user
      await setDoc(doc(usersCollectionRef, userCredential.user.uid), {
        ...userData,
        uid: userCredential.user.uid
      });
      
      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };
  
  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);