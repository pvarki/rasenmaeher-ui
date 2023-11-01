import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";

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
  otpVerified: boolean;
  setOtpVerified: (verified: boolean) => void;
  redirectTo?: string | null;
  callsign: string | null;
  isValidUser: boolean;
}

export const UserTypeContext = createContext<UserTypeContextProps>({
  userType: null,
  isLoading: true,
  error: null,
  authType: null,
  otpVerified: false,
  redirectTo: null,
  callsign: null,
  isValidUser: false,
  setOtpVerified: () => {
    //placeholder
  },
});

export function UserTypeFetcher({ children }: { children: ReactNode }) {
  const [userType, setUserType] = useState<"admin" | "user" | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authType, setAuthType] = useState<"mtls" | "jwt" | null>(null);
  const [callsign, setCallsign] = useState<string | null>(null);
  const [isValidUser, setIsValidUser] = useState<boolean>(false);
  const [otpVerified, setIsOtpVerified] = useState<boolean>(false);

  const setOtpVerified = useCallback((verified: boolean) => {
    setIsOtpVerified(verified);
  }, []);

  useEffect(() => {
    async function fetchUserType() {
      try {
        const response = await fetch("/api/v1/check-auth/mtls_or_jwt");
        const authData = (await response.json()) as AuthResponse;

        if (!response.ok) {
          if (response.status !== 403) {
            throw new Error(
              `API response was not ok. Status code: ${response.status}`,
            );
          }
          setAuthType(null);
        }

        if (authData.auth === "mtls" || authData.auth === "jwt") {
          setAuthType(authData.auth);

          const validUserResponse = await fetch("/api/v1/check-auth/validuser");
          if (!validUserResponse.ok) {
            throw new Error(
              `API response was not ok. Status code: ${validUserResponse.status}`,
            );
          }

          const validUserData =
            (await validUserResponse.json()) as ValidUserResponse;

          setIsValidUser(validUserData.isValidUser);
          setCallsign(validUserData.callsign);

          if (validUserData.isValidUser) {
            const adminResponse = await fetch(
              "/api/v1/check-auth/validuser/admin",
            );
            if (!adminResponse.ok) {
              throw new Error(
                `API response was not ok. Status code: ${adminResponse.status}`,
              );
            }

            const adminData = (await adminResponse.json()) as AdminResponse;
            setUserType(adminData.isAdmin ? "admin" : "user");
          }
        } else {
          setAuthType(null);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(`Error: ${err.message}`);
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
        callsign,
        isValidUser,
        otpVerified,
        setOtpVerified,
      }}
    >
      {children}
    </UserTypeContext.Provider>
  );
}
