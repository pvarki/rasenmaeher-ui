import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthResponse {
  auth: "jwt" | "mtls" | string;
}

interface ValidUserResponse {
  isValidUser: boolean;
  callsign?: string;
}

interface AdminResponse {
  isAdmin: boolean;
}

export function RootRedirector() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkAuthenticationStatus() {
      try {
        const authResponse = await fetch("/api/v1/check-auth/mtls_or_jwt");
        const data = (await authResponse.json()) as AuthResponse;

        if (data.auth === "jwt") {
          navigate("/login/createmtls");
        } else if (data.auth === "mtls") {
          const validUserResponse = await fetch("/api/v1/check-auth/validuser");
          const validUserData =
            (await validUserResponse.json()) as ValidUserResponse;

          if (validUserData.isValidUser) {
            const adminResponse = await fetch(
              "/api/v1/check-auth/validuser/admin",
            );
            const adminData = (await adminResponse.json()) as AdminResponse;

            if (adminData.isAdmin) {
              navigate("/app/admin");
            } else if (validUserData.callsign) {
              navigate(`/app/users/${validUserData.callsign}`);
            }
          } else {
            navigate("/login/createmtls");
          }
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error checking authentication status:", error);
        navigate("/error");
      } finally {
        setIsLoading(false);
      }
    }

    void checkAuthenticationStatus();
  }, [navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return null;
}
