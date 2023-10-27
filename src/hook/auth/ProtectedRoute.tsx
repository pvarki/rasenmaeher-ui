import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserType } from "./useUserType";
import { determineRedirectPath } from "./determineRedirectPath";

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
  const { userType, isLoading, error, authType, isValidUser, callsign } =
    useUserType();
  const location = useLocation();
  const currentPath = location.pathname;

  if (isLoading) return null;
  if (error) return <Navigate to="/error" />;

  const targetPath = determineRedirectPath(
    authType,
    isValidUser,
    callsign,
    userType,
    currentPath,
  );

  // If the user is trying to access a protected route and does not meet the criteria, redirect
  if (currentPath !== targetPath) return <Navigate to={targetPath} />;

  // From here, handle the other route protections:
  if (requireAuthType && authType !== requireAuthType)
    return <Navigate to="/login" />;
  if (requireValidUser && !isValidUser && !callsign)
    return <Navigate to="/login/callsign" />;
  if (requireValidUser && !isValidUser && callsign)
    return <Navigate to="/login/enrollment" />;
  if (
    userType &&
    allowedUserTypes.length &&
    !allowedUserTypes.includes(userType)
  )
    return <Navigate to={targetPath} />;

  return <>{children}</>;
}
