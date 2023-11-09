import { UseMutationOptions, useMutation } from "react-query";

interface RejectUserResponse {
  success: boolean;
  detail?: { msg: string }[];
}

async function rejectUser({ callsign }: { callsign: string }) {
  // Hard-coded value for lockReason
  const lockReason = "User rejected by admin";

  const requestBody = {
    lock_reason: lockReason,
    callsign: callsign,
  };

  const res = await fetch("/api/v1/enrollment/lock", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const data = (await res.json()) as RejectUserResponse;

  if (res.status !== 200) {
    const errorMessage =
      data.detail?.map((detail) => detail.msg).join(", ") ||
      "Failed to reject user";
    throw new Error(errorMessage);
  }

  if (!data.success) {
    throw new Error("Failed to reject user");
  }

  return data; // You may adjust what you return based on your needs
}

type UseRejectUserOptions = UseMutationOptions<
  RejectUserResponse,
  Error,
  { callsign: string },
  unknown
>;

export function useRejectUser(options?: UseRejectUserOptions) {
  return useMutation(rejectUser, options);
}
