type AuthType = "mtls" | "jwt" | null;

export function determineRedirectPath(
  authType: AuthType,
  otpVerified: boolean,
  isValidUser: boolean,
  callsign: string | null,
  isAdmin: boolean,
  currentPath: string,
): string {
  if (!authType) {
    if (otpVerified) return "/login/callsign";
    else return "/login";
  }

  if (authType === "jwt") {
    if (!isValidUser) return "/login/enrollment";
    if (!callsign) return "/login/callsign";
    return "/login/createmtls";
  }

  if (authType === "mtls") {
    if (!isValidUser) return "/error";

    if (isAdmin) {
      // If the user is already on a sub-route of "/app/admin", don't redirect
      if (currentPath.startsWith("/app/admin")) return currentPath;

      return "/app/admin/";
    }

    if (!isAdmin && callsign) {
      const userPath = `/app/users/${callsign}`;
      if (currentPath.startsWith(userPath)) return currentPath;
      return userPath;
    }

    return "/"; // Default redirect for "mtls"
  }

  // Handle unexpected cases
  return "/login";
}
