type AuthType = "mtls" | "jwt" | null;
type UserType = "admin" | "user" | null;

export function determineRedirectPath(
  authType: AuthType,
  otpVerified: boolean,
  isValidUser: boolean,
  userType: UserType,
  callsign: string | null,
  currentPath: string,
): string {
  // If there's no authentication type set yet, we should consider OTP verification and callsign.
  if (!authType) {
    // If OTP is verified, check if callsign is set or not.
    if (otpVerified) {
      if (!callsign) return "/login/callsign";
      else if (userType === "admin") return "/login/createmtls";
    } else {
      // If OTP is not verified, redirect to login.
      return "/login";
    }
  }

  // If JWT is the auth type, manage the redirection based on user validity and type.
  if (authType === "jwt") {
    if (!isValidUser && userType === "user") return "/login/enrollment";
    else if (userType === "admin") return "/login/createmtls";
    // If user is valid and not an admin, direct them to the default logged-in user path.
    else return "/";
  }

  // If MTLS is the auth type, handle admin-specific redirection.
  if (authType === "mtls") {
    // If the user is not valid, redirect to an error page.
    if (!isValidUser) return "/error";

    // Admin-specific redirection
    if (userType === "admin") {
      // If the user is already on a sub-route of "/app/admin", don't redirect.
      if (currentPath.startsWith("/app/admin")) return currentPath;

      return "/app/admin/";
    }

    // User-specific redirection
    if (userType === "user" && callsign) {
      const userPath = `/app/users/${callsign}`;
      if (currentPath.startsWith(userPath)) return currentPath;
      return userPath;
    }

    // Default redirect for MTLS authenticated users.
    return "/";
  }

  // Handle unexpected cases by redirecting to the login page.
  return "/login";
}
