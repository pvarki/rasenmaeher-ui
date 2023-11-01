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
  allowedUserTypes = [],
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

  if (isLoading) return null;
  if (error) return <Navigate to="/error" />;

  const targetPath = determineRedirectPath(
    authType,
    otpVerified,
    isValidUser,
    callsign,
    userType === "admin",
    currentPath,
  );

  console.log("Current Path:", currentPath);
  console.log("Target Path:", targetPath);

  if (currentPath !== targetPath) {
    console.log("Redirect triggered due to path mismatch");
    return <Navigate to={targetPath} />;
  }

  if (requireOtpVerified && !otpVerified) {
    console.log("Redirect triggered due to otpverified mismatch");
    return <Navigate to="/login" />;
  }

  if (requireAuthType && authType !== requireAuthType) {
    console.log("Redirect triggered due to auth type mismatch");
    return <Navigate to="/login" />;
  }

  if (requireValidUser && !isValidUser && !callsign) {
    console.log("Redirect triggered due to missing callsign for valid user");
    return <Navigate to="/login/callsign" />;
  }

  if (requireValidUser && !isValidUser && callsign) {
    console.log("Redirect triggered due to invalid user with callsign");
    return <Navigate to="/login/enrollment" />;
  }

  if (
    userType &&
    allowedUserTypes.length &&
    !allowedUserTypes.includes(userType)
  ) {
    console.log(
      "Redirect triggered due to user type not being in allowed user types",
    );
    return <Navigate to={targetPath} />;
  }

  return <>{children}</>;
}
