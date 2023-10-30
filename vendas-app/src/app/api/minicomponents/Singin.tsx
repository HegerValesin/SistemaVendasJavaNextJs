'use client'
import { useSession, signIn, signOut } from "next-auth/react"

async function keycloakSessionLogOut() {
  try {
    await fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.log(err)
  }
}

export function Signin() {
  const { data: session, status } = useSession();

  if (status == "loading") {
    return  (
      <a
        href={`#`}
        className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        </div>
  
        <p className="max-w-[400px] text-sm leading-snug">
          <span>Loading... </span>
        </p>
      </a>
    )
  } else if (session) {
    return (
      <div className="flex">
          <a
          href={`#`} onClick={() => {
            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
          }}
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
          </div>

          <p className="max-w-[400px] text-sm leading-snug">
            Olá <span>{session.user?.name}</span>{" "}
          </p>
        </a>
        <button className="bg-blue-900 font-bold text-white py-1px-2 m-2 rounded border border-gray-50" 
           onClick={() => {
            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
          }}>lo</button>
    </div>
    )
  }
  
  return (
    <div className="flex">
    
        <a
          href={`#`} onClick={() => signIn('keycloak')}
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
          </div>

          <p className="max-w-[400px] text-sm leading-snug">
            <span>Entrar </span>{" "}
          </p>
        </a>
        <button className="bg-blue-900 font-bold text-white py-1px-2 rounded border border-gray-50" 
          onClick={() => signIn('keycloak')}>LI</button>
    </div>
  )
}
