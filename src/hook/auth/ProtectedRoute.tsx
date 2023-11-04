import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserType } from "./useUserType";

interface Props {
  children: React.ReactNode;
  allowedUserTypes?: Array<"admin" | "user">;
  requireAuthType?: "jwt" | "mtls";
  requireValidUser?: boolean;
  requireOtpVerified?: boolean;
}

export function ProtectedRoute({
  children,
  allowedUserTypes = ["admin", "user"],
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

  // Debugging logs
  console.log(`Current authType: ${authType}`);
  console.log(`Current userType: ${userType}`);
  console.log(`Current path: ${currentPath}`);

  const determineTargetPath = () => {
    if (currentPath === "/") {
      if (authType === "mtls") {
        if (userType === "admin") {
          return "/app/admin";
        } else if (userType === "user" && callsign) {
          return `/app/users/${callsign}`;
        }
      }
      // If no special conditions are met, stay at '/'
      return "/";
    }
    // For other paths, let the normal flow handle the redirection
    return currentPath;
  };

  const targetPath = determineTargetPath();
  console.log(`Target path: ${targetPath}`);

  if (isLoading) {
    console.log("Loading...");
    return <div>Loading...</div>;
  }

  if (error) {
    console.log("Error encountered");
    return <Navigate to="/error" replace />;
  }

  if (currentPath !== targetPath) {
    console.log(`Redirecting to target path: ${targetPath}`);
    return <Navigate to={targetPath} replace />;
  }

  // Additional conditions for redirecting
  if (requireOtpVerified && !otpVerified) {
    console.log("OTP verification required but not verified");
    return <Navigate to="/login" replace />;
  }

  if (requireAuthType && authType !== requireAuthType) {
    console.log(
      `Required auth type is ${requireAuthType} but current auth type is ${authType}`,
    );
    return <Navigate to="/login" replace />;
  }

  if (requireValidUser && !isValidUser) {
    console.log(`Valid user required but current state is ${isValidUser}`);
    if (!callsign) {
      return <Navigate to="/login/callsign" replace />;
    }
    if (userType === "user") {
      return <Navigate to="/login/enrollment" replace />;
    }
  }

  if (userType && !allowedUserTypes.includes(userType)) {
    console.log(`User type ${userType} not allowed`);
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}
