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
  console.log("rerouting: Determining redirect path...");

  // If there's no authentication type set yet, we should consider OTP verification and callsign.
  if (!authType) {
    console.log("rerouting: No authType set.");
    if (otpVerified) {
      console.log("rerouting: OTP is verified.");
      if (!callsign) {
        console.log("rerouting: No callsign. Redirecting to /login/callsign");
        return "/login/callsign";
      } else if (userType === "admin") {
        console.log(
          "rerouting: UserType is admin. Redirecting to /login/createmtls",
        );
        return "/login/createmtls";
      }
    } else {
      console.log("rerouting: OTP is not verified. Redirecting to /login");
      return "/login";
    }
  }

  if (authType === "jwt") {
    console.log("rerouting: AuthType is JWT.");
    if (!isValidUser && userType === "user") {
      console.log(
        "rerouting: User is not valid and userType is user. Redirecting to /login/enrollment",
      );
      return "/login/enrollment";
    } else if (userType === "admin") {
      console.log(
        "rerouting: UserType is admin. Redirecting to /login/createmtls",
      );
      return "/login/createmtls";
    } else {
      console.log(
        "rerouting: User is valid and not an admin. Redirecting to /",
      );
      return "/";
    }
  }

  if (authType === "mtls") {
    console.log("rerouting: AuthType is MTLS.");
    if (!isValidUser) {
      console.log("rerouting: User is not valid. Redirecting to /error");
      return "/error";
    }

    if (userType === "admin") {
      console.log("rerouting: UserType is admin.");
      if (currentPath.startsWith("/app/admin")) {
        console.log(
          "rerouting: CurrentPath is already in /app/admin. No redirection needed.",
        );
        return currentPath;
      }
      console.log("rerouting: Redirecting to /app/admin/");
      return "/app/admin/";
    }

    if (userType === "user" && callsign) {
      console.log("rerouting: UserType is user and callsign is set.");
      const userPath = `/app/users/${callsign}`;
      if (currentPath.startsWith(userPath)) {
        console.log(
          "rerouting: CurrentPath is already in userPath. No redirection needed.",
        );
        return currentPath;
      }
      console.log(`rerouting: Redirecting to ${userPath}`);
      return userPath;
    }

    console.log(
      "rerouting: Default redirect for MTLS authenticated users. Redirecting to /",
    );
    return "/";
  }

  console.log("rerouting: Unexpected case encountered. Redirecting to /login");
  return "/login";
}
