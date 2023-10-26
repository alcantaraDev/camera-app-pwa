import { GitBranch, Images } from '@phosphor-icons/react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalProvider } from '@/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '[React Template] Web basic',
  description: 'Template de uma pagina web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <GlobalProvider>
        <body className={inter.className}>
          {children}
        </body>
      </GlobalProvider>
    </html>
  )
}
