import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "react-query";
import { downloadBlob } from "../../utils/downloadBlob";



async function getCertificate(callsign: string) {
  const jwt = localStorage.getItem("token");
  if (!jwt) {
    throw new Error("No JWT found");
  }

  const res = await fetch("/api/v1/enduserpfx/" + callsign, {
    method: "GET",

    headers: {
      // "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });
  if (res.status !== 200) {
    throw new Error("Failed to login as admin");
  }

  const blob = await res.blob();

  downloadBlob(blob, callsign + ".pfx");

  return blob;
}

type UseCheckInviteCodeOptions = UseMutationOptions<
  Blob,
  Error,
  string,
  unknown
>;

export function useGetCertificate(options?: UseCheckInviteCodeOptions) {
  return useMutation(getCertificate, options);
}
