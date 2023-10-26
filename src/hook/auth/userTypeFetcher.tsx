import { createContext, useState, useEffect } from "react";

interface AuthResponse {
  auth: "mtls" | "jwt" | string;
}

interface ValidUserResponse {
  isValidUser: boolean;
}

interface AdminResponse {
  isAdmin: boolean;
}

interface UserTypeContextProps {
  userType: "admin" | "user" | null;
  isLoading: boolean;
  error: string | null;
  authType: "mtls" | "jwt" | null;
}

export const UserTypeContext = createContext<UserTypeContextProps>({
  userType: null,
  isLoading: true,
  error: null,
  authType: null,
});

export function UserTypeFetcher({ children }: { children: React.ReactNode }) {
  const [userType, setUserType] = useState<"admin" | "user" | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authType, setAuthType] = useState<"mtls" | "jwt" | null>(null);

  useEffect(() => {
    async function fetchUserType() {
      try {
        const response = await fetch("/api/v1/check-auth/mtls_or_jwt");
        const authData = (await response.json()) as AuthResponse;

        if (authData.auth === "mtls" || authData.auth === "jwt") {
          setAuthType(authData.auth);
        } else {
          throw new Error("Invalid auth type received from the server.");
        }

        if (authData.auth === "mtls") {
          const userResponse = await fetch("/api/v1/check-auth/validuser");
          const validUserData =
            (await userResponse.json()) as ValidUserResponse;

          if (validUserData.isValidUser) {
            const adminResponse = await fetch(
              "/api/v1/check-auth/validuser/admin",
            );
            const adminData = (await adminResponse.json()) as AdminResponse;
            setUserType(adminData.isAdmin ? "admin" : "user");
          } else {
            setUserType(null); // They have mTLS but not valid user
          }
        } else if (authData.auth === "jwt") {
          const validUserResponse = await fetch("/api/v1/check-auth/validuser");
          const validUserData =
            (await validUserResponse.json()) as ValidUserResponse;
          if (validUserData.isValidUser) {
            setUserType("user"); // They have JWT and are valid users
          } else {
            setUserType(null); // They have JWT but not valid user
          }
        } else {
          setUserType(null); // They neither have mTLS nor JWT
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    }

    void fetchUserType();
  }, []);

  return (
    <UserTypeContext.Provider value={{ userType, isLoading, error, authType }}>
      {children}
    </UserTypeContext.Provider>
  );
}
