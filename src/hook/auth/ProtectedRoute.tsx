import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserType } from "./useUserType";

interface Props {
  children: React.ReactNode;
  allowedUserTypes: Array<"admin" | "user">;
}

interface AuthData {
  auth: string;
}

export function ProtectedRoute({ children, allowedUserTypes }: Props) {
  const { userType, isLoading, error } = useUserType();
  const [authType, setAuthType] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAuthType() {
      try {
        const response = await fetch("/api/v1/check-auth/mtls_or_jwt");
        const data = (await response.json()) as AuthData;
        setAuthType(data.auth);
      } catch (err) {
        // Handle fetch error here
        console.error(err);
      }
    }

    void fetchAuthType();
  }, []);

  console.log("userType:", userType);
  console.log("authType:", authType);
  console.log("allowedUserTypes:", allowedUserTypes);

  if (isLoading) return null;

  if (error) {
    return <Navigate to="/error" />;
  }

  if (authType === "jwt" && userType === "user") {
    console.log("Redirecting to /login/enrollment");
    return <Navigate to="/login/enrollment" />;
  }

  if (userType && !allowedUserTypes.includes(userType)) {
    console.log("Inside !allowedUserTypes.includes(userType)");
    if (userType === "admin") {
      return <Navigate to="/app/admin" />;
    } else if (userType === "user") {
      return <Navigate to="/app/users/:callsign" />;
    }
  }

  // If there's no user type
  if (!userType) {
    return authType === "jwt" ? (
      <Navigate to="/login/createmtls" />
    ) : (
      <Navigate to="/login" />
    );
  }

  return <>{children}</>;
}
