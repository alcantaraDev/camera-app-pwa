"use client"

import { createContext, useContext } from "react";

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

export function useGalery() {
  return useContext(GaleryContext)
}