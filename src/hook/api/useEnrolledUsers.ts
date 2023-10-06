import { UseQueryOptions, useQuery } from "react-query";

enum EnrollmentState {
  PENDING = 0,
  APPROVED = 1,
  REJECTED = 2,
}

interface CallsignItem {
  approvecode: string;
  callsign: string;
  state: EnrollmentState;
}

interface EnrollmentListResponse {
  callsign_list: CallsignItem[];
}

async function getEnrolledUsers() {
  const jwt = localStorage.getItem("token");
  if (!jwt) {
    throw new Error("No JWT found");
  }
  const res = await fetch("/api/v1/enrollment/list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });
  if (res.status !== 200) {
    throw new Error("Failed to login as admin");
  }

  const data = (await res.json()) as EnrollmentListResponse;

  return data.callsign_list.filter((u) => u.state === EnrollmentState.APPROVED);
}

type UseEnrolledUsersOptions = UseQueryOptions<
  CallsignItem[],
  Error,
  CallsignItem[],
  "enrollmentList"
>;

export function useEnrolledUsers(options?: UseEnrolledUsersOptions) {
  return useQuery("enrollmentList", () => getEnrolledUsers(), options);
}
