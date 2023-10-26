"use client"

import { CameraPlus } from "@phosphor-icons/react"
import { ChangeEvent } from "react"

export function Camera() {
  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target   

    if (!input || !input.files || input.files.length <= 0) {
      return
    }

    const file = input.files[0]
    const fileReader = new FileReader()

    if (file && fileReader) {
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        const base64Image = fileReader.result
        // enviar a imagem para o contexto e limpar o arquivo selecionado
        console.log("base64 image: ", base64Image)
      }

      return
    }
    
    alert("imagem invalida")
  }

  return (
    <>
      <div
      className="fixed bottom-4 w-full px-2"
      >
        {/* <button
        className="
        bg-sky-500 w-full h-[50px] rounded-lg
        flex justify-center items-center
        ">
          <CameraPlus size={24}/>
        </button> */}

        <input 
        type="file" 
        accept="image/x-png,image/jpeg,image/gif"
        onChange={handleUpload}
        />
      </div>  
    </>
  )
}