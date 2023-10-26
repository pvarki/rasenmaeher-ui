import { createContext, useState, useEffect } from "react";

interface AuthResponse {
  auth: "mtls" | string;
}

interface ValidUserResponse {
  isValidUser: boolean;
}

interface AdminResponse {
  isAdmin: boolean;
}

interface UserTypeContextProps {
  userType: 'admin' | 'user' | null;
  isLoading: boolean;
  error: string | null;
}

export const UserTypeContext = createContext<UserTypeContextProps>({
  userType: null,
  isLoading: true,
  error: null,
});

export function UserTypeFetcher({ children }: { children: React.ReactNode }) {
  const [userType, setUserType] = useState<'admin' | 'user' | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserType() {
      try {
        const response = await fetch("/api/v1/check-auth/mtls_or_jwt");
        const authData = await response.json() as AuthResponse;

        if (authData.auth === "mtls") {
          const userResponse = await fetch("/api/v1/check-auth/validuser");
          const validUserData = await userResponse.json() as ValidUserResponse;

          if (validUserData.isValidUser) {
            const adminResponse = await fetch("/api/v1/check-auth/validuser/admin");
            const adminData = await adminResponse.json() as AdminResponse;
            setUserType(adminData.isAdmin ? 'admin' : 'user');
          }
        }
      } catch (err) {
        if (err instanceof Error) { // Type check before using
          setError(err.message); 
        } else {
          setError("An error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    }

    void fetchUserType();
  }, []);

  return (
    <UserTypeContext.Provider value={{ userType, isLoading, error }}>
      {children}
    </UserTypeContext.Provider>
  );
}