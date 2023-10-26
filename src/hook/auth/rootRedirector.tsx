import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserType } from "./useUserType";

export function RootRedirector() {
  const navigate = useNavigate();
  const { userType, isLoading, error, redirectTo, callsign } = useUserType();

  useEffect(() => {
    if (isLoading) return;

    if (error) {
      navigate("/error");
      return;
    }

    if (redirectTo) {
      navigate(redirectTo);
      return;
    }

    switch (userType) {
      case "admin":
        navigate("/app/admin");
        break;
      case "user":
        if (callsign) {
          navigate(`/app/users/${callsign}`);
        } else {
          // Handle the case where callsign is null or not provided
          navigate("/login");
        }
        break;
      default:
        navigate("/login");
        break;
    }
  }, [userType, isLoading, error, navigate, redirectTo, callsign]);

  return null;
}
