"use client"

import { useForm, FormProvider } from "react-hook-form"

type RootFormProps = {
  children: React.ReactNode
  className?: string
  onSubmit: (data: any) => void
}

export function RootForm({ children, className, onSubmit }:RootFormProps) {
  const FormProps = useForm()
  const handleSubmit = FormProps.handleSubmit(onSubmit)

  return (
    <form 
    className={`flex flex-col ${className}`} 
    onSubmit={handleSubmit}
    >
      <FormProvider {...FormProps}>
        {children}
      </FormProvider>
    </form>
  )
}