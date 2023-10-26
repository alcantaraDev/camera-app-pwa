"use client"

import { GaleryProvider } from "./galery"

type GlobalProviderProps = {
  children: React.ReactNode
}

export function GlobalProvider({ children }:GlobalProviderProps) {
  return (
    <GaleryProvider>
      {children}
    </GaleryProvider>
  )
}