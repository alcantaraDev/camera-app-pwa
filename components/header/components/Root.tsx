type HeaderRootProps = {
  children: React.ReactNode
}

export function HeaderRoot({ children }:HeaderRootProps) {
  return (
    <header className='bg-zinc-800 h-20 flex justify-center items-center'>
      <nav className="space-x-8">
        { children }
      </nav>
    </header>
  )
}