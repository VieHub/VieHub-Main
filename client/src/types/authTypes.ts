interface AuthContextType {
    user: any;  // Consider specifying a more detailed type here instead of `any`
    login: (email: string, password: string) => Promise<void>;
    signupAsHost: (userData: any) => Promise<void>;  // Specify detailed type for userData
    signupAsParticipant: (userData: any) => Promise<void>;  // Specify detailed type for userData
    logout: () => void;
  }
  