import { UseMutationOptions, useMutation } from "react-query";

interface DeleteInviteCodeResponse {
  invite_code: string;
}

async function deleteInviteCode(inviteCode: string) {
  const jwt = localStorage.getItem('token');
  if (!jwt) {
    throw new Error('No JWT found');
  }

  const res = await fetch('/api/v1/enrollment/invitecode/' + inviteCode, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    },
  });

  if (res.status !== 200) {
    throw new Error('Failed to login as admin');
  }

  const data = await res.json() as DeleteInviteCodeResponse;

  return data.invite_code
}

type UseDeleteInviteCodeOptions = UseMutationOptions<string, Error, string, unknown>

export function useDeleteInviteCode(options?: UseDeleteInviteCodeOptions) {
  return useMutation(deleteInviteCode, options);
}