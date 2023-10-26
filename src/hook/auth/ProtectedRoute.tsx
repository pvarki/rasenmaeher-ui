import { Navigate } from "react-router-dom";
import { useUserType } from "./useUserType";

interface Props {
  children: React.ReactNode;
  allowedUserTypes: Array<"admin" | "user">;
}

export function ProtectedRoute({ children, allowedUserTypes }: Props) {
  const { userType, isLoading, error } = useUserType();

  if (isLoading) return null; // or a loading spinner

  if (error) {
    return <Navigate to="/error" />;
  }

  if (!userType || !allowedUserTypes.includes(userType)) {
    if (userType === "admin") {
      return <Navigate to="/app/admin" />;
    } else {
      return <Navigate to="/login/createmtls" />;
    }
  }

  return <>{children}</>;
}
