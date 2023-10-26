import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/v1/check-auth/mtls_or_jwt", () => {
    return HttpResponse.json({
      auth: "mtls", // Toggle between 'jwt', 'mtls', etc.
    });
  }),
  http.get("/api/v1/check-auth/validuser", () => {
    return HttpResponse.json({
      isValidUser: true,
      callsign: "janne",
    });
  }),
  http.get("/api/v1/check-auth/validuser/admin", () => {
    return HttpResponse.json({
      isAdmin: false,
    });
  }),
];
