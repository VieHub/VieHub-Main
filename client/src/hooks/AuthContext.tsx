import { createContext } from "react";
import { User, Session } from "@supabase/supabase-js";

export interface AuthContextProps {
  session1: Session | null;
  user: User | null;
  login: (email: string, password: string) => Promise<any | null>;
  signOut: () => Promise<any>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;
