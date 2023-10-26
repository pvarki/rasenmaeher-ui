import { createContext, useState, useEffect, ReactNode } from "react";

interface AuthResponse {
  auth: "mtls" | "jwt" | string;
}

interface ValidUserResponse {
  isValidUser: boolean;
  callsign: string;
}

interface AdminResponse {
  isAdmin: boolean;
}

interface UserTypeContextProps {
  userType: "admin" | "user" | null;
  isLoading: boolean;
  error: string | null;
  authType: "mtls" | "jwt" | null;
  redirectTo: string | null;
  callsign: string | null;
  isValidUser: boolean;
}

export const UserTypeContext = createContext<UserTypeContextProps>({
  userType: null,
  isLoading: true,
  error: null,
  authType: null,
  redirectTo: null,
  callsign: null,
  isValidUser: false,
});

export function UserTypeFetcher({ children }: { children: ReactNode }) {
  const [userType, setUserType] = useState<"admin" | "user" | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authType, setAuthType] = useState<"mtls" | "jwt" | null>(null);
  const [redirectTo, setRedirectTo] = useState<string | null>(null);
  const [callsign, setCallsign] = useState<string | null>(null);
  const [isValidUser, setIsValidUser] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUserType() {
      try {
        const response = await fetch("/api/v1/check-auth/mtls_or_jwt");
        const authData = (await response.json()) as AuthResponse;

        if (authData.auth === "mtls" || authData.auth === "jwt") {
          setAuthType(authData.auth);
        } else {
          // If the auth type is neither 'mtls' nor 'jwt', redirect to '/login'
          setRedirectTo("/login");
          return; // Return early to avoid further processing for invalid auth types
        }
        if (authData.auth === "mtls") {
          const userResponse = await fetch("/api/v1/check-auth/validuser");
          const validUserData =
            (await userResponse.json()) as ValidUserResponse;

          if (validUserData.isValidUser) {
            setCallsign(validUserData.callsign);
            setIsValidUser(validUserData.isValidUser);

            const adminResponse = await fetch(
              "/api/v1/check-auth/validuser/admin",
            );
            const adminData = (await adminResponse.json()) as AdminResponse;
            setUserType(adminData.isAdmin ? "admin" : "user");
          } else {
            setRedirectTo("/login/createmtls");
          }
        } else if (authData.auth === "jwt") {
          const validUserResponse = await fetch("/api/v1/check-auth/validuser");
          const validUserData =
            (await validUserResponse.json()) as ValidUserResponse;

          if (validUserData.isValidUser) {
            setCallsign(validUserData.callsign);
            setRedirectTo("/login/createmtls");
          } else {
            setRedirectTo("/login/callsign");
          }
        } else {
          setRedirectTo("/login");
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
    <UserTypeContext.Provider
      value={{
        userType,
        isLoading,
        error,
        authType,
        redirectTo,
        callsign,
        isValidUser,
      }}
    >
      {children}
    </UserTypeContext.Provider>
  );
}
