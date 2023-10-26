"use client"

import { Form } from "@/components/form";

type formType = {
  firstName: string
  lastName: string
}

export default function FormPage() {
  const handleSubmit = ({firstName, lastName}: formType) => {
    alert(`Olá ${firstName} ${lastName}`)
  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <Form.Root onSubmit={handleSubmit} className="bg-zinc-800 p-8 rounded-lg gap-4">
        <h1 className="text-2xl font-medium">Exemplo de Formulario</h1>

        <Form.Input 
        id="firstName" 
        placeholder="nome" 
        type="text" 
        required
        />

        <Form.Input 
        id="lastName" 
        placeholder="sobrenome" 
        type="text" 
        required
        />

        <Form.Submit/>
      </Form.Root>
    </main>
  )
}