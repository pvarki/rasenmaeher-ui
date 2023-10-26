import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserType } from './useUserType';

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
      case 'admin':
        navigate("/app/admin");
        break;
      case 'user':
        navigate("/app/users");
        break;
      default:
        navigate("/login");
        break;
    }
  }, [userType, isLoading, error, navigate]);

  return null;
}
