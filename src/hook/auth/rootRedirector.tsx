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

    switch (userType) {
      case "admin":
        navigate("/app/admin");
        break;
      case "user":
        (async () => {
          try {
            const validUserResponse = await fetch(
              "/api/v1/check-auth/validuser",
            );
            const validUserData =
              (await validUserResponse.json()) as ValidUserData;

            if (validUserData.isValidUser && validUserData.callsign) {
              navigate(`/app/users/${validUserData.callsign}`);
            } else {
              navigate("/login/enrollment");
            }
          } catch (err) {
            navigate("/error");
          }
        })().catch((err) => console.error("Error fetching valid user:", err));
        break;
      default:
        (async () => {
          try {
            const authResponse = await fetch("/api/v1/check-auth/mtls_or_jwt");
            const authData = (await authResponse.json()) as AuthData;

            if (authData.auth === "jwt") {
              const validUserResponse = await fetch(
                "/api/v1/check-auth/validuser",
              );
              const validUserData =
                (await validUserResponse.json()) as ValidUserData;

              if (validUserData.isValidUser) {
                navigate("/login/createmtls");
              } else {
                navigate("/login/enrollment");
              }
            } else {
              navigate("/login");
            }
          } catch (err) {
            navigate("/error");
          }
        })().catch((err) => console.error("Error in default case:", err));
        break;
    }
  }, [userType, isLoading, error, navigate]);

  return null;
}
