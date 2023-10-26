"use client"

import { useGalery } from "@/context/galery"

export function Galery() {
  const { galery } = useGalery()

  return (
    <div className="w-full grid grid-cols-2 gap-2 p-4">
      {
        galery.map(image => (
          <div className="w-full h-[200px] bg-zinc-600 rounded-lg overflow-hidden">
            <img className="w-full" src={image.base64}/>
          </div>
        ))
      }
    </div>
  )
}