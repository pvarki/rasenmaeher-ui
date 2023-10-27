type AuthType = "mtls" | "jwt" | null;
type UserType = "admin" | "user" | null;

export function determineRedirectPath(
    authType: AuthType,
    isValidUser: boolean,
    callsign: string | null,
    userType: UserType,
    currentPath: string
): string {
    if (!authType) return "/login";
  
    if (authType === "jwt") {
      if (!isValidUser) return "/login/enrollment";
      if (!callsign) return "/login/callsign";
      return "/login/createmtls";
    }
    
    if (authType === "mtls") {
      if (!isValidUser) return "/error";
  
      if (userType === "admin") {
        // If the user is already on a sub-route of "/app/admin", don't redirect
        if (currentPath.startsWith("/app/admin")) return currentPath;
        
        // If the user is on root or on a path starting with "/login", redirect them to "/app/admin"
        if (currentPath === "/" || currentPath.startsWith("/login")) return "/app/admin/";
      }
    
      if (userType === "user" && callsign) {
        // If the user is already on their own user route, don't redirect
        const userPath = `/app/users/${callsign}`;
        if (currentPath.startsWith(userPath)) return currentPath;
        return userPath;
      }
    
      return "/";  // Default redirect for "mtls"
    }
    
    // Handle unexpected cases
    return "/login";
}
