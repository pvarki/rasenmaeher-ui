import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserType } from "./useUserType";

interface AuthData {
  auth: string;
}

interface ValidUserData {
  isValidUser: boolean;
  callsign: string;
}

export function RootRedirector() {
  const navigate = useNavigate();
  const { userType, isLoading, error } = useUserType();

  useEffect(() => {
    if (isLoading) return;

    if (error) {
      navigate("/error");
      return;
    }

    async function handleRedirection() {
      const authResponse = await fetch("/api/v1/check-auth/mtls_or_jwt");
      if (!authResponse.ok) throw new Error("Failed to fetch auth data");
      const authData = (await authResponse.json()) as AuthData;

      let validUserResponse: Response;
      let validUserData: ValidUserData;

      switch (authData.auth) {
        case "mtls":
          if (userType === "admin") {
            navigate("/app/admin");
          } else if (userType === "user") {
            validUserResponse = await fetch("/api/v1/check-auth/validuser");
            if (!validUserResponse.ok)
              throw new Error("Failed to fetch valid user data");
            validUserData = (await validUserResponse.json()) as ValidUserData;
            navigate(`/app/users/${validUserData.callsign}`);
          }
          break;
        case "jwt":
          validUserResponse = await fetch("/api/v1/check-auth/validuser");
          if (!validUserResponse.ok)
            throw new Error("Failed to fetch valid user data");
          validUserData = (await validUserResponse.json()) as ValidUserData;
          if (validUserData.isValidUser) {
            navigate("/login/createmtls");
          } else {
            navigate("/login");
          }
          break;
        default:
          navigate("/login");
          break;
      }
    }

    void handleRedirection();
  }, [userType, isLoading, error, navigate]);

  return null;
}
