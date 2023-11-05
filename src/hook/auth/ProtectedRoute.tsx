import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserType } from "./useUserType";

interface Props {
  children: React.ReactNode;
  allowedUserTypes?: Array<"admin" | "user">;
  requireAuthType?: "jwt" | "mtls" | null;
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
  console.log(`Current authType: ${authType || "null"}`);
  console.log(`Current userType: ${userType || "null"}`);
  console.log(`Current path: ${currentPath}`);

  const determineTargetPath = () => {
    if (currentPath === "/") {
      if (authType === "mtls") {
        if (userType === "admin") {
          return "/app/admin";
        } else if (userType === "user" && callsign) {
          return `/app/users/${callsign}`;
        }
      } else if (authType === "jwt" && !userType) {
        return "/login/enrollment";
      } else if (authType === "jwt" && userType) {
        return "/login/createmtls";
      }
      // If no special conditions are met, or it's jwt but with valid userType, go to the standard login
      return "/login";
    }
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
      `Required auth type is ${requireAuthType} but current auth type is ${
        requireAuthType || "jwt"
      }`,
    );
    return <Navigate to="/" replace />;
  }

  if (requireValidUser && !isValidUser) {
    console.log(
      `Valid user required but current state is ${isValidUser.toString()}`,
    );
    if (!callsign) {
      return <Navigate to="/login/callsign" replace />;
    }
    if (!isValidUser) {
      return <Navigate to="/login/enrollment" replace />;
    }
  }

  if (userType && !allowedUserTypes.includes(userType)) {
    console.log(`User type ${userType} not allowed`);
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
