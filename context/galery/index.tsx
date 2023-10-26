"use client"

import { image } from "@/entities/image";
import { createContext, useContext, useState } from "react";

type galeryContext = {
  galery: image[]
  addImage: (image:image) => void
}

const GaleryContext = createContext<galeryContext>({
  galery: [],
  addImage: () => {}
})

type GaleryProviderProps = {
  children: React.ReactNode
}

export function GaleryProvider({ children }:GaleryProviderProps) {
  const [galery, setGalery] = useState<image[]>([])

  const addImage = (image:image) => {
    setGalery(previous => [...previous, image])
  }

  return (
    <GaleryContext.Provider value={{ galery, addImage }}>
      {children}
    </GaleryContext.Provider>
  )
}

export function useGalery() {
  return useContext(GaleryContext)
}