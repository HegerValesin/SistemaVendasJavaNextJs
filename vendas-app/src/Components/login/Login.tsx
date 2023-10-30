'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export function Login() {
  const { register, handleSubmit } = useForm()

  function handleSignIn(data: any) {
    console.log(data)
  }

  return (
    <div className="h-full w-full justify-center bg-[url('../assets/img/4.jpg')] bg-cover  px-6 py-12 brightness-75 lg:px-8">
      <div className="flex flex-1 flex-col items-center justify-center bg-white bg-opacity-80 px-6 py-12 sm:mx-auto sm:w-full sm:max-w-sm lg:px-8 ">
        <div className="bg-blue-700 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-white">
            UHS
          </h2>
          <h6 className="text-center font-bold leading-9 tracking-tight text-white">
            Unichristus Health System
          </h6>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handleSignIn)}>
            <div>
              <label
                htmlFor="user"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nome
              </label>
              <div className="mt-1">
                <input
                {...register('user')}
                  id="user"
                  name="user"
                  type="text"
                  autoComplete="Nome do usuário"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Senha
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  {...register('password')}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="Digite sua senha"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Acessar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
