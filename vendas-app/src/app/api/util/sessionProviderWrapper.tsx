'use client'
import React, { ReactNode } from "react"
import { ThemeProvider } from "@material-tailwind/react";

import { SessionProvider } from "next-auth/react"
interface SessionProviderProps {
    children: ReactNode;
}

const SessionProviderWrapper = ({ children }: SessionProviderProps ) => {
    return (
        <ThemeProvider>
            <SessionProvider>
                {children}
            </SessionProvider>
        </ThemeProvider>
    )
}

export default SessionProviderWrapper