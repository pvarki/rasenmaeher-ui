import { UseMutationOptions, useMutation } from "react-query";

async function checkCode(code: string) {
  const result = await Promise.all([
    checkAdminCode(code),
    checkEnrollmentCode(code),
  ]);

  return {
    isAdminCodeValid: result[0],
    isEnrollmentCodeValid: result[1],
  } as CodeCheckResult;
}

interface CheckAdminCodeResponse {
  code_ok: boolean;
}

async function checkAdminCode(code: string) {
  const query = new URLSearchParams({
    temp_admin_code: code,
  });
  const res = await fetch("/api/v1/firstuser/check-code?" + query.toString());
  const data = (await res.json()) as CheckAdminCodeResponse;
  return data?.code_ok ?? false;
}

interface CheckEnrollmentCodeResponse {
  invitecode_is_active: boolean;
}

async function checkEnrollmentCode(code: string) {
  const query = new URLSearchParams({
    invitecode: code,
  });
  const res = await fetch("/api/v1/enrollment/invitecode?" + query.toString());
  const data = (await res.json()) as CheckEnrollmentCodeResponse;
  return data?.invitecode_is_active ?? false;
}

interface CodeCheckResult {
  isEnrollmentCodeValid: boolean;
  isAdminCodeValid: boolean;
}
type UseCheckInviteCodeOptions = UseMutationOptions<
  CodeCheckResult,
  Error,
  string,
  unknown
>;

export function useCheckCode(options?: UseCheckInviteCodeOptions) {
  return useMutation(checkCode, options);
}
