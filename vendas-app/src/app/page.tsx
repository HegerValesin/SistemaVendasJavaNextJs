import { Login } from "Components/login/Login";

export default function Home() {
  const isAuthenticated = true;
  

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <h1>Nosso sistema</h1>
  )
}
