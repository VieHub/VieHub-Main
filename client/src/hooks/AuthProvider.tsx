// import { useEffect, useState, ReactNode } from "react";
// import supabase from "../api/supabase";
// import { Session, User } from "@supabase/supabase-js";
// import AuthContext from "./AuthContext";

// interface AuthProviderProps {
//   children: ReactNode;
// }
// const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [session1, setSession1] = useState<Session | null>(null);

//   useEffect(() => {
//     const { data } = supabase.auth.onAuthStateChange(
//       (event: string, session: Session | null) => {
//         if (event === "SIGNED_IN") {
//           setUser(session?.user || null);
//           setSession1(session || null);
//         } else if (event === "SIGNED_OUT") {
//           setUser(null);
//           setSession1(null);
//         }
//       },
//     );
//     return () => {
//       data.subscription.unsubscribe();
//     };
//   }, []);

//   const login = async (email: string, password: string) => {
//     return await supabase.auth.signInWithPassword({ email, password });
//   };
//   const signOut = () => supabase.auth.signOut();

//   return (
//     <AuthContext.Provider value={{ session1, user, login, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
