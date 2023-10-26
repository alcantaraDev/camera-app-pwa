"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"

type HeaderLinkProps = {
  href: string
  children: React.ReactNode
}

export function HeaderLink({href, children}:HeaderLinkProps) {
  const [ inPage, setInPage ] = useState(false)
  const path = usePathname()

  useEffect(() => {
    if (path == href) {
      setInPage(true)
    } else {
      setInPage(false)
    }
  }, [path])


  return (
    <Link 
    href={href}
    data-inPage={inPage}
    className="
    py-2 text-zinc-400 hover:text-zinc-100 border-sky-500 
    data-[inPage=true]:border-b-2 data-[inPage=true]:text-white data-[inPage=true]:hover:text-white
    "
    >
      <span>
        { children }
      </span>
    </Link>
  )
}
