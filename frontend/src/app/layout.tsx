import "../styles/globals.css";

import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({weight: ["400", "500", "600", "700" ], subsets: ['latin'] })

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
