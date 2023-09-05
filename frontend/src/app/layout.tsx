import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Technical Test',
  description: 'Created by Wayter Paulo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  )
}
