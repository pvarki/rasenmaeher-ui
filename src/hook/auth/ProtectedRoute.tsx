import React from "react";
import { Navigate } from "react-router-dom";
import { useUserType } from "./useUserType";

interface Props {
  children: React.ReactNode;
  allowedUserTypes?: Array<"admin" | "user">;
  requireAuthType?: "jwt" | "mtls";
  requireValidUser?: boolean;
}

export function ProtectedRoute({
  children,
  allowedUserTypes = [],
  requireAuthType,
  requireValidUser = false,
}: Props) {
  const { userType, isLoading, error, authType, isValidUser } = useUserType();

  // If data is still loading, return null (or some loader component)
  if (isLoading) return null;

  // If there's an error fetching user data, navigate to the error page
  if (error) return <Navigate to="/error" />;

  // Check for authentication type restriction
  if (requireAuthType && authType !== requireAuthType) {
    return <Navigate to="/login" />;
  }

  // Check if user needs to be valid
  if (requireValidUser && !isValidUser) {
    return <Navigate to="/login" />;
  }

  // Check user type restriction
  if (
    userType &&
    allowedUserTypes.length &&
    !allowedUserTypes.includes(userType)
  ) {
    if (userType === "admin") {
      return <Navigate to="/app/admin" />;
    } else if (userType === "user") {
      return <Navigate to="/app/users/:callsign" />;
    }
  }

  // If there's no user type, determine the redirection based on authType
  if (!userType) {
    return authType === "jwt" ? (
      <Navigate to="/login/createmtls" />
    ) : (
      <Navigate to="/login" />
    );
  }

  return <>{children}</>;
}
