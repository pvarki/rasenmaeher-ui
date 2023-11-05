import { UseMutationOptions, useMutation } from "react-query";

interface ApproveUserResponse {
  success: boolean;
}

async function approveUser({
  callsign,
  approvalCode,
}: {
  callsign: string;
  approvalCode: string;
}) {
  const res = await fetch("/api/v1/enrollment/accept" + callsign, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ callsign, approvecode: approvalCode }),
  });
  if (res.status !== 200) {
    throw new Error("Failed to login as admin");
  }

  const data = (await res.json()) as ApproveUserResponse;

  if (!data.success) {
    throw new Error("Failed to approve user");
  }
}

type useApproveUserOptions = UseMutationOptions<
  void,
  Error,
  { callsign: string; approvalCode: string },
  unknown
>;

export function useApproveUser(options?: useApproveUserOptions) {
  return useMutation(approveUser, options);
}
