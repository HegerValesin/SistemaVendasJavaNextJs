import Image from 'next/image'
import { Signin } from 'app/api/minicomponents/Singin' 

import Logo from '../../assets/img/Logo.png'

export default function Navbar() {
  return (
    <>
      <div className="relative m-0 flex h-20 w-full items-center justify-between text-white">
        <div className="w-1/6 ">
          <Image
            src={Logo}
            alt="Logo unichristus"
            width={592}
            height={280}
            className={`float-left ml-4 mr-2 block h-10 cursor-pointer rounded text-2xl duration-500`}
          />
        </div>
        <div
          className={`ml-6 flex w-1/3 justify-center gap-4 rounded-2xl bg-blue-900 p-2 text-center`}
        >
        <h2>UHS - UNICHRISTUS HEALTH SYSTEM</h2>
        </div>
        <div className={`mr-6 justify-between`}>
          <Signin />
        </div>
      </div>
    </>
  )
}
