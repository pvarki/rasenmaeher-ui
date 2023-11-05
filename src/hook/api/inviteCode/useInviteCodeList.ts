import { UseQueryOptions, useQuery } from "react-query";

export interface InviteCodeItem {
  invitecode: string;
  active: true;
  owner_cs: string;
  created: string;
}

interface InviteCodeListResponse {
  pools: InviteCodeItem[];
}

async function getInviteCodeList() {
  const jwt = localStorage.getItem("token");

  const res = await fetch("/api/v1/enrollment/pools", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status !== 200) {
    throw new Error("Failed to login as admin");
  }

  const data = (await res.json()) as InviteCodeListResponse;

  return data.pools;
}

type UseInviteCodeOptions = UseQueryOptions<
  InviteCodeItem[],
  Error,
  InviteCodeItem[],
  "inviteCodeList"
>;

export function useInviteCodeList(options?: UseInviteCodeOptions) {
  return useQuery("inviteCodeList", () => getInviteCodeList(), options);
}
