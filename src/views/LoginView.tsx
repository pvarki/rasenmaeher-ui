import { useEffect, useMemo, useState } from "react"
import { useMutation, useQuery, UseMutationOptions } from "react-query"
import { useLocation, useNavigate, useParams } from "react-router-dom"





function useFirstUserIsActive() {
  return useQuery('firstUserIsActive', async () => {
    const request = await fetch('/api/v1/firstuser/is-active')
    const data = await request.json()
    return data.api_is_active
  })
}

function useCheckCode(options: UseMutationOptions) {
  return useMutation({
    ...(options as unknown as any),
    mutationKey: 'checkCode',
    mutationFn: async (token: string) => {
      const request = await fetch('/api/v1/firstuser/check-code?' + new URLSearchParams({
        temp_admin_code: token,
    }))
      const data = await request.json()
      return data
    },
  } as any)
}


function useLocalToken() {
  return useMemo(() => localStorage.getItem('token'), [])
}

function useQueryParams() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export function LoginView() {
  const navigate = useNavigate()

  const { data, isLoading } = useFirstUserIsActive()
  const { mutate } = useCheckCode({
    onSuccess: (data) => {
      if (data?.code_ok) {
        localStorage.setItem('token', token)
        navigate('/app')
      }
    }
  })

  const params = useQueryParams()
  const localToken = localStorage.getItem('token')

  if (localToken) {
    console.log("navigate to app")
    navigate('/app')
  }

  const [token, setToken] = useState(params.get('token') ?? '')


  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Login</h1>
      <p>First user is active: {data ? 'true' : 'false'}</p>
      <input type="text" name="token" value={token} onChange={(e) => setToken(e.target.value)} className="border-2"/>
      <button onClick={() => mutate(token)} className="bg-slate-500">Use token</button>
    </div>
  )
}


