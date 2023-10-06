import { UseMutationOptions, useMutation } from "react-query";


interface Response {
  callsign: string,
  approvecode: string,
  jwt: string
}

async function initEnrollment({callsign, invite_code}: {callsign: string, invite_code: string}) {
  const res = await fetch('/api/v1/enrollment/invitecode/enroll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ callsign, invite_code })
  });
  console.log("body1:", JSON.stringify({ callsign, invite_code }))
  console.log("body2:", '{"callsign":"Aasd1234","invite_code":"AHIK002L"}')

  console.log(res)
  if (res.status !== 200) {
    throw new Error('Failed to login as admin');
  }
  const data = await res.json() as Response;
  console.log(data)
  return data
}

type UseInitEnrollmentOptions = UseMutationOptions<Response, Error, {callsign: string, invite_code: string}, unknown>

export function useInitEnrollment(options?: UseInitEnrollmentOptions) {
  return useMutation(initEnrollment, options);
}