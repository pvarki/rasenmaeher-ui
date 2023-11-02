import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserType } from "./useUserType";
import { determineRedirectPath } from "./determineRedirectPath";

interface Props {
  children: React.ReactNode;
  allowedUserTypes?: Array<"admin" | "user">;
  requireAuthType?: "jwt" | "mtls";
  requireValidUser?: boolean;
  requireOtpVerified?: boolean;
}

export function ProtectedRoute({
  children,
  allowedUserTypes = ["admin", "user"], // Assuming default to both if not provided
  requireAuthType,
  requireValidUser = false,
  requireOtpVerified = false,
}: Props) {
  const {
    userType,
    isLoading,
    error,
    authType,
    isValidUser,
    callsign,
    otpVerified,
  } = useUserType();
  const location = useLocation();
  const currentPath = location.pathname;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <Navigate to="/error" replace />;

  // Call determineRedirectPath only if userType is not null.
  let targetPath = currentPath;
  if (userType !== null) {
    targetPath = determineRedirectPath(
      authType,
      otpVerified,
      isValidUser,
      userType, // userType is 'admin' or 'user' here, null is skipped.
      callsign,
      currentPath,
    );
  }

  if (currentPath !== targetPath) {
    return <Navigate to={targetPath} replace />;
  }

  if (requireOtpVerified && !otpVerified) {
    return <Navigate to="/login" replace />;
  }

  if (requireAuthType && authType !== requireAuthType && !otpVerified) {
    return <Navigate to="/login" replace />;
  }

  if (requireValidUser && !isValidUser) {
    if (!callsign) {
      return <Navigate to="/login/callsign" replace />;
    }
    if (userType === "user") {
      return <Navigate to="/login/enrollment" replace />;
    }
  }

  // Perform user type check only if userType is not null.
  if (userType && !allowedUserTypes.includes(userType)) {
    return <Navigate to={targetPath} replace />;
  }

  return <>{children}</>;
}
