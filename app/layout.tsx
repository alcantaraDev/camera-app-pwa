import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <body className={inter.className}>
        {/* <Header.Root>
          <Header.Link href='/'>Home</Header.Link>
          <Header.Link href='/form'>Form</Header.Link>
        </Header.Root> */}
        {children}
      </body>
    </html>
  )
}
