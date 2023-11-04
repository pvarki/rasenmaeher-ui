import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";

interface AuthResponse {
  type: "mtls" | "jwt";
  userid: string;
  payload: {
    CN: string;
  };
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
  setOtpVerified: () => {
    //placeholder
  },
  redirectTo: null,
  callsign: null,
  isValidUser: false,
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
        if (response.status === 403) {
          setAuthType(null);
        } else if (response.ok) {
          const authData = (await response.json()) as AuthResponse;
          setAuthType(authData.type);

          // Perform additional user checks only if the user is authenticated
          if (authData.type) {
            const validUserResponse = await fetch(
              "/api/v1/check-auth/validuser",
            );
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
          }
        } else {
          throw new Error(
            `API response was not ok. Status code: ${response.status}`,
          );
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
        otpVerified,
        setOtpVerified,
        redirectTo: null, // This seems to be not used, ensure to implement or remove this if not needed
        callsign,
        isValidUser,
      }}
    >
      {children}
    </UserTypeContext.Provider>
  );
}
