import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/v1/check-auth/mtls_or_jwt", () => {
    return HttpResponse.json({
      auth: "none", // Toggle between 'jwt', 'mtls', etc.
    });
  }),
  http.get("/api/v1/check-auth/validuser", () => {
    return HttpResponse.json({
      isValidUser: false,
      callsign: "janne",
    });
  }),
  http.get("/api/v1/check-auth/validuser/admin", () => {
    return HttpResponse.json({
      isAdmin: false,
    });
  }),
  http.get(
    "https://mtls.localmaeher.pvarki.fi:4439//api/v1/check-auth/mtls",
    () => {
      return new HttpResponse(null, { status: 201 });
    },
  ),
];
