"use client"

import { InputHTMLAttributes } from "react"
import { useFormContext } from "react-hook-form"

type InputFormProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  required?: boolean
}

export function FormInput({required=false, id, placeholder, ...props}: InputFormProps) {
  const { register, formState } = useFormContext()
  const errorMessage = formState.errors[id]?.message

  return (
    <div className="flex flex-col">
      <input
      {...props}
      {...register(id, {
        required: {value: required, message: `O campo ${placeholder} deve ser preenchido`}
      })}
      placeholder={placeholder}
      className="
      bg-zinc-700 border-2 border-zinc-600 hover:border-sky-700 
      focus:outline-none focus:border-sky-500 
      rounded-lg p-2
      "
      />
      {
      typeof errorMessage == "string" &&
      <span className="px-2 pt-1 text-sm text-red-400">
        {errorMessage}
      </span>
      }
    </div>
  )
}