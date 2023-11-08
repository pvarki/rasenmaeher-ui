import { UseMutationOptions, useMutation } from "react-query";

interface RejectUserResponse {
  success: boolean;
  detail?: { msg: string }[];
}

async function rejectUser({ callsign }: { callsign: string }) {
  const res = await fetch("/api/v1/enrollment/lock", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ callsign }),
  });

  const data = (await res.json()) as RejectUserResponse;

  if (res.status !== 200) {
    const errorMessage = data.detail?.[0].msg || "Failed to reject user";
    throw new Error(errorMessage);
  }

  if (!data.success) {
    throw new Error("Failed to reject user");
  }
}

type UseRejectUserOptions = UseMutationOptions<
  void,
  Error,
  { callsign: string },
  unknown
>;

export function useRejectUser(options?: UseRejectUserOptions) {
  return useMutation(rejectUser, options);
}
