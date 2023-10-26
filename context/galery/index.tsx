"use client"

import { createContext } from "react";

type galeryContext = {}

const GaleryContext = createContext({})

type GaleryProviderProps = {
  children: React.ReactNode
}

export function GaleryProvider({ children }:GaleryProviderProps) {
  return (
    <GaleryContext.Provider value={{}}>
      {children}
    </GaleryContext.Provider>
  )
}