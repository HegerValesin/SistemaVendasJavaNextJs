/* eslint-disable no-unused-vars */
'use client'

import React, { useState } from 'react'
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
  BsSearch,
  BsPersonPlus,
  BsGear,
  BsPeople,
} from 'react-icons/bs'

import {
  AiFillEnvironment,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineSchedule,
  AiOutlineLine,
} from 'react-icons/ai'
import { FaMicroscope, FaSyringe } from 'react-icons/fa'
import { FaPersonHarassing } from 'react-icons/fa6'
import { PiTooth } from 'react-icons/pi'
import { RiDashboardFill } from 'react-icons/ri'
import Link from 'next/link'

export default function SideNavbar(): React.JSX.Element {
  const [ open, setOpen ] = useState(true)
  const [submenuCadastro, setSubmenuCadastro] = useState(false)
  const [submenuAgenda, setSubmenuAgenda] = useState(false)
  const [submenuSuporte, setSubmenuSuporte] = useState(false)
  const [submenuProficional, setSubmenuProficional] = useState(false)
  const [openCEF, setOpenCEF] = useState(false)
  const [openCEO, setOpenCEO] = useState(false)
  const [openCES, setOpenCES] = useState(false)
  const [openLaboratorio, setOpenlaboratorio] = useState(false)

  return (
    <>
      <nav
        className={`${
          open ? 'w-96' : 'w-24'
        } relative z-10 flex flex-wrap items-center justify-between px-6 py-4 shadow-xl md:bottom-0 md:left-0 md:top-0 md:block md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto`}
      >
        <BsArrowLeftShort
          className={`absolute -right-0 top-9 cursor-pointer rounded-full border bg-white text-3xl text-blue-800 ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        {/* UHS */}
        <div className="max-h-screen bg-cover ">
          {/* DashBoard */}
          <ul className={`pt-2 `}>
            <li
              key={1}
              className={`mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-50 hover:bg-blue-800`}
            >
              <span className={`float-left block text-lg`}>
                <RiDashboardFill onClick={() => setOpen(!open)} />
              </span>
              <a href="/">
                  <span
                    className={`flex-1 text-sm font-medium ${!open && 'hidden'}`}
                  >
                    UHS - Saúde
                  </span>
              </a>
            </li>
          </ul>
          {/* Cadastro */}
          <ul className={`pt-1`}>
            <li key={2}
              className={`mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-50 hover:bg-gray-400 ${
                submenuCadastro ? 'bg-gray-400' : 'bg-gray-200'
              }`}
              onClick={() => setSubmenuCadastro(!submenuCadastro)}
            >
              <span className={`float-left block text-lg leading-6 capitalize pl-1`}>
                <AiOutlineFileText onClick={() => setOpen(!open)} />
              </span>
              <span className={`flex-1 relative left-1.5 text-sm font-medium ${!open && 'hidden'}`}
              >
                Cadastros
              </span>
              <BsChevronDown className={`${submenuCadastro && 'rotate-180'}`}
                onClick={() => {
                  setSubmenuCadastro(!submenuCadastro)
                  setSubmenuAgenda(false)
                  setSubmenuProficional(false)
                  setSubmenuSuporte(false)
                }}
              />
            </li>
            {/* Agenda */}
            <ul
              className={`${!open && 'hidden'} ${
                !submenuCadastro && 'hidden'
              } bg-gray-200`}
            >
              <li
                key={1}
                className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-gray-300 p-2 px-3 text-xs text-gray-50 hover:bg-gray-400 `}
              >
                <span className={`float-left ml-3 block text-xs leading-6 capitalize pl-1`}>
                  <AiOutlineSchedule
                    onClick={() => setSubmenuAgenda(!submenuAgenda)}
                  />
                </span>
                <span
                  className={`flex-1 relative left-1.5 text-xs font-medium ${!open && 'hidden'}`}
                  onClick={() => setSubmenuAgenda(!submenuAgenda)}
                >
                  Agenda
                </span>
                <BsChevronDown
                  className={`${submenuAgenda && 'rotate-180'}`}
                  onClick={() => {
                    setSubmenuAgenda(!submenuAgenda)
                    setSubmenuProficional(false)
                    setSubmenuSuporte(false)
                  }}
                />
              </li>
              <ul>
                <li
                  key={1}
                  className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-3 text-xs text-gray-50 hover:bg-gray-400 ${
                    !submenuAgenda && 'hidden'
                  }`}
                >
                  <span className={`float-left ml-4 block text-xs`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Proficional
                  </span>
                </li>
                <li
                  key={2}
                  className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-3 text-xs text-gray-50 hover:bg-gray-400 ${
                    !submenuAgenda && 'hidden'
                  }`}
                >
                  <span className={`float-left ml-4 block text-xs`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Agendamento
                  </span>
                </li>
                <li
                  key={3}
                  className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-3 text-xs text-gray-50 hover:bg-gray-400 ${
                    !submenuAgenda && 'hidden'
                  }`}
                >
                  <span className={`float-left ml-4 block text-xs`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Calendário de Feriados
                  </span>
                </li>
                <li
                  key={4}
                  className={`mb-4 flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-3 text-xs text-gray-50 hover:bg-gray-400 hover:grow ${
                    !submenuAgenda && 'hidden'
                  }`}
                >
                  <span className={`float-left ml-4 block text-xs`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Tipos de Atendimentos
                  </span>
                </li>
              </ul>
            </ul>
            {/* Cadastro Pacientes */}
            <ul
              className={`${!open && 'hidden'} ${!submenuCadastro && 'hidden'}`}
            >
              <li
                key={2}
                className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-gray-300 p-2 px-3 text-xs text-gray-50 hover:bg-gray-400 `}
              >
                <span className={`float-left ml-3 block text-xs leading-6 capitalize pl-1`}>
                  <BsPersonPlus />
                </span>
                <Link href="/cadastro/pacientes">
                  <span className={`flex-1 relative left-1.5 text-xs font-medium ${!open && 'hidden'}`}>
                    Cadastro de Pacientes
                  </span>
                </Link>
              </li>
            </ul>
            {/* Cadastro de Proficional */}
            <ul
              className={`${!open && 'hidden'} ${
                !submenuCadastro && 'hidden'
              } bg-gray-200`}
            >
              <li
                key={3}
                className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-gray-300 p-2 px-3 text-xs text-gray-50 hover:bg-gray-400`}
              >
                <span className={`float-left ml-3 block text-xs leading-6 capitalize pl-1`}>
                  <BsPeople />
                </span>
                <Link href="/cadastro/produtos" className='flex-1 text-xs font-medium'>
                    <span
                      className={`flex-1 relative left-1.5 text-xs font-medium ${!open && 'hidden'}`}
                    >
                      Cadastro de Proficional
                    </span>
                </ Link>
                <BsChevronDown
                  className={`${submenuProficional && 'rotate-180'} `}
                  onClick={() => {
                    setSubmenuProficional(!submenuProficional)
                    setSubmenuAgenda(false)
                    setSubmenuSuporte(false)
                  }}
                />
              </li>
              <ul className={`${!submenuProficional && 'hidden'}`}>
                <li
                  key={1}
                  className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 text-sm text-gray-50 hover:bg-gray-400`}
                >
                  <span className={`float-left ml-4 block text-xs`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}> Anos </span>
                </li>
                <li
                  key={2}
                  className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 text-sm text-gray-50 hover:bg-blue-800`}
                >
                  <span className={`float-left ml-4 block text-xs`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Especialidades
                  </span>
                </li>
                <li
                  key={3}
                  className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 text-sm text-gray-50 hover:bg-blue-800 `}
                >
                  <span className={`float-left ml-4 block text-xs`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Orgão Emissor Profissional
                  </span>
                </li>
                <li
                  key={4}
                  className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 text-sm text-gray-50 hover:bg-blue-800 `}
                >
                  <span className={`float-left ml-4 block text-xs`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Procedimentos
                  </span>
                </li>
                <li
                  key={5}
                  className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 text-sm text-gray-50 hover:bg-blue-800 `}
                >
                  <span className={`float-left ml-4 block text-xs`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Orgão Emissor Profissional
                  </span>
                </li>
                <li
                  key={6}
                  className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 text-sm text-gray-50 hover:bg-blue-800 `}
                >
                  <span className={`float-left ml-4 block text-xs`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Orgão Emissor Profissional
                  </span>
                </li>
                <li
                  key={7}
                  className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 text-sm text-gray-50 hover:bg-blue-800 `}
                >
                  <span className={`float-left ml-4 block text-xs`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Orgão Emissor Profissional
                  </span>
                </li>
              </ul>
            </ul>
            {/* Suporte */}
            <ul
              className={`${!open && 'hidden'} ${
                !submenuCadastro && 'hidden'
              } bg-gray-200`}
            >
              <li
                key={4}
                className={`flex cursor-pointer items-center gap-x-4 rounded-md bg-gray-300 p-2 px-3 text-sm text-gray-50 hover:bg-gray-400 `}
              >
                <span className={`float-left ml-3 block text-base`}>
                  <BsGear
                    onClick={() => {
                      setSubmenuSuporte(!submenuSuporte)
                      setSubmenuAgenda(false)
                      setSubmenuProficional(false)
                    }}
                  />
                </span>
                <span
                  className={`flex-1 text-xs font-medium ${!open && 'hidden'}`}
                  onClick={() => {
                    setSubmenuSuporte(!submenuSuporte)
                    setSubmenuAgenda(false)
                    setSubmenuProficional(false)
                  }}
                >
                  Suporte
                </span>
                <BsChevronDown
                  className={`${submenuSuporte && 'rotate-180'}`}
                  onClick={() => {
                    setSubmenuSuporte(!submenuSuporte)
                    setSubmenuAgenda(false)
                    setSubmenuProficional(false)
                  }}
                />
              </li>
              <ul className={`${!submenuSuporte && 'hidden'}`}>
                <li
                  key={1}
                  className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 text-sm text-gray-50 hover:bg-blue-800 `}
                >
                  <span className={`float-left block text-sm`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Forma de Pagamento
                  </span>
                </li>
                <li
                  key={2}
                  className={`mb-4 mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 ps-6 text-sm text-gray-50 hover:bg-blue-800 `}
                >
                  <span className={`float-left block text-sm`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Orgão Emissor Profissional
                  </span>
                </li>
                <li
                  key={3}
                  className={`mb-4 mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 ps-6 text-sm text-gray-50 hover:bg-blue-800 `}
                >
                  <span className={`float-left block text-sm`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Procedimentos
                  </span>
                </li>
                <li
                  key={4}
                  className={`mb-4 mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 ps-6 text-sm text-gray-50 hover:bg-blue-800 `}
                >
                  <span className={`float-left block text-sm`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Orgão Emissor Profissional
                  </span>
                </li>
                <li
                  key={5}
                  className={`mb-4 mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 ps-6 text-sm text-gray-50 hover:bg-blue-800 `}
                >
                  <span className={`float-left block text-sm`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Orgão Emissor Profissional
                  </span>
                </li>
                <li
                  key={6}
                  className={`mb-4 mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 px-5 ps-6 text-sm text-gray-50 hover:bg-blue-800 `}
                >
                  <span className={`float-left block text-sm`}>
                  </span>
                  <span className={`flex-1 text-xs font-medium`}>
                    Orgão Emissor Profissional
                  </span>
                </li>
              </ul>
            </ul>
          </ul>
          {/* Clinica Escola (CEF) */}
          <ul className={`pt-1`}>
            <li
              key={3}
              className={`mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-50 hover:bg-gray-400 ${
                openCEF ? 'bg-gray-400' : 'bg-gray-200'
              }`}
              onClick={() => setOpenCEF(!openCEF)}
            >
              <span className={`float-left block text-2xl`}>
                <FaPersonHarassing onClick={() => setOpen(!open)} />
              </span>
              <span
                className={`flex-1 text-lg font-medium ${!open && 'hidden'}`}
              >
                Fisioterapia (CEF)
              </span>
              <BsChevronDown
                className={`${openCEF && 'rotate-180'}`}
                onClick={() => setOpenCEF(!openCEF)}
              />
            </li>
          </ul>
          {/* Clinica Escola (CEO) */}
          <ul className={`pt-1`}>
            <li
              key={4}
              className={`mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-50 hover:bg-gray-400 ${
                openCEO ? 'bg-gray-400' : 'bg-gray-200'
              }`}
              onClick={() => setOpenCEO(!openCEO)}
            >
              <span className={`float-left block text-2xl`}>
                <PiTooth onClick={() => setOpen(!open)} />
              </span>
              <span
                className={`flex-1 text-lg font-medium ${!open && 'hidden'}`}
              >
                Odontologia (CEO)
              </span>
              <BsChevronDown
                className={`${openCEO && 'rotate-180'}`}
                onClick={() => setOpenCEO(!openCEO)}
              />
            </li>
          </ul>
          {/* Clinica Escola (CES) */}
          <ul className={`pt-1`}>
            <li
              key={5}
              className={`mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-50 hover:bg-gray-400 ${
                openCES ? 'bg-gray-400' : 'bg-gray-200'
              }`}
              onClick={() => setOpenCES(!openCES)}
            >
              <span className={`float-left block text-2xl`}>
                <FaSyringe onClick={() => setOpen(!open)} />
              </span>
              <span
                className={`flex-1 text-lg font-medium ${!open && 'hidden'}`}
              >
                Clínica de Saúde (CES)
              </span>
              <BsChevronDown
                className={`${openCES && 'rotate-180'}`}
                onClick={() => setOpenCES(!openCES)}
              />
            </li>
          </ul>
          {/* Laboratórios */}
          <ul className={`pt-1`}>
            <li
              key={6}
              className={`mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-50 hover:bg-gray-400 ${
                openLaboratorio ? 'bg-gray-400' : 'bg-gray-200'
              }`}
              onClick={() => setOpenlaboratorio(!openLaboratorio)}
            >
              <span className={`float-left block text-2xl`}>
                <FaMicroscope onClick={() => setOpen(!open)} />
              </span>
              <span
                className={`flex-1 text-lg font-medium ${!open && 'hidden'}`}
              >
                Laboratórios
              </span>
              <BsChevronDown
                className={`${openLaboratorio && 'rotate-180'}`}
                onClick={() => setOpenlaboratorio(!openLaboratorio)}
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
