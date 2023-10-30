import Navbar from 'Components/static/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideNavbar from 'Components/static/SideNavbar'
import SessionProviderWrapper from './api/util/sessionProviderWrapper'
import Footer from 'Components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sistema de Vendas',
  description: 'Sistema de vendas para clientes',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = true;

  
  if (!isAuthenticated) {
    return (
      <html lang="en" className="h-full w-full bg-white">
        <body
          className={`h-full w-full bg-white font-sans`}
        >
          <main className="h-full w-full ">{children}</main>
        </body>
      </html>
    )
  }

  return (
    <SessionProviderWrapper>
    <html lang="en" className="h-full overflow-x-hidden overflow-y-hidden">
      <body
        className={` h-full w-full`}
      >
        <main
          className={`h-full bg-[url('../assets/img/bg.jpg')] bg-cover bg-center`}
        >
          <div>
            <Navbar />
          </div>
          <div className="flex h-full w-full">
            <SideNavbar />
            <div className="w-full mr-2 overflow-auto">
              {children}
            <div>
              <Footer />
            </div>
            </div>
          </ div>
        </main>
      </body>
    </html>
    </SessionProviderWrapper>
  )
}
