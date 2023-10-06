import { useEffect, useMemo, useState } from "react"
import { useMutation, useQuery, UseMutationOptions } from "react-query"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Navbar } from "../components/Header"

import pvarkiLogo from '../assets/pvarki.png'
import { useCheckInviteCode } from "../hook/api/firstuser/useGetInviteCode"
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { useLoginAsAdmin } from "../hook/api/firstuser/useLoginAsAdmin"


const TOKEN_REGEX = /^[A-Z0-9]{10,}$/
const CALLSIGN_REGEX = /^[a-zA-Z0-9]{3,}$/


function useLocalToken() {
  return useMemo(() => localStorage.getItem('token'), [])
}

function useQueryParams() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}



export function LoginView() {

  const [isTokenValid, setIsTokenValid] = useState(false)

  return (
    <div className="h-screen">
      <Navbar />
      {!isTokenValid ? <TokenStep setIsTokenValid={setIsTokenValid}/> : <CallsignStep />}
    </div>
  )
}

interface TokenStepProps {
  setIsTokenValid: (isValid: boolean) => void
}

function TokenStep({setIsTokenValid}: TokenStepProps) {

  const params = useQueryParams()

  const [token, setToken] = useState(params.get('token') ?? '')
  const { mutate: checkInviteCode, isLoading  } = useCheckInviteCode({
    onSuccess: (isTokenOk) => {
      if (isTokenOk) {
        console.log("Token OK")
        setIsTokenValid(true)
      } else {
        console.log("Token not OK")
      }
    }
  })

  const isValid = useMemo(() => TOKEN_REGEX.test(token), [token])

  return (
    <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
    <img className="h-32" src={pvarkiLogo}/>
    <InfoTitle>Kirjaudu palveluun käyttäen kertakäyttö koodia</InfoTitle>
    <InstanceName >metsa-kota</InstanceName>
    <form className="flex flex-col items-center gap-3 w-full">
      <label className="flex flex-col gap-3 w-full">
        <span className="text-white">Kertakäyttö koodi</span>
        <input
          className="bg-gray-100 w-full p-2 rounded-lg"
          type="text"
          name="token"
          placeholder="Kertakäyttö koodi"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        {!isValid && <span className="text-red-500">Koodi on virheellinen</span>}
      </label>
      <button
        className="bg-green-500 w-full text-white font-bold p-2 rounded-lg"
        type="submit"
        disabled={!isValid || isLoading}
        onClick={() => checkInviteCode(token)}
      >Kirjaudu</button>
    </form>
  </main>
  )
}

function CallsignStep() {

  const [callsign, setCallsign] = useState('')

  const { mutate: loginAsAdmin, isLoading  } = useLoginAsAdmin({
    onSuccess: (jwt) => {
      console.log("JWT", jwt)
    }
  })

  const isValid = useMemo(() => CALLSIGN_REGEX.test(callsign), [callsign])

  return (
    <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
    <InfoTitle>Olet käyttämässä kertakäyttösen kirjautumiskoodin. Jatketaanko kirjautumista?</InfoTitle>
    <InstanceName >metsa-kota</InstanceName>
    <form className="flex flex-col items-center gap-3 w-full">
  <label className="flex flex-col gap-3 w-full">
    <span className="text-white">Käyttätunnus</span>
    <input
      className="bg-gray-100 w-full p-2 rounded-lg"
      type="text"
      name="token"
      value={callsign}
      onChange={(e) => setCallsign(e.target.value)}
    />
    {!isValid && <span className="text-red-500">Koodi on virheellinen</span>}
  </label>
  <button
    className="bg-green-500 w-full text-white font-bold p-2 rounded-lg"
    type="submit"
    disabled={!isValid || isLoading}
    onClick={() => loginAsAdmin(callsign)}
  >Kirjaudu</button>
</form>
  </main>
  )
}


function InfoTitle({children}: {children: React.ReactNode}) {
  return (
    <h1
      className="text-white text-center font-oswald font-bold text-2xl"
    >{children}</h1>
  )
}


function InstanceName({children}: {children: React.ReactNode}) {
  return (
    <h1
      className="text-white text-center font-oswald font-bold text-3xl"
    >{children}</h1>
  )
}


