type SubmitFormProps = {
  label?: string
  className?: string
}

export function SubmitForm({label, className}:SubmitFormProps) {
  return (
    <button 
    type="submit"
    className={`p-2 bg-sky-600 hover:bg-sky-500 rounded-lg ${className}`}
    >
      <span className="font-medium">
        {label ?? "Enviar"}
      </span>
    </button>
  )
}